import React, {useEffect, useState} from 'react';
import {
    Button,
    ButtonWrapper,
    Container,
    Data,
    DataWrapper,
    Description,
    IconAdd,
    Image,
    ImageWrapper,
    InfoWrapper,
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

const DetailPage: React.FC = () => {

    const [course, setCourse] = useState({} as CourseResponse);
    const {authenticated} = useAppContext();
    const [show, setShow] = useState(false);

    const {slug} = useParams<DetailParams>();
    const history = useHistory();
    const role = useRole();

    const goLogin = () => {
        history.push("/login");
    }

    const enrollmentByCurse = (id: string) => {
        getEnrollmentByCourse(id).then(resp => {
            const slug = resp.data.content.course.slug
            history.push(`my/${slug}`)
        }).catch(error => console.log(error));
    }

    useEffect(() => {
        getCourseBySlug(slug).then(resp => {
            if (resp.status === 200 && resp.data.success) {
                setCourse(resp.data.content);
            }
        })
    }, [slug]);

    return (
        <Container>
            <ImageWrapper>
                <Image src={course.url}/>
                <TitleWrapper>
                    <Title>{course.name}</Title>
                </TitleWrapper>
                <DataWrapper>
                    <Data>{formatDate(course.start)}</Data>
                    <IconStar stars={3}/>
                </DataWrapper>
                <ButtonWrapper>
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

            <ModalAddLesson course={course} show={show} key={course.id}/>
        </Container>
    );
}

export default DetailPage;