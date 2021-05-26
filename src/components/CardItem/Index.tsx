import React from 'react';
import {
    Container,
    Image,
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


const CardItem: React.FC<ICardItem> = ({url, title, description, date, starts = 5, slug}) => {
    return (
        <Container>
            <Image src={url}/>
            <DataWrapper>
                <Data>{formatDate(date)}</Data>
                <IconStar stars={starts}/>
            </DataWrapper>
            <DetailWrapper>
                <Title>{capitalize(title)}</Title>
                <Description>{capitalize(description)}</Description>
            </DetailWrapper>
            <ButtonWrapper>
                <Button to={`/detail/${slug}`}>Ver mais</Button>
            </ButtonWrapper>
        </Container>
    );
}

export default CardItem;