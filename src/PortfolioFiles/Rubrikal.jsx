
import Rubrikal1 from '../images/Rubrikal1.jpeg';
import Rubrikal2 from '../images/Rubrikal2.jpeg';
import Rubrikal3 from '../images/Rubrikal3.jpeg';
import Rubrikal4 from '../images/Rubrikal4.jpeg';
import Rubrikal5 from '../images/Rubrikal5.jpeg';

function Rubrikal() {

  return (
    <>
      <div>

        <h1>Rubrikal, an app to track real time prices of stock and cryptocurrency investments</h1>

        <p className='paragraph-container' >Built with Firebase, Vite, and React, this app utilises APIs from coingecko and from FinnHub for access to real time prices of cryptocurrency and stocks.</p>
        <p className='paragraph-container' >This app is designed for mobile phone viewing. The complexity of harmonizing both APIs, coupled with the utilization of Firebase for hosting and database backend operations, underscores the app's sophisticated design. It is a powerful tool for tracking financial markets while ensuring a smooth and intuitive user interface.
        </p>
        <p className='paragraph-container'>I have approached both Coingecko an Finnhub as they welcome accredited use of their APIs and am approaching the google app store. This app caters both for real time price updates and takes into account both crypto and stock prices which are often kept seperately in records. </p>


        <img className='portFolioImage' src={Rubrikal1} />
        <img className='portFolioImage' src={Rubrikal2} />
        <img className='portFolioImage' src={Rubrikal3} />
        <img className='portFolioImage' src={Rubrikal4} />
        <img className='portFolioImage' src={Rubrikal5} />

        <p><a className='white' href="https://github.com/Eugenepython/finance-app" target="_blank" rel="noopener noreferrer">Github source code</a></p>

        <p><a className='white' href="https://crypto-7bf51.web.app/" target="_blank" rel="noopener noreferrer">App site, currently hosted with Firebase</a></p>

      </div>
    </>
  )
}

export default Rubrikal