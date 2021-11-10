import { IHistory } from './History';
import { IPLayerSymbols } from './PlayerSymbols';

export interface IAppStore {
  turns: number;
  winner: string;
  xIsNext: boolean;
  history: IHistory;
  board: Array<string>;
  playerSymbols: IPLayerSymbols;
  handleBoxClick: (n: number) => void;
}
