import { Formik } from "formik";
import React, { useEffect, useState } from 'react';
import ModalAddLessonModel from "../../core/models/ModalAddLessonModel";
import { LessonSchemaValidator } from "../../core/models/Validators/course.validator";
import { LessonRequest } from "../../data/models/Request/LessonRequest";
import { createLesson } from "../../data/services/lessonService";
import { FormStyle } from "../../pages/LoginPage/styles";
import Input from "../Input";
import InputFile from "../InputFile";
import Loading from "../Loading";
import Modal from "../Modal";
import { Button, ButtonClose, Container, Description, InfoWrapper, Title, WrapperButton } from './styles';


const ModalAddLesson: React.FC<ModalAddLessonModel> = ({course, show, setShowParent}) => {

    const initialValues: LessonRequest = {courseId: course.id, name: "", material: undefined, description: ""};
    
    const [isShow, setIsShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const [isShowInfo, setIsShowInfo] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        setIsShow(show);
    }, [show, course])


    const addLesson = async (values: LessonRequest, reset: Function) => {
        values.courseId = course.id;
        setLoading(true);
        await createLesson(values)
            .then(resp => {
                if (resp.status === 201 && resp.data.success) {
                    setIsShowInfo(false);
                    setError(false);
                    setLoading(false);
                    reset();
                }
            }).catch(_ => {
                setIsShowInfo(true);
                setError(true);
                setLoading(false);
            });
    }


    const close = () => {
        setIsShow(false);
        setShowParent(false);
    }

    return (
        <Container show={isShow}>
            <InfoWrapper error={false}>
                <Title>{course.name}</Title>
                <Description>Adicionar Aulas</Description>
                <Formik initialValues={initialValues} validationSchema={LessonSchemaValidator}
                        onSubmit={(values, {resetForm}) => {
                            addLesson(values, resetForm);
                        }}>
                    {(formik) => {
                        const {errors, setFieldValue} = formik;
                        return (
                            <FormStyle>
                                <Input label="Nome" placeholder="ex: aula de layout" name="name"
                                       isValid={(errors.name === undefined || errors.name === null)}/>
                                <InputFile label="Aula" name="material" setFieldValue={setFieldValue} type="video/*"
                                           isValid={(errors.material === undefined || errors.material === null)}/>
                                <Input label="Descrição" name="description"
                                       isValid={(errors.description === undefined || errors.description === null)}/>
                                <WrapperButton>
                                    {loading ? <Button> <Loading/></Button> :
                                        <Button type="submit">Adicionar Aula</Button>}
                                    <ButtonClose onClick={close}>Fechar</ButtonClose>
                                </WrapperButton>
                            </FormStyle>
                        );
                    }}
                </Formik>

            </InfoWrapper>
            <Modal show={isShowInfo} error={error}/>
        </Container>
    );
}

export default ModalAddLesson;