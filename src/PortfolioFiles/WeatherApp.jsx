import weatherAppQRandroid from '../images/weatherAppQRandroid.jpg';

import weatherApp from '../images/weatherApp.jpg';

import weatherAppQRiOS from '../images/weatherAppQRiOS.jpg';



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
                        <div className='qrImage-container'>
                            <img className='qrImage' src={weatherAppQRandroid} />
                            <p>Android</p>
                        </div>
                        <div className='qrImage-container'>
                            <img className='qrImage' src={weatherAppQRiOS} />
                            <p>iOS</p>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default WeatherApp





















