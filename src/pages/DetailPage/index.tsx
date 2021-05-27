import React, {useEffect, useState} from 'react';
import {
    Button,
    Container,
    Data,
    DataWrapper,
    Description,
    Image,
    ImageWrapper,
    InfoWrapper,
    Title,
    ButtonWrapper,
    Teste
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

const DetailPage: React.FC = () => {

    const [course, setCourse] = useState({} as CourseResponse);

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

            <Teste><h1>Comentarios</h1></Teste>
            <Modal show={isShow} error={isError}/>
        </Container>
    );
}

export default DetailPage;