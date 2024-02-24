import quizzical from '../images/quizzical.jpg';


function Quizzical() {

  return (
    <>
      <div>

        <h1>A short 2 page quiz game of 5 questions</h1>
        <p className='paragraph-container' >This was based on a project set in the scrimba bootcamp with no solution provided other than the desired design. This was created using React. The earliest version was prepared in mid Aapril 2023, and the second versin in mid  May 2023. The end product have the same look and effect, however you can see from looking at the source code that my react coding vastly improved in the space of a month, and led me to create a second attempt from scracth. </p>
        <img className='portFolioImage' src={quizzical} alt="Quizzical" />

        <p><a className='white' href="https://github.com/Eugenepython/Quizzical" target="_blank" rel="noopener noreferrer">First attempt Github page and source code</a></p>
        <p><a className='white' href="https://github.com/Eugenepython/15may" target="_blank" rel="noopener noreferrer">Second attempt Github page and source code</a></p>

        <p><a className='white' href="https://quiz-yourself-with-react.netlify.app/" target="_blank" rel="noopener noreferrer">Website</a></p>

      </div>
    </>
  )
}

export default Quizzical