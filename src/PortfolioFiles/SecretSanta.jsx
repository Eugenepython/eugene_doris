
import santa from '../../public/images/santa.jpg';


function SecretSanta() {

    return (
        <>
            <div>

                <h1>A secret santa app to send out emails to members of a secret santa group</h1>

                <p className='paragraph-container' >Built with Firebase, Vite, and React, this takes a list of people's names and emails entered by a user (authenticated through google) and sends out emails to each person
                    with the name of the person they are to give a gift to. </p>



                <img className='portFolioImage' src={santa} />


                <p><a className='white' href="https://github.com/Eugenepython/secretsanta" target="_blank">Github source code</a></p>

                <p><a className='white' href="https://santa-a56f6.web.app/" target="_blank">App site, currently hosted with Firebase</a></p>

            </div>
        </>
    )
}

export default SecretSanta