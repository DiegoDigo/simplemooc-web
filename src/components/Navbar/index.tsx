import React, {useContext} from 'react';
import {Container, Item, ItemWrapper, Sair, Title} from './styles';
import {AppContext} from '../../core/context/appContext';
import {useHistory} from "react-router-dom";

const Navbar: React.FC = () => {

    const {authenticated, setAuthenticated, role, setRole} = useContext(AppContext);

    const history = useHistory();

    const logout = () => {
        localStorage.clear();
        setAuthenticated(false);
        setRole("");
        history.push("/")
    }

    return (

        <Container>
            <Title to="/">Simple Mooc</Title>
            <ItemWrapper>
                <Item to="/">Cursos</Item>
                {authenticated && role !== 'Admin' ? <Item to="/my">Meus Cursos</Item> : <></>}
                {authenticated ? <Sair onClick={() => logout()}>Sair</Sair> : <Item to="/login">Acessar</Item>}
            </ItemWrapper>
        </Container>

    );
}

export default Navbar;