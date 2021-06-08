import React, {useEffect, useState} from 'react';
import {Button, Container,  InfoWrapper, Title} from './styles';
import ModalModel from "../../core/models/ModalModel";
import {ButtonClose, WrapperButton} from "../ModalAddLesson/styles";

const Modal: React.FC<ModalModel> = ({show, deleteFunction, setExcluir}) => {

    const [isShow, setIsShow] = useState(false);

    useEffect(() => {
        setIsShow(show)
    }, [show])

    const close = () => {
        setIsShow(false);
        setExcluir(false);
    }

    return (
        <Container show={isShow}>
            <InfoWrapper>
                <Title>Apagar o curso?</Title>
                <WrapperButton>
                    <Button type="submit" onClick={() => deleteFunction()}>Sim</Button>
                    <ButtonClose onClick={close} type="button">Não</ButtonClose>
                </WrapperButton>
            </InfoWrapper>
        </Container>
    );
}

export default Modal;