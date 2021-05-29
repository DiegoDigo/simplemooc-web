import React, {useEffect, useState} from 'react';

import {CardWrapper, Container, Title, WrapperNoData} from './styles';
import CardItem from "../../components/CardItem/Index";
import {CourseResponse} from "../../data/models/Response/CourseResponse";
import {getAllCourse} from "../../data/services/CursoService";
import {useHistory} from "react-router-dom";
import {getAllEnrollment} from "../../data/services/EnrollmentService";
import NoData from "../../components/NoData";

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


    const noData = () => {
        return (
            <WrapperNoData>
                <NoData key={courses.length} msg="Ainda não possui cursos"/>
            </WrapperNoData>
        );
    }

    return (
        <Container>
            <Title>{isMyCourse ? "Meus Cursos" : "Escolha um novo curso"}</Title>
            <CardWrapper>
                {courses.length === 0 ? noData():
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