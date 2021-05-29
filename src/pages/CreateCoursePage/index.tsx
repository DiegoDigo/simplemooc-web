import React, {useEffect, useState} from 'react';

import {CardWrapper, Container, Title, WrapperNoData, NoDataText} from './styles';
import CardItem from "../../components/CardItem/Index";
import {CourseResponse} from "../../data/models/Response/CourseResponse";
import {getAllCourse} from "../../data/services/CursoService";
import {useHistory} from "react-router-dom";
import {getAllEnrollment} from "../../data/services/EnrollmentService";

const HomePage: React.FC = () => {

    const history = useHistory()
    const [courses, setCourses] = useState([] as Array<CourseResponse>)
    const [isMyCourse, setIsMyCourse] = useState(false)


    useEffect(() => {
        if (history.location.pathname.startsWith("/my")) {
            setIsMyCourse(true);
            getAllEnrollment().then(resp => {
                if (resp.status === 200 && resp.data.success) {
                    setCourses(resp.data.content);
                }
            })
        } else {
            getAllCourse().then(resp => {
                if (resp.status === 200 && resp.data.success) {
                    setCourses(resp.data.content);
                }
            })
        }
    }, [history])


    const noDataComponent = () => {
        return (
            <WrapperNoData>
                <NoDataText>Ainda não possui cursos!</NoDataText>
            </WrapperNoData>
        );
    }

    return (
        <Container>
            <Title>{isMyCourse ? "Meus Cursos" : "Escolha um novo curso"}</Title>
            <CardWrapper>
                {courses.length === 0 ? noDataComponent() :
                    courses.map((course, index) => {
                        return (<CardItem key={course.id}
                                          url={course.url}
                                          starts={index === 0 ? 1 : index <= 5 ? index : 5}
                                          title={course.name}
                                          description={course.description}
                                          date={course.start}
                                          slug={course.slug}
                        />);
                    })}

            </CardWrapper>
        </Container>
    );
}

export default HomePage;