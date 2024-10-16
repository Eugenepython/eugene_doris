import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

function EmailButton() {
  return (
    <button className="mediaBtns">
      <a href="mailto:eugene_doris@hotmail.com?subject=Working opportunities&body=Hi%20Eugene,">
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
    </button>
  );
}

export default EmailButton;
