import React, {useContext, useState} from 'react';
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
import {decode} from "jsonwebtoken";
import {Token} from "../../core/models/Token";
import Loading from "../../components/Loading";


const LoginPage: React.FC = () => {

    const intialValues: LoginRequest = {email: "", password: ""};
    const [loading, setLoading] = useState(false);

    const history = useHistory();

    const {setAuthenticated, setRole} = useContext(AppContext);

    const logging = async (data: LoginRequest) => {
        setLoading(true);
        await login(data).then((resp) => {
            if (resp.status === 200 && resp.data.success) {
                const {refresh, token} = resp.data.content
                setLocalStorage("token", token);
                setLocalStorage("refresh", refresh);
                const tokenDecode = decode(token) as Token;
                setRole(tokenDecode.role);
                setAuthenticated(true);

                if (history.length > 0) {
                    history.goBack();
                } else {
                    history.push("/");
                }
            }
        }).catch((_) => {
            setLoading(false);
        });
    }


    return (
        <Container>
            <CardContainer>
                <FormContainer>
                    <TitleCard>Bem Vindo ao Simple Mooc</TitleCard>
                    <SubTitleCard>seu app open sorce de cursos</SubTitleCard>
                    <Formik initialValues={intialValues} validationSchema={LoginSchemaValidator}
                            onSubmit={(values) => {
                                logging(values);
                            }}>
                        {(formik) => {
                            const {errors} = formik;
                            return (
                                <FormStyle>
                                    <Input label="E-mail" placeholder="exemple@teste.com" type="email" name="email"
                                           isValid={(errors.email === undefined || errors.email === null)}/>
                                    <Input label="Senha" type="password" name="password"
                                           isValid={(errors.password === undefined || errors.password === null)}/>
                                    {loading ? <Button><Loading/></Button> : <Button type="submit">Acessar</Button>}
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