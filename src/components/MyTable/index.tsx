import React from 'react';
import {Col1, Col2, Col4, Header, Item, Row, Table, WrapperRow} from './styles';
import {TableModel} from "../../core/models/TableModel";
import {formatDate} from "../../core/util/data.util";
import NoData from "../NoData";

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
                <Item><Col4>Proxima Aula</Col4></Item>
            </Header>
            <WrapperRow>
                {lessons.length === 0 ?
                    <NoData key={lessons.length} msg="Inda não possui aulas."/> : lessons.map((lessons) => {
                        return (
                            <Row key={lessons.id} onClick={() => setVideo(lessons.url)}>
                                <Item><Col1 data-label="Numero">{lessons.number}</Col1></Item>
                                <Item><Col2 data-label="Titulo">{lessons.name}</Col2></Item>
                                <Item><Col4 data-label="Prixima Aula">{formatDate(lessons.releaseDate)}</Col4></Item>
                            </Row>
                        );
                    })}

            </WrapperRow>
        </Table>
    );
}

export default MyTable;