import React, {useEffect, useState} from 'react';

import {CardWrapper, Container, Title, WrapperHeader, WrapperNoData, Button, IconAdd} from './styles';
import CardItem from "../../components/CardItem/Index";
import {CourseResponse} from "../../data/models/Response/CourseResponse";
import {getAllCourse} from "../../data/services/CursoService";
import {useHistory} from "react-router-dom";
import {getAllEnrollment} from "../../data/services/EnrollmentService";
import NoData from "../../components/NoData";
import {useAppContext} from "../../core/context/appContext";
import useRole from "../../core/hooks/useRole";
import ModalCreate from "../../components/ModalCreate";

const HomePage: React.FC = () => {

    const history = useHistory()
    const [courses, setCourses] = useState([] as Array<CourseResponse>)
    const [add, setAdd] = useState<boolean>(false)
    const [isMyCourse, setIsMyCourse] = useState(false)
    const {authenticated} = useAppContext();
    const role = useRole()

    useEffect(() => {
        if (history.location.pathname.startsWith("/my")) {
            setIsMyCourse(true);
            setAdd(false);
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
            <WrapperHeader>
                <Title> {isMyCourse ? "Meus Cursos" : "Escolha um novo curso"}</Title>
                {authenticated && role === "Admin" ?
                    <Button onClick={() => setAdd(true)}><IconAdd/>Criar Aula</Button> :
                    <></>}
            </WrapperHeader>
            <CardWrapper>
                {courses.length === 0 ? noData() :
                    courses.map((course) => {
                        return (<CardItem key={course.id}
                                          url={course.url}
                                          star={course.star}
                                          title={course.name}
                                          description={course.description}
                                          date={course.createAt}
                                          slug={course.slug}
                        />);
                    })}

            </CardWrapper>

            <ModalCreate show={add} key={add.toString()} setAdd={setAdd}/>
        </Container>
    );
}

export default HomePage;