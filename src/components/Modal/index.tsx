import React, {useEffect, useState} from 'react';
import {Container, InfoWrapper, Title, Description, Button} from './styles';
import ModalModel from "../../core/models/ModalModel";
import {useHistory} from "react-router-dom";

const Modal: React.FC<ModalModel> = ({show, error}) => {

    const history = useHistory();
    const [isShow, setIsShow] = useState(false);

    useEffect(() => {
        setIsShow(show)
    }, [show])

    const close = () => {
        if(!error){
            history.push("/my");
        }
        setIsShow(false);
    }

    return (
        <Container show={isShow}>
            <InfoWrapper error={error}>
                <Title error={error}>{error ? "Ops" : "Obrigado por escrever-se"}</Title>
                <Description error={error}>
                    {error ? "houve um erro já estamos verificando" : "Curso ja esta disponivel na tela de meus cursos."}
                </Description>
                <Button onClick={close}>Fechar</Button>
            </InfoWrapper>
        </Container>
    );
}

export default Modal;