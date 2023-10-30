import journal1 from '../../public/images/journal1.jpg';
import journal2 from '../../public/images/journal2.jpg';


function Journal() {
  
    return (
      <>
        <div>
        
        <h1>Journal</h1>
        <p className = 'paragraph-container' >I created this full stack app on the railway platform. 
        The frontend was created with React and the backend with Node.js and PostgreSEL. The data is stored on 
        Railways server. The app is designed to be used on a lapto screen.</p>

        <p>I use this app myself every day for accountability purposes and looking back on my previous entries helps me keep track of my projects.</p>
        
        <img className = 'portFolioImage' src={journal1} alt="journal" />
        <img className = 'portFolioImage' src={journal2} alt="journal" />
        
        <p><a className = 'white' href="hhttps://github.com/Eugenepython/journal" target="_blank"> Github page and source code</a></p>
       
        
        <p><a className = 'white' href="https://frontend-production-eda2.up.railway.app/" target="_blank">Designed for laptop screen.</a></p>

        </div>
      </>
    )
  }
  
  export default Journal