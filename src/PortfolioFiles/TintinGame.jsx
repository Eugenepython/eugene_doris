import TintinImage from '../../public/images/TintinGame.jpg';

function TintinGame() {
  
    return (
      <>
        <div>
        
        <h1>A game to match images with Tintin</h1>
        <p className = 'paragraph-container' >This was an effor with vanilla javascript created around January 2023. I was a Tintin fan when younger and thought  would draw on some childhood passions for new games. If I would redo this game, the design of the score and change of image could be smoother and I may revist and update this game.</p>
        <img className = 'portFolioImage' src={TintinImage} alt="Tintin game" />
        
        <p><a className = 'white' href="https://github.com/Eugenepython/TintinGame/" target="_blank">Github page and source code</a></p>
        <p><a className = 'white' href="https://tintin-image-matching-game.netlify.app/" target="_blank">Website</a></p>

        </div>
      </>
    )
  }
  
  export default TintinGame