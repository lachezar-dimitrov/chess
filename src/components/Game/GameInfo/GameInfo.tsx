// import React from 'react';
// import { observer } from 'mobx-react';
// import {
//   storeInjector,
// } from '../../../containers/StoreInjector/StoreInjector';
// import MovesHistory from './MovesHistory/MovesHistory';

// interface Props {
//   xIsNext?: boolean;
//   history?: Array<IMoveStore>;
//   step?: number;
// }

// @observer
// class GameInfo extends React.Component<Props> {
//   render(): React.ReactNode {
//     const {
//       xIsNext,
//       history,
//       step,
//     } = this.props;
//     const current = history[step];
//     const winner = calculateWinner(current.squares);

//     let status;

//     if (winner) {
//       status = `Winner: ${winner}`;
//     } else {
//       status = `Next player: ${xIsNext ? 'X' : 'O'}`;
//     }

//     return (
//       <div className="game-info">
//         <div>{status}</div>
//         <MovesHistory />
//       </div>
//     );
//   }
// }

// export default storeInjector<Props>((store) => ({
//   xIsNext: store.xIsNext,
//   history: store.history,
//   step: store.step,
// }), GameInfo);

export {};
