import React from 'react';
import {Table, Header, Row, WrapperRow, Item, Col1, Col2, Col3, Col4, Click} from './styles';
import {TableModel} from "../../core/models/TableModel";
import {formatDate} from "../../core/util/data.util";

const MyTable: React.FC<TableModel> = ({lessons, isVideos}) => {

    const setVideo = (url: string) => {
        isVideos("");
        isVideos(url);
    }

    return (
        <Table>
            <Header>
                <Item><Col1>Aula</Col1></Item>
                <Item><Col2>Titulo</Col2></Item>
                <Item><Col2>Descrição</Col2></Item>
                <Item><Col3>Material</Col3></Item>
                <Item><Col4>Proxima Aula</Col4></Item>
            </Header>
            <WrapperRow>
                {lessons.map((lessons) => {
                    return (
                        <Row key={lessons.id}>
                            <Item><Col1 data-label="Numero">{lessons.number}</Col1></Item>
                            <Item><Col2 data-label="Titulo">{lessons.name}</Col2></Item>
                            <Item><Col3 data-label="Descrição">{lessons.description}</Col3></Item>
                            <Item onClick={() => setVideo(lessons.url)}>
                                <Col3 data-label="Material">
                                    <Click>Assistir</Click>
                                </Col3>
                            </Item>
                            <Item><Col4 data-label="Prixima Aula">{formatDate(lessons.releaseDate)}</Col4></Item>
                        </Row>
                    );
                })}

            </WrapperRow>
        </Table>
    );
}

export default MyTable;