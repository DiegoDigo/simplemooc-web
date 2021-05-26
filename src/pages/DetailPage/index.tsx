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
    ButtonWrapper
} from './styles';
import {useHistory, useParams} from 'react-router-dom'
import {DetailParams} from "../../core/models/params/DetailParams";
import {getCourseBySlug} from "../../data/services/CursoService";
import {CourseResponse} from "../../data/models/Response/CourseResponse";
import IconStar from "../../components/IconStars";
import {formatDate} from "../../core/util/data.util";
import {useAppContext} from "../../core/context/appContext";
import {getEnrollmentByCourse} from "../../data/services/EnrollmentService";

const DetailPage: React.FC = () => {

    const [course, setCourse] = useState({} as CourseResponse);
    const {authenticated} = useAppContext();

    const {slug} = useParams<DetailParams>();
    const history = useHistory();


    const goLogin = () => {
        history.push("/login");
    }

    const enrollmentByCurse = (id: string) => {
        getEnrollmentByCourse(id).then(resp => console.log(resp)).catch(error => console.log(error));
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
                    {authenticated ? <Button onClick={() => enrollmentByCurse(course.id)}>Inscrever-se</Button> :
                        <Button onClick={goLogin}>Cadastrar-se</Button>}
                </ButtonWrapper>
            </ImageWrapper>

            <InfoWrapper>
                <Title>{course.name}</Title>
                <Description>{course.description}</Description>
            </InfoWrapper>

        </Container>
    );
}

export default DetailPage;