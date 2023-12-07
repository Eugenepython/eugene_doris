

import TintinGame from './PortfolioFiles/TintinGame.jsx';
import Quizzical from './PortfolioFiles/Quizzical.jsx';
import BondTenzies from './PortfolioFiles/BondTenzies.jsx';
import CrypticBond from './PortfolioFiles/CrypticBond.jsx';
import TypingGame from './PortfolioFiles/TypingGame.jsx';
import BondImageGame from './PortfolioFiles/BondImageGame.jsx';
import CountDown from './PortfolioFiles/CountDown.jsx';
import SecretSanta from './PortfolioFiles/SecretSanta.jsx';

function Games() {
  return (
    <div>

      <div className='folio'>  <SecretSanta />   </div>
      <div className='folio'>  <BondTenzies />   </div>
      <div className='folio'>  <CountDown />   </div>
      <div className='folio'>     <Quizzical />    </div>
      <div className='folio'>  <TintinGame />   </div>
      <div className='folio'>  <CrypticBond />   </div>
      <div className='folio'>  <TypingGame />   </div>
      <div className='folio'>  <BondImageGame />   </div>
    </div>
  );
}

export default Games;
