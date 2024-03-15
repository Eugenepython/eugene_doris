
import react, { useState, useEffect } from 'react';
import ImageCarousel from './ImageCarousel';



function SongContest() {


  const [images, setImages] = useState([]);

  useEffect(() => {
    const importImages = async () => {
      const importPromises = Array.from({ length: 17 }, (_, i) =>
        import(`../appPics/${i+1}.jpeg`).then((module) => module.default)
      );

      const importedImages = await Promise.all(importPromises);
      setImages(importedImages);
    };
    importImages();
  }, []);

  return (
    <>
      <div>
      <h1>Rubrikal Song Contest Mobile Phone App</h1>
      <p className='paragraph-container' >An interactive multiplayer song contest game</p>
      <p className='paragraph-container' >I built this user-friendly mobile phone app, available for download as an APK package, with plans to launch on the Google App Store and Apple Store. The app was inspired by a popular party game and offers a unique experience where players choose their favorite songs in each round and earn scores from fellow players.</p>
      <p className='paragraph-container' >The app, developed with Node.js, React Native Expo, Firebase, and Clerk for Google authentication, is powered by EAS for a seamless experience. Players can enjoy real-time interaction, progressing through different rounds together. Scores are calculated in real time, providing an engaging and dynamic gameplay experience. At the end of each round, players receive their final scores, creating a competitive yet fun environment.</p>
<p className='paragraph-container' >This is a good app to pass time with remote friends, and user-friendliness meets real-time multiplayer interaction</p>

        <p><a className='white' href="https://github.com/Eugenepython/music-frontend" target="_blank" rel="noopener noreferrer">Github frontend source code</a></p>
        <p><a className='white' href="https://github.comEugenepython/music-backend" target="_blank" rel="noopener noreferrer">Github backend source code</a></p>
        <p><a className='white' href="https://expo.dev/accounts/eugene1981/projects/my-music-game/builds/112648c8-5026-47a7-817f-8bb1599f6d5d" target="_blank" rel="noopener noreferrer">Download/install the app here on your android phone</a></p>
        <ImageCarousel images={images} />

      </div>
    </>
  )
}

export default SongContest

