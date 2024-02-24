import MovieSearch from './PortfolioFiles/MovieSearch.jsx';
import CostsCalculator from './PortfolioFiles/CostsCalculator.jsx';
import CostsBuilder from './PortfolioFiles/CostsBuilder.jsx';
import ColorChooser from './PortfolioFiles/ColorChooser.jsx';
import Todoapp from './PortfolioFiles/Todoapp.jsx';
import Fitness from './PortfolioFiles/Fitness.jsx';
import Journal from './PortfolioFiles/Journal.jsx';
import Rubrikal from './PortfolioFiles/Rubrikal.jsx';
import SongContest from './PortfolioFiles/SongContest.jsx';


function TheApps() {
  return (
    <div>
      <div className = 'folio'>     <SongContest />    </div>
        <div className = 'folio'>     <Rubrikal />    </div>
      <div className = 'folio'>     <CostsBuilder />    </div>
        <div className = 'folio'>     <Fitness />    </div>
        <div className = 'folio'>     <Journal />    </div>
        <div className = 'folio'>     <CostsCalculator />    </div>
        <div className = 'folio'>     <Todoapp />    </div>
        <div className = 'folio'>     <MovieSearch />    </div>
        <div className = 'folio'>     <ColorChooser />    </div>
    </div>
  );
}

export default TheApps;