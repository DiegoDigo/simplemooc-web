import React from 'react';
import {
    Container,
    Title,
    Description,
    DetailWrapper,
    ButtonWrapper,
    Button,
    DataWrapper,
    Data
} from './styles';
import {ICardItem} from "../../core/models/CardItemModel";
import {capitalize} from "../../core/util/string.util";
import {formatDate} from "../../core/util/data.util";
import IconStar from "../IconStars";
import {useAppContext} from "../../core/context/appContext";
import {useHistory} from "react-router-dom";
import Image from "../Image";


const CardItem: React.FC<ICardItem> = ({url, title, description, date, starts = 5, slug}) => {

    const {authenticated} = useAppContext();

    const history = useHistory();

    const isMyCourse = (): boolean => {
        return history.location.pathname.startsWith("/my")
    }

    return (
        <Container>
            <Image url={url} home={true}/>
            <DataWrapper>
                <Data>{formatDate(date)}</Data>
                <IconStar stars={starts}/>
            </DataWrapper>
            <DetailWrapper>
                <Title>{capitalize(title)}</Title>
                <Description>{capitalize(description)}</Description>
            </DetailWrapper>
            <ButtonWrapper>
                {authenticated && isMyCourse() ? <Button to={`/detail/my/${slug}`}>Fazer Curso</Button> :
                    <Button to={`/detail/${slug}`}>Ver mais</Button>}
            </ButtonWrapper>
        </Container>
    );
}

export default CardItem;