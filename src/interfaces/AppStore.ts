import { IHistory } from './History';
import { IBox } from './Box';

export interface IAppStore {
  turns: number;
  winner: string;
  xIsNext: boolean;
  history: IHistory;
  board: Array<IBox>;
  onBoxClick: (n: number) => void;
}
