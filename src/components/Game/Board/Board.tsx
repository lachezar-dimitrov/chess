import React, { Component, Fragment, ReactNode } from "react";
import { observer } from "mobx-react";
import Box from "../../../containers/Game/Board/Box/Box";
import BoardModel from "../../../store/models/Board";

export type Props = {
    board: BoardModel;
};

@observer
export default class Board extends Component<Props> {
    render(): ReactNode {
        const { board } = this.props;

        return (
            <div data-test="board" className="board">
                {board?.allSquares.map((row, rowIndex) => (
                    <Fragment key={Math.random()}>
                        {row.map((box, columnIndex) => (
                            <Box value={box} row={rowIndex} column={columnIndex} key={Math.random()} />
                        ))}
                    </Fragment>
                ))}
            </div>
        );
    }
}
