import React, {useEffect, useState} from 'react';
import {Button, Container, InfoWrapper, Title} from './styles';
import {Formik} from "formik";
import {CourseSchemaValidator} from "../../core/models/Validators/course.validator";
import {FormStyle} from "../../pages/LoginPage/styles";
import Input from "../Input";
import InputFile from "../InputFile";
import {ButtonClose, WrapperButton} from "../ModalAddLesson/styles";
import {CourseRequest} from "../../data/models/Request/CourseRequest";
import {postCourse} from "../../data/services/CursoService";
import ModalCreateModel from "../../core/models/ModalCreateModel";
import Loading from "../Loading";

const ModalCreate: React.FC<ModalCreateModel> = ({show, setAdd, getData}) => {

    const initialValues: CourseRequest = {name: "", image: undefined, description: ""}

    const [isShow, setIsShow] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setIsShow(show);
    }, [show])


    const close = () => {
        setAdd(false);
        setIsShow(false);
    }

    const createCource = (value: CourseRequest, restForm: Function) => {
        setLoading(true);
        postCourse(value).then(resp => {
            if (resp.status === 201 && resp.data.success) {
                getData()
                restForm();
                setLoading(false);
            }
        }).catch(_ => setLoading(false))
    }

    return (
        <Container show={isShow}>
            <InfoWrapper error={false}>
                <Title>Criar Curso</Title>
                <Formik initialValues={initialValues} validationSchema={CourseSchemaValidator}
                        onSubmit={(values, {resetForm}) => {
                            createCource(values, resetForm);
                        }}>
                    {(formik) => {
                        const {errors, setFieldValue} = formik;
                        return (
                            <FormStyle>
                                <Input label="Nome" placeholder="ex: curso de layout react" name="name"
                                       isValid={(errors.name === undefined || errors.name === null)}/>
                                <InputFile label="Imagem Curso" name="image" setFieldValue={setFieldValue}
                                           isValid={(errors.image === undefined || errors.image === null)}/>
                                <Input label="Descrição" name="description" placeholder="Descriação do curso"
                                       isValid={(errors.description === undefined || errors.description === null)}/>
                                <WrapperButton>
                                    {loading ? <Button> <Loading/></Button> :
                                        <Button type="submit">Adicionar Curso</Button>}
                                    <ButtonClose type="button" onClick={close}>Fechar</ButtonClose>
                                </WrapperButton>
                            </FormStyle>
                        );
                    }}
                </Formik>

            </InfoWrapper>
        </Container>
    );
}

export default ModalCreate;