import React from 'react';
import Cell from './cell';
import Table from './table';

let urls = require('../../../memes.json');

export default class App extends React.Component {
    render() {
        return (
            <Table>{
                urls.map((url, index) => (
                    <Cell
                        key={index}
                        url={url}
                    />
                ))
            }</Table>
        );
    }
};
