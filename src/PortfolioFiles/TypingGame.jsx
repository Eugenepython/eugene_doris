import textTyping from '../../public/images/textTyping.jpg';

function TypingGame() {
  
    return (
      <>
        <div>
        
        <h1>A simple game to time and measure the precise retyping of a randomly chosen verse </h1>
        <p className = 'paragraph-container' >I fetched data from an  API to take random verses from the Bible of varying lengths withn certian parameters. You then have 30 seconds to retype that verse as accurately as possible with the differences in characters being recorded. </p>
        <img className = 'portFolioImage' src={textTyping} alt="typing" />
        
        <p><a className = 'white' href="https://github.com/Eugenepython/typinggame" target="_blank">Github page and source code</a></p>
        <p><a className = 'white' href="https://verse-typing-practice.netlify.app/" target="_blank">Website</a></p>

        </div>
      </>
    )
  }
  
  export default TypingGame