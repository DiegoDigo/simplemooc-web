import {Formik} from 'formik';
import React, {useState} from 'react';
import Input from '../../components/Input';
import {Button, CardContainer, Container, FormContainer, FormStyle, SubTitleCard, TitleCard} from "./styles";
import {useHistory} from "react-router-dom";
import {create} from "../../data/services/UserService";
import {setLocalStorage} from "../../core/util/localstorage.util";
import {RegisterSchemaValidator} from "../../core/models/Validators/user.validators";
import {RegisterRequest} from "../../data/models/Request/RegisterRequest";
import {useAppContext} from "../../core/context/appContext";
import {decode} from "jsonwebtoken";
import {Token} from "../../core/models/Token";
import Loading from "../../components/Loading";


const RegisterPage: React.FC = () => {

    const intialValues: RegisterRequest = {email: "", password: ""};
    const [loading, setLoading] = useState(false);
    const {setRole, setAuthenticated} = useAppContext();
    const history = useHistory();

    const register = async (data: RegisterRequest) => {
        setLoading(true);
        await create(data)
            .then((resp) => {
                const {refresh, token} = resp.data.content
                setLocalStorage("token", token);
                setLocalStorage("refresh", refresh);
                const tokenDecode = decode(token) as Token;
                setRole(tokenDecode.role);
                history.push("/");
                setAuthenticated(true);
            }).catch((_) => setLoading(false));
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
                                {loading ? <Button><Loading/></Button> : <Button type="submit">Registrar</Button>}
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