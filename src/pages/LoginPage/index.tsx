import React, {useContext} from 'react';
import {LoginSchemaValidator} from '../../core/models/Validators/user.validators';
import {Link, useHistory} from "react-router-dom";
import {Formik} from "formik";
import {
    Button,
    CardContainer,
    Container,
    CreateCount,
    FormContainer,
    FormStyle,
    LinkCreate,
    Spacer,
    SubTitleCard,
    TitleCard
} from './styles';
import {LoginRequest} from "../../data/models/Request/LoginRequest";
import Input from '../../components/Input';
import {setLocalStorage} from "../../core/util/localstorage.util";
import {login} from "../../data/services/UserService";
import {AppContext} from "../../core/context/appContext";


const LoginPage: React.FC = () => {

    const intialValues: LoginRequest = {email: "", password: ""};

    const history = useHistory();

    const {setAuthenticated, setRole} = useContext(AppContext);

    const loging = async (data: LoginRequest) => {
        await login(data).then((resp) => {
            if (resp.status === 200 && resp.data.success) {
                const {refresh, token} = resp.data.content
                setLocalStorage("token", token);
                setLocalStorage("refresh", refresh);
                setAuthenticated(true);
                setRole("Admin");
                if (history.length > 0) {
                    history.goBack();
                } else {
                    history.push("/");
                }
            }
        }).catch((error) => console.log(error));
    }


    return (
        <Container>
            <CardContainer>
                <FormContainer>
                    <TitleCard>Bem Vindo ao Simple Mooc</TitleCard>
                    <SubTitleCard>seu app open sorce de cursos</SubTitleCard>
                    <Formik initialValues={intialValues} validationSchema={LoginSchemaValidator}
                            onSubmit={(values) => {
                                loging(values);
                            }}>
                        {(formik) => {
                            const {errors} = formik;
                            return (
                                <FormStyle>
                                    <Input label="E-mail" placeholder="exemple@teste.com" type="email" name="email"
                                           isValid={(errors.email === undefined || errors.email === null)}/>
                                    <Input label="Senha" type="password" name="password"
                                           isValid={(errors.password === undefined || errors.password === null)}/>
                                    <Button type="submit">Acessar</Button>
                                </FormStyle>
                            );
                        }}
                    </Formik>
                    <Spacer/>
                    <CreateCount>
                        <LinkCreate>Não tem uma conta?, <Link
                            to="/register"><strong>Cadastre-se</strong></Link></LinkCreate>
                    </CreateCount>
                </FormContainer>
            </CardContainer>
        </Container>
    );
}

export default LoginPage;