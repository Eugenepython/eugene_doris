import trackerImage from '../images/trackerImage.jpeg';

function DisbursementTrackerApp() {
  return (
    <>
      <div>
        <h1> Legal Disbursement Tracker</h1>
        <p className='paragraph-container'>This application helps law firms efficiently track disbursements, ensuring accurate records for legal expenses. Users can log, categorize, and review all transactions related to client cases. The tool is designed to improve financial management and streamline case expense tracking.</p>
        
        <img className='portFolioImage' src={trackerImage} alt="Disbursement Tracker App" />
        
        <p><a className='white' href="https://github.com/Eugenepython/law-firm-project" target="_blank" rel="noopener noreferrer">Github Source Code</a></p>
        
        <p><a className='white' href="https://disbursement-tracker.vercel.app/" target="_blank" rel="noopener noreferrer">Live App</a></p>
      </div>
    </>
  );
}
export default DisbursementTrackerApp;
