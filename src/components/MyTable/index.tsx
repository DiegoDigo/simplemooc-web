import React from 'react';
import {Table, Header, Row, WrapperRow, Item, Col1, Col2, Col3, Col4} from './styles';
import {TableModel} from "../../core/models/TableModel";
import {formatDate} from "../../core/util/data.util";

const MyTable: React.FC<TableModel> = ({lessons}) => {

    return (
        <Table>
            <Header>
                <div className="col col-1">Numero</div>
                <div className="col col-2">Titulo</div>
                <div className="col col-3">Material</div>
                <div className="col col-4">Proxima Aula</div>
            </Header>
            <WrapperRow>
                {lessons.map((lessons) => {
                    return (
                        <Row key={lessons.id}>
                            <Item><Col1 data-label="Numero">{lessons.number}</Col1></Item>
                            <Item><Col2 data-label="Titulo">{lessons.name}</Col2></Item>
                            <Item><Col3 data-label="Material">{lessons.description}</Col3></Item>
                            <Item><Col4 data-label="Prixima Aula">{formatDate(lessons.releaseDate)}</Col4></Item>
                        </Row>
                    );
                })}

            </WrapperRow>
        </Table>
    );
}

export default MyTable;