import React, {ChangeEvent, useEffect, useState} from 'react';

import {
    Button,
    CardWrapper,
    Container,
    IconAdd,
    InputField,
    Title,
    WrapperHeader,
    WrapperNoData,
    SearchWrapper,
    ButtonSearch,
    IconSearch
} from './styles';
import CardItem from "../../components/CardItem/Index";
import {CourseResponse} from "../../data/models/Response/CourseResponse";
import {getAllCourse, searchCourse} from "../../data/services/CursoService";
import {useHistory} from "react-router-dom";
import {getAllEnrollment} from "../../data/services/EnrollmentService";
import NoData from "../../components/NoData";
import {useAppContext} from "../../core/context/appContext";
import useRole from "../../core/hooks/useRole";
import ModalCreate from "../../components/ModalCreate";

const HomePage: React.FC = () => {

    const history = useHistory()
    const [courses, setCourses] = useState([] as Array<CourseResponse>)
    const [search, setSearch] = useState("");
    const [add, setAdd] = useState<boolean>(false)
    const [isMyCourse, setIsMyCourse] = useState(false)
    const {authenticated} = useAppContext();
    const role = useRole()

    const getData = () => {
        getAllCourse().then(resp => {
            if (resp.status === 200 && resp.data.success) {
                setCourses(resp.data.content);
            }
        })
    }

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
            getData();
        }
    }, [history])


    const seek = () => {
        if (search) {
            searchCourse(search)
                .then((resp) => {
                    if (resp.status === 200 && resp.data.success) {
                        setCourses(resp.data.content);
                    }
                })
        } else {
            getData();
        }

    }

    const noData = () => {
        return (
            <WrapperNoData>
                <NoData key={courses.length} msg="Ainda não possui cursos"/>
            </WrapperNoData>
        );
    }

    const handlerValue = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
        console.log(e.target.value)
        if(e.target.value === "" ||  e.target.value.length < 0) {
            getData()
        }
    }

    const searchComponent = () => {
        return (
            <SearchWrapper>
                <InputField value={search}
                            onChange={handlerValue}
                            placeholder="Procure o curso aqui." type="search" />
                <ButtonSearch onClick={seek}><IconSearch/></ButtonSearch>
            </SearchWrapper>);
    }

    return (
        <Container>
            <WrapperHeader>
                <Title> {isMyCourse ? "Meus Cursos" : "Escolha um novo curso"}</Title>
                {isMyCourse ? <></> : searchComponent()}
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

            <ModalCreate show={add} key={add.toString()} setAdd={setAdd} getData={getData}/>
        </Container>
    );
}

export default HomePage;