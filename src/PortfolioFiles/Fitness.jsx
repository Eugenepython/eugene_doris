import fitness from '../images/fitness.jpg';


function Fitness() {

  return (
    <>
      <div>

        <h1>Workout Tracker</h1>
        <p className='paragraph-container' >This is a full stack app. The frontend was created with React and the backend with Node.js and PostgreSEL. It is hosted and deployed on the Railway platform and the DBhost database.

          Parts of the human body are displayed and highlighted depending on how recent the body workout is, and a history is kept of the user's history and accessible to them via their account.</p>
        <img className='portFolioImage' src={fitness} alt="fitness" />

        <p><a className='white' href="https://github.com/Eugenepython/RAILWAY-FITNESS" target="_blank" rel="noopener noreferrer"> Github page and source code</a></p>


        <p><a className='white' href="https://myfitness-client-production.up.railway.app/" target="_blank" rel="noopener noreferrer">Designed for phone screen.</a></p>

      </div>
    </>
  )
}

export default Fitness