import React, {useEffect, useState} from 'react';
import {Button, Container, Description, InfoWrapper, Title} from './styles';
import ModalModel from "../../core/models/ModalModel";

const Modal: React.FC<ModalModel> = ({show, error}) => {

    const [isShow, setIsShow] = useState(false);

    useEffect(() => {
        setIsShow(show)
    }, [show])

    const close = () => {
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