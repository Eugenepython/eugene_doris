import weatherAppQRandroid from '../../public/images/weatherAppQRandroid.jpg';
import weatherAppQRiOS from '../../public/images/weatherAppQRiOS';
import weatherApp from '../../public/images/weatherApp.jpg';


function WeatherApp() {

    return (
        <>
            <div>

                <h1>A React Native app built with React Native in expo</h1>

                <p className='paragraph-container' >This app liases with the openweather API to inform you of the weather and details of your present location.</p>



                <img className='portFolioImage' src={weatherApp} />


                <p><a className='white' href="https://github.com/Eugenepython/weatherapp" target="_blank" rel="noopener noreferrer">Github source code</a></p>


                <div className='qr-container'>
                    <p>Through the expo app, you can scan these QR codes below to view and use the app</p>
                    <div className='qrImages-wrapper'>
                        <img className='qrImage' src={weatherAppQRandroid} />
                        <img className='qrImage' src={weatherAppQRiOS} />
                    </div>
                    <p>Android</p>
                    <p>iOS</p>
                </div>

            </div>
        </>
    )
}

export default WeatherApp


