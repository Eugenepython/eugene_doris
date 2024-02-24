import costsbuild from '../images/costsbuild.jpg';


function CostsBuilder() {

  return (
    <>
      <div>

        <h1>A basic time recording system and case management system for lawyers</h1>
        <p className='paragraph-container' >This is basic time recording system designed for lawyers to capture their time based on my own experience and use of such systems. I tried to make it user friendly and relevant for legal costs negotations in terms of capturing the right descriptions and type of costs clamed. I also used local storage to be able to store time recorded on a pshort pre existing library of cases, as well as add further cases as the user wants. It is specifically designed to be used on a phone screen for ease of recording for lawyers, as time recording is often one of the most tedious and forgotten aspects of lawyers work. </p>
        <img className='portFolioImage' src={costsbuild} alt="costscalc" />

        <p><a className='white' href="https://github.com/Eugenepython/costsbuilder" target="_blank" rel="noopener noreferrer">Github source code</a></p>

        <p><a className='white' href="https://costsbuilder.netlify.app/" target="_blank" rel="noopener noreferrer">Website (mobile view)</a></p>

      </div>
    </>
  )
}

export default CostsBuilder