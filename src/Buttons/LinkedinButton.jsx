import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';



function LinkedinButton() {
  const linkedinUrl = "https://www.linkedin.com/in/eugene-doris-31623b27b/";

  return (
    <button className = 'mediaBtns'>
      <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
      
      <FontAwesomeIcon icon={faLinkedin} />;




      </a>
    </button>
  );
}

export default LinkedinButton;

