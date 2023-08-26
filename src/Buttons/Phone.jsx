import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

function Phone() {
  
    
function revealNumber() {
    alert('Please contact me on 079 2710 9219')
    }


    return (
      <button onClick = {revealNumber} className = 'mediaBtns'>
        
        
        <FontAwesomeIcon icon={faPhone} />
  
  
  

      </button>
    );
  }
  
  export default Phone;