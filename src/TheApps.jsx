import MovieSearch from './PortfolioFiles/MovieSearch.jsx';
import CostsCalculator from './PortfolioFiles/CostsCalculator.jsx';
import CostsBuilder from './PortfolioFiles/CostsBuilder.jsx';
import ColorChooser from './PortfolioFiles/ColorChooser.jsx';
import Todoapp from './PortfolioFiles/Todoapp.jsx';
import Fitness from './PortfolioFiles/Fitness.jsx';


function TheApps() {
  return (
    <div>
      <div className = 'folio'>     <CostsBuilder />    </div>
        <div className = 'folio'>     <Fitness />    </div>
        <div className = 'folio'>     <CostsCalculator />    </div>
        <div className = 'folio'>     <Todoapp />    </div>
        <div className = 'folio'>     <MovieSearch />    </div>
        <div className = 'folio'>     <ColorChooser />    </div>
    </div>
  );
}

export default TheApps;