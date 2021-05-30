import React, {useEffect, useState} from 'react';
import {
    Container,
    Data,
    DataWrapper,
    Description,
    ImageWrapper,
    InfoWrapper,
    SubTitle,
    Title,
    TitleWrapper,
    Video,
    WrapperHeader,
    WrapperLesson
} from './styles';
import {useParams} from 'react-router-dom'
import {getCourseBySlug} from "../../data/services/CursoService";
import {CourseResponse} from "../../data/models/Response/CourseResponse";
import IconStar from "../../components/IconStars";
import {formatDate} from "../../core/util/data.util";
import {useAppContext} from "../../core/context/appContext";
import Modal from "../../components/Modal";
import {getLesson} from "../../data/services/lessonService";
import {LessonResponse} from "../../data/models/Response/LessonResponse";
import MyTable from "../../components/MyTable";
import {DetailParams} from "../../core/models/params/DetailParams";
import Image from "../../components/Image";


const DetailMyCoursePage: React.FC = () => {

    const [course, setCourse] = useState({} as CourseResponse);
    const [lessons, setLessons] = useState([] as Array<LessonResponse>);
    const [urlVideo, setUrlVideo] = useState<string>();

    const [isShow, setIsShow] = useState(false);
    const [isError, setIsError] = useState(false);

    const {authenticated} = useAppContext();

    const {slug} = useParams<DetailParams>();


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
                }).catch(_ => {
                setIsShow(true);
                setIsError(true);
            });
        } else {
            getCourseBySlug(slug).then(resp => {
                if (resp.status === 200 && resp.data.success) {
                    setCourse(resp.data.content);
                }
            });

        }
    }, [slug, authenticated, urlVideo]);


    const video = (url: string) => {
        return (
            <Video controls={true} autoPlay key={url}>
                <source src={url} type="video/mp4"/>
            </Video>
        )
    }

    return (
        <Container>
            <ImageWrapper>
                <Image url={course.url}/>
                <DataWrapper>
                    <Data>{formatDate(course.start)}</Data>
                    <IconStar stars={3}/>
                </DataWrapper>
                <TitleWrapper>
                    <Title>{course.name}</Title>
                    <Description>{course.description}</Description>
                </TitleWrapper>
            </ImageWrapper>

            <InfoWrapper>
                {urlVideo ? video(urlVideo) : <></>}
            </InfoWrapper>

            {authenticated ?
                <WrapperLesson>
                    <WrapperHeader>
                        <SubTitle>Aulas</SubTitle>
                    </WrapperHeader>
                    <MyTable lessons={lessons} isVideos={setUrlVideo}/>
                </WrapperLesson> :
                <></>}
            <Modal show={isShow} error={isError}/>
        </Container>
    );
}

export default DetailMyCoursePage;