import thecountdown from '../images/thecountdown.png';


function CountDown() {

  return (
    <>
      <div>

        <h1>A selection of games premised on the UK show Countdown.</h1>
        <p className='paragraph-container' >This quiz show contains two parts, one based on correctly answering a 8 word anagram, using  a dictionary API and a second thesaurus API, and the second obtaining random numbers and setting out a path to calculate a randomly chosen target number.  </p>
        <img className='portFolioImage' src={thecountdown} alt="countdown" />

        <p><a className='white' href="https://github.com/Eugenepython/countdown" target="_blank" rel="noopener noreferrer">Github source code</a></p>

        <p><a className='white' href="https://countdownquiz.netlify.app/" target="_blank" rel="noopener noreferrer">Website (desktop view)</a></p>

      </div>
    </>
  )
}

export default CountDown

