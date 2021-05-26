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
    Data,
    Stars,
    IconWrapper
} from './styles';
import {ICardItem} from "../../core/models/CardItemModel";
import {capitalize} from "../../core/util/string.util";
import {formatDate} from "../../core/util/data.util";


const CardItem: React.FC<ICardItem> = ({url, title, description, date, starts = 5}) => {
    return (
        <Container>
            <Image src={url}/>
            <DataWrapper>
                <Data>{formatDate(date)}</Data>
                <IconWrapper>
                    {Array.from({ length: starts }, (v, i) => (
                        <Stars />
                    ))}
                </IconWrapper>
            </DataWrapper>
            <DetailWrapper>
                <Title>{capitalize(title)}</Title>
                <Description>{capitalize(description)}</Description>
            </DetailWrapper>
            <ButtonWrapper>
                <Button to="/login">Ver mais</Button>
            </ButtonWrapper>
        </Container>
    );
}

export default CardItem;