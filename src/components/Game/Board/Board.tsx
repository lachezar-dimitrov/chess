"use-client";

import React, { Component, Fragment, ReactNode } from "react";
// import { observer } from "mobx-react";
import Box from "../../../containers/Game/Board/Box/Box";
import BoardModel from "../../../store/models/Board";

export interface BoardProps {
    board: BoardModel;
}

export default function Board(props: BoardProps) {
    const { board } = props;

    return (
        <div data-test="board" className="grid grid-cols-3 grid-rows-3 gap-1.5 m-5 h-board-height w-board-height">
            {board?.allSquares.map((row, rowIndex) => (
                <Fragment key={rowIndex}>
                    {row.map((box, columnIndex) => (
                        <Box value={box} row={rowIndex} column={columnIndex} key={columnIndex} />
                    ))}
                </Fragment>
            ))}
        </div>
    );
}
