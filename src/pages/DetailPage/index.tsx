import React, {useEffect, useState} from 'react';
import {
    Button,
    ButtonWrapper,
    Container,
    Data,
    DataWrapper,
    Description,
    Image,
    ImageWrapper,
    InfoWrapper,
    Teste,
    Title

} from './styles';
import {useHistory, useParams} from 'react-router-dom'
import {DetailParams} from "../../core/models/params/DetailParams";
import {getCourseBySlug} from "../../data/services/CursoService";
import {CourseResponse} from "../../data/models/Response/CourseResponse";
import IconStar from "../../components/IconStars";
import {formatDate} from "../../core/util/data.util";
import {useAppContext} from "../../core/context/appContext";
import {getEnrollmentByCourse} from "../../data/services/EnrollmentService";
import Modal from "../../components/Modal";
import {getLesson} from "../../data/services/lessonService";
import {LessonResponse} from "../../data/models/Response/LessonResponse";
import MyTable from "../../components/MyTable";


const DetailPage: React.FC = () => {

    const [course, setCourse] = useState({} as CourseResponse);
    const [lessons, setLessons] = useState([] as Array<LessonResponse>);

    const [isShow, setIsShow] = useState(false);
    const [isError, setIsError] = useState(false);

    const {authenticated} = useAppContext();

    const {slug} = useParams<DetailParams>();
    const history = useHistory();


    const goLogin = () => {
        history.push("/login");
    }

    const enrollmentByCurse = async (id: string) => {
        await getEnrollmentByCourse(id)
            .then(resp => {
                if (resp.data.success && resp.status === 200) {
                    setIsShow(true);
                    setIsError(false);
                } else {
                    setIsShow(true);
                    setIsError(true)
                }
            })
            .catch(_ => {
                setIsShow(true);
                setIsError(true);
            });
    }

    useEffect(() => {

        if (authenticated) {
            getCourseBySlug(slug)
                .then((resp) => {
                    if (resp.status === 200 && resp.data.success) {
                        setCourse(resp.data.content);
                        return getLesson(resp.data.content.id);
                    }
                })
                .then((response) => {
                    if (response?.status === 200 && response?.data.success) {
                        setLessons(response?.data.content);

                    }
                });

        } else {
            getCourseBySlug(slug).then(resp => {
                if (resp.status === 200 && resp.data.success) {
                    setCourse(resp.data.content);
                }
            });
        }


    }, [slug, authenticated]);

    return (
        <Container>
            <ImageWrapper>
                <Image src={course.url}/>
                <DataWrapper>
                    <Data>{formatDate(course.start)}</Data>
                    <IconStar stars={3}/>
                </DataWrapper>
                <ButtonWrapper>
                    {authenticated ?
                        <Button onClick={() => enrollmentByCurse(course.id)}>Inscrever-se</Button> :
                        <Button onClick={goLogin}>Cadastrar-se</Button>
                    }
                </ButtonWrapper>
            </ImageWrapper>

            <InfoWrapper>
                <Title>{course.name}</Title>
                <Description>{course.description}</Description>
            </InfoWrapper>

            {authenticated ?
                <Teste>
                    <Title>Aulas</Title>
                    <MyTable lessons={lessons}/>
                </Teste> :
                <></>}
            <Modal show={isShow} error={isError}/>
        </Container>
    );
}

export default DetailPage;