import thetodoapp from '../../public/images/thetodoapp.png';


function Todoapp() {
  
    return (
      <>
        <div>
        
        <h1>Task app</h1>
        <p className = 'paragraph-container' >This is a task app linked to a postgresql database which stores the data and the authorisaion of emails. </p>
        <p>It is built with node.js, postgreSQL, react and deployed on Railway. It is full stack with server and client side.</p>
        <img className = 'portFolioImage' src={thetodoapp} alt="todo" />
        
        <p><a className = 'white' href="https://github.com/Eugenepython/todoapp" target="_blank"> Github page and source code</a></p>
       
        
        <p><a className = 'white' href="https://client-frontend-production.up.railway.app/" target="_blank">Website hosted on Railway</a></p>

        </div>
      </>
    )
  }
  
  export default Todoapp