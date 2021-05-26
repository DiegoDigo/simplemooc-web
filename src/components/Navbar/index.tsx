import React from 'react';
import {Container, Item, ItemWrapper, Title} from './styles';


const Navbar: React.FC = () => {
    return (
        <Container>
            <Title to="/">Simple Mooc</Title>
            <ItemWrapper>
                <Item to="/login">Cursos</Item>
                <Item to="/login">Acessar</Item>
            </ItemWrapper>
        </Container>
    );
}

export default Navbar;