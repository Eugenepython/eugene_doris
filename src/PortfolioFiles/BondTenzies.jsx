import bondTenzi from '../images/bondTenzi.jpg';

function BondTenzies() {

  return (
    <>
      <div>

        <h1>A game to match all 6 squares to the same Bond movie</h1>
        <p className='paragraph-container' >This was based on a project set in the scrimba bootcamp and modified to flick through various random James Bond movie scenes and the player must click to freeze or find another image until they can match 6 scenes all from the same movie. </p>
        <img className='portFolioImage' src={bondTenzi} alt="Quizzical" />

        <p><a className='white' href="https://github.com/Eugenepython/JamesBondTenzi" target="_blank" rel="noopener noreferrer">Github source code</a></p>

        <p><a className='white' href="https://james-bond-tenzies.netlify.app/" target="_blank" rel="noopener noreferrer">Website (mobile view)</a></p>

      </div>
    </>
  )
}

export default BondTenzies