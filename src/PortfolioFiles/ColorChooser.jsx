import color from '../../public/images/color.jpg';


function ColorChooser() {
  
    return (
      <>
        <div>
        
        <h1>A color scheme suggestion provider</h1>
        <p className = 'paragraph-container' >This javascript uses the https://www.thecolorapi.com/ API to alow for a selection of colors to form a complemnentary color scheme. The chosen colors are taken as data as used to obtain the relevant colors from the API using their methodology.  </p>
        <img className = 'portFolioImage' src={color} alt="color" />
        
        <p><a className = 'white' href="https://github.com/Eugenepython/ColorChooser" target="_blank">Github source code</a></p>
        
        <p><a className = 'white' href="https://colorscheme-chooser.netlify.app/" target="_blank">Website (mobile view)</a></p>

        </div>
      </>
    )
  }
  
  export default ColorChooser