import { Squares } from '../../types/common';

export interface IAppStore {
  xIsNext: boolean;
  squares: Squares;
  value: number;
  onClick: (n: number) => void;
}

// export interface IGameStore {
//   board: IBoardStore;
//   gameInfo: IGameInfoStore,
// }

// export interface IBoardStore {
//   squares: Array<string>;
// }

// export interface IGameInfoStore {
//   step: number;
//   xIsNext: boolean;
//   onClick: UnaryFunction<number, void>
// }
