import {Formik} from 'formik';
import React from 'react';
import Input from '../../components/Input';
import {Button, CardContainer, Container, FormContainer, FormStyle, SubTitleCard, TitleCard} from "./styles";
import {useHistory} from "react-router-dom";
import {create} from "../../data/services/UserService";
import {setLocalStorage} from "../../core/util/localstorage.util";
import {RegisterSchemaValidator} from "../../core/models/Validators/user.validators";
import {RegisterRequest} from "../../data/models/Request/RegisterRequest";


const RegisterPage: React.FC = () => {

    const intialValues: RegisterRequest = {email: "", password: ""};
    const history = useHistory();

    const register = async (data: RegisterRequest) => {
        await create(data)
            .then((resp) => {
                const {refresh, token} = resp.data.content
                setLocalStorage("token", token);
                setLocalStorage("refresh", refresh);
                history.push("/");
            }).catch((error) => console.log(error));
    }

    return (<Container>
        <CardContainer>
            <FormContainer>
                <TitleCard>Criar conta no Simple Mooc</TitleCard>
                <SubTitleCard>seu app open sorce de cursos</SubTitleCard>
                <Formik initialValues={intialValues} validationSchema={RegisterSchemaValidator}
                        onSubmit={(values) => {
                            register(values);
                        }}>
                    {(formik) => {
                        const {errors} = formik;
                        return (
                            <FormStyle>
                                <Input label="E-mail" placeholder="exemple@teste.com" type="email" name="email"
                                       isValid={(errors.email === undefined || errors.email === null)}/>
                                <Input label="Senha" type="password" name="password"
                                       isValid={(errors.password === undefined || errors.password === null)}/>
                                <Button type="submit">Criar Conta</Button>
                            </FormStyle>
                        );
                    }}
                </Formik>

            </FormContainer>
        </CardContainer>
    </Container>);
}

export default RegisterPage
;