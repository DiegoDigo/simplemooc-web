import React, {useEffect, useState} from 'react';

import {CardWrapper, Container, Title} from './styles';
import CardItem from "../../components/CardItem/Index";
import {CourseResponse} from "../../data/models/Response/CourseResponse";
import {getAllCourse} from "../../data/services/CursoService";

const HomePage: React.FC = () => {

    const [courses, setCourses] = useState([] as Array<CourseResponse>)

    useEffect(() => {
        getAllCourse().then(resp => {
            if (resp.status === 200 && resp.data.success) {
                setCourses(resp.data.content);
            }
        })
    }, [])

    return (
        <Container>
            <Title>Escolha seu novo curso</Title>
            <CardWrapper>
                {courses.map((course , index) => {
                    return (<CardItem key={course.id}
                                      url={course.url}
                                      starts={index}
                                      title={course.name}
                                      description={course.description}
                                      date={course.start}
                    />);
                })}

            </CardWrapper>
        </Container>
    );
}

export default HomePage;