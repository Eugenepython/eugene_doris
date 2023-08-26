import costsCalculator from '../../public/images/costsCalculator.jpg';


function CostsCalculator() {
  
    return (
      <>
        <div>
        
        <h1>An onine calculator for lawyers calculating and balancing offers against costs assssments</h1>
        <p className = 'paragraph-container' >This is an app which solved a real life problem which takes up lawyers time and effort in calculating the interest component of an interest inclusive offer, based on prevous payments on account having been made to reduce the overall interest load. On legal costs assessments, the trial assessment figure is balanced against the parties' best interest exclusive offer and this app provides a quick accurate way to arrive at the deduction. I could not find any equivalent of this app or online calculation having searched for years online while making my own calculations.  </p>
        <p className = 'paragraph-container' >I decided to use vanilla javascript after working with react for the last few months. The backwards calculation of interest proved very difficult to arrive at and after numerous attempts and bind allies I settled on the while loop. The loop continues until the difference between two figures (the original amount we want to find, and each steadily iterations of the loop) is less than or equal to a specified tolerance. I had to increase the tolerance when the calculations proved too complex for the iterations to be accurately captured by the comparision. </p>
        <img className = 'portFolioImage' src={costsCalculator} alt="costscalc" />
        
        <p><a className = 'white' href="https://github.com/Eugenepython/CostsCalculator" target="_blank">Github source code</a></p>
        
        <p><a className = 'white' href="https://costs-interest-calculator.netlify.app/" target="_blank">Website (mobile view)</a></p>

        </div>
      </>
    )
  }
  
  export default CostsCalculator