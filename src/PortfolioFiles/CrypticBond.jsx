import crypticBond from '../../public/images/crypticBond.jpg';


function CrypticBond() {
  
    return (
      <>
        <div>
        
        <h1>A game to match cryptic clues with Bond movies</h1>
        <p className = 'paragraph-container' >This is a game where random crypic clues are generated, with possible answers appearing at random and only one correct answer. The clues were created by myself from my own knowledge of Bond films. </p>
        <img className = 'portFolioImage' src={crypticBond} alt="crypticBond" />
        
        <p><a className = 'white' href="https://github.com/Eugenepython/crypticBond" target="_blank">Github source code</a></p>
        
        <p><a className = 'white' href="https://cryptic-bond.netlify.app/" target="_blank">Website</a></p>

        </div>
      </>
    )
  }
  
  export default CrypticBond