import React, {useEffect, useState} from 'react';
import {Button, Container, InfoWrapper, Title, Description} from './styles';
import {Formik} from "formik";
import {CourseUpdateSchemaValidator} from "../../core/models/Validators/course.validator";
import {FormStyle} from "../../pages/LoginPage/styles";
import Input from "../Input";
import InputFile from "../InputFile";
import {ButtonClose, WrapperButton} from "../ModalAddLesson/styles";
import {useHistory} from "react-router-dom";
import {CourseUpdateRequest} from "../../data/models/Request/CourseUpdateRequest";
import ModalUpdateModel from "../../core/models/ModalUpdateModel";
import {updateCourse} from "../../data/services/CursoService";

const ModalUpdate: React.FC<ModalUpdateModel> = ({show, setAdd, course}) => {

    const initialValues: CourseUpdateRequest = {
        id: course.id ? course.id : "",
        name: course.name ? course.name : "",
        image: undefined,
        description: course.description ? course.description : "",
    }


    const [isShow, setIsShow] = useState(false);
    const history = useHistory();

    useEffect(() => {
        setIsShow(show);
    }, [show])


    const update = (value: CourseUpdateRequest) => {
        updateCourse(value)
            .then((_) => {
                close();
                history.go(0);
            });
    }

    const close = () => {
        setAdd(false);
        setIsShow(false);
    }


    return (
        <Container show={isShow}>
            <InfoWrapper error={false}>
                <Title>Atualizaro o Curso</Title>
                <Description>{course.name}</Description>
                <Formik initialValues={initialValues}
                        validationSchema={CourseUpdateSchemaValidator}
                        enableReinitialize={true}
                        onSubmit={(values) => {
                            update(values);
                        }}>
                    {(formik) => {
                        const {errors, setFieldValue} = formik;
                        return (
                            <FormStyle>
                                <Input label="Nome" placeholder="ex: curso de layout react" name="name"
                                       isValid={(errors.name === undefined || errors.name === null)}
                                />

                                <InputFile label="Imagem Curso" name="image" setFieldValue={setFieldValue}
                                           isValid={(errors.image === undefined || errors.image === null)}/>

                                <Input label="Descrição" name="description" placeholder="Descriação do curso"
                                       isValid={(errors.description === undefined || errors.description === null)}
                                />
                                <WrapperButton>
                                    <Button type="submit">Atualizar</Button>
                                    <ButtonClose onClick={close} type="button">Fechar</ButtonClose>
                                </WrapperButton>
                            </FormStyle>
                        );
                    }}
                </Formik>

            </InfoWrapper>
        </Container>
    );
}

export default ModalUpdate;