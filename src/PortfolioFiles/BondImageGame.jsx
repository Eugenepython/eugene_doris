import bondImage from '../images/bondImage.png';

function BondImageGame() {

  return (
    <>
      <div>

        <h1>A game to match the James Bond movie with the relevant scene</h1>
        <p className='paragraph-container' >I used vanilla javascript for this game in which one tries to match the image to the movie by pressing a button corresponding to the randomly chosen image. Bonus points can be scored if the image can be pressed before being clearly 'unfuzzed.' Works best on desktop owing to the large number of buttons.</p>
        <img className='portFolioImage' src={bondImage} alt="bondImage" />

        <p><a className='white' href="https://github.com/Eugenepython/JamesBondImageGame" target="_blank" rel="noopener noreferrer">Github source code</a></p>

        <p><a className='white' href="https://bond-image-match.netlify.app/" target="_blank" rel="noopener noreferrer">Website</a></p>

      </div>
    </>
  )
}

export default BondImageGame