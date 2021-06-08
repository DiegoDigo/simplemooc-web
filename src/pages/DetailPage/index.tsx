import React, {useEffect, useState} from 'react';
import {
    Button,
    ButtonWrapper,
    Container,
    Data,
    DataWrapper,
    Description,
    IconAdd,
    IconCourse,
    IconEdit,
    ImageWrapper,
    InfoAdminWrapper,
    InfoWrapper,
    Number,
    Title,
    TitleWrapper
} from './styles';
import {useHistory, useParams} from 'react-router-dom'
import {DetailParams} from "../../core/models/params/DetailParams";
import {getCourseBySlug} from "../../data/services/CursoService";
import {CourseResponse} from "../../data/models/Response/CourseResponse";
import IconStar from "../../components/IconStars";
import {formatDate} from "../../core/util/data.util";
import {useAppContext} from "../../core/context/appContext";
import {getEnrollmentByCourse} from "../../data/services/EnrollmentService";
import useRole from "../../core/hooks/useRole";
import ModalAddLesson from "../../components/ModalAddLesson";
import Image from "../../components/Image";
import ModalUpdate from "../../components/ModalUpdate";
import {getQuantityLesson} from "../../data/services/lessonService";


const DetailPage: React.FC = () => {

    const [course, setCourse] = useState({} as CourseResponse);
    const [quantityLesson, setQuantityLesson] = useState(0);
    const {authenticated} = useAppContext();
    const [show, setShow] = useState(false);
    const [edit, setEdit] = useState(false);
    const [url, setUrl] = useState<any>(undefined);

    const {slug} = useParams<DetailParams>();
    const history = useHistory();
    const role = useRole();

    const goLogin = () => {
        history.push("/login");
    }

    const enrollmentByCurse = (id: string) => {
        getEnrollmentByCourse(id).then(resp => {
            const {slug} = resp.data.content
            history.push(`my/${slug}`)
        });
    }

    const getQuantityLessonCallBack = (id: string) => {
        return getQuantityLesson(id)
            .then((resp) => {
                if (resp.status === 200 && resp.data.success) {
                    setQuantityLesson(resp.data.content.quantity)
                }
            });
    }


    useEffect(() => {
        setEdit(false);
        getCourseBySlug(slug)
            .then(resp => {
                if (resp.status === 200 && resp.data.success) {
                    setCourse(resp.data.content);
                    setUrl(resp.data.content.url);
                    return getQuantityLesson(resp.data.content.id)
                }
            }).then((resp) => {
            if (resp?.status === 200 && resp?.data?.success) {
                setQuantityLesson(resp.data.content.quantity)
            }
        })
    }, [slug]);

    return (
        <Container>
            <ImageWrapper>
                <Image url={url}/>
                <TitleWrapper>
                    <Title>{course.name}</Title>
                </TitleWrapper>
                <DataWrapper>
                    <Data>{formatDate(course.createAt)}</Data>
                    <IconStar stars={course.star}/>
                </DataWrapper>
                <InfoAdminWrapper>
                    <IconCourse/>
                    <Description><Number>{quantityLesson}</Number> Aulas</Description>
                </InfoAdminWrapper>
                <ButtonWrapper>
                    {authenticated && role === "Admin" ?
                        <Button onClick={() => setEdit(true)}><IconEdit/>Editar</Button> :
                        <></>}
                    {authenticated && role === "Admin" ?
                        <Button onClick={() => setShow(true)}><IconAdd/>Adicionar aula</Button> :
                        <></>}
                    {role !== 'Admin' ? authenticated ?
                        <Button onClick={() => enrollmentByCurse(course.id)}>Inscrever-se</Button> :
                        <Button onClick={goLogin}>Cadastrar-se</Button> : <></>}
                </ButtonWrapper>
            </ImageWrapper>

            <InfoWrapper>
                <Description>{course.description}</Description>
            </InfoWrapper>

            <ModalAddLesson course={course} show={show} key={course.id} setShowParent={setShow} getQuantityLesson={getQuantityLessonCallBack}/>
            <ModalUpdate show={edit} setAdd={setEdit} course={course}/>
        </Container>
    );
}

export default DetailPage;