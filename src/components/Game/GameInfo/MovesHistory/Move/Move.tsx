// import React from 'react';
// import { observer } from 'mobx-react';
// import { UnaryFunction } from '../../../../../types/Functions';
// import {
//     storeInjector
// } from '../../../../../containers/StoreInjector/StoreInjector';
// import { IAppStore } from '../../../../../interfaces/store/IAppStore';

// interface Props {
//   move: number,
//   jumpTo: UnaryFunction<number, void>;
// }

// @observer
// class Move extends React.Component<Props> {
//   render(): React.ReactNode {
//     const { move, jumpTo } = this.props;
//     const desc = move
//       ? `Go to move #${move}`
//       : 'Go to game start';

//     return (
//       <li>
//         <button
//           type="button"
//           onClick={() => jumpTo(move)}
//         >
//           {desc}
//         </button>
//       </li>
//     );
//   }
// }

// export default storeInjector((store) => ({
//   move: store.move,
//   jumpTo: store.jumpTo,
// }), Move);

export {};
