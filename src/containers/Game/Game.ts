import Game, { Props } from '../../components/Game/Game';
import connect from '../StoreInjector';

export default connect<Props>((store) => ({
  draws: store.draws,
  players: store.players,
  winnerSymbol: store.winnerSymbol,
  currentPlayerIndex: store.currentPlayerIndex,
}))(Game);
