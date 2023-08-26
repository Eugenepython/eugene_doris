import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


export default function GithubButton() {
    
    const githubUrl = "https://github.com/Eugenepython";
 
   return (
     <button className = 'mediaBtns'>
       <a href={githubUrl} target="_blank" rel="noopener noreferrer">
        
        
       <FontAwesomeIcon icon={faGithub} />;
      
       </a>
     </button>
   );
 }
 