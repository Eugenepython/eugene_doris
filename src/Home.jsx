import amsterdamPic from  '../public/images/amsterdamPic.png';
import EmailButton from "./Buttons/EmailButton"
import LinkedinButton from "./Buttons/LinkedinButton"
import GithubButton from "./Buttons/GithubButton"
import Phone from "./Buttons/Phone"


function Home() {
  

    return (
      
        <div>
          
      <div className = 'top'>
        <div className ='picAndNameHolder'>
          
          
          <div className = 'nameHolder'>
            <h1>Eugene Doris</h1>
            <p>Frontend Software Developer</p>
            <EmailButton />
            <LinkedinButton />
            <GithubButton />
            <Phone />
            </div>
            <div className = 'picHolder'><img className = 'portFolioImage' src={amsterdamPic} alt="color" /></div>

          </div>
        
       <div class = 'paragraph-container'>
      <p>Hello, and welcome to my personal developer website!</p>
<p>I'm a frontend developer specializing in JavaScript and the React library, with a professional background in the legal sector. I have 10 years of experience as a lawyer in the UK, specializing in costs litigation, I regularly attended court for civil costs hearings and negotiated parties' costs liabilities on behalf of solicitors' firms across the country. However, my curiosity and growing interest in coding led me to finally make a career change to the IT sector in 2023.</p>
<p>In contrast to the slower pace of legislation and case law, I've found the tech industry to be a dynamic environment driven by constant innovation, especially recently with the growth of AI. The ability to develop interesting apps that can solve real-world problems or provide entertainment gives me immense satisfaction. I've discovered that the creative aspect of coding can keep me engrossed at the laptop for hours on end which is usually a good sign for a career!</p>
<p>What drew me to tech is the logical nature of problem-solving and the scientific approach it embraces. I find it a refreshing change from the world of law, which often feels more like an art than a science. When faced with a coding challenge, the certainty that there's a scientific solution waiting to be discovered feels almost therapeutic.</p>
<p>My extensive experience in advocacy, negotiation, and seeking optimal solutions for human interests in litigation has equipped me with invaluable skills for my new career. I have a proven track record of calculating favorable settlements in court and effectively communicating them to clients and opponents. The ability to understand clients' needs and wants and offer tailored solutions and selling points is a strength I bring from my professional client interactions.</p>
<p>I'm excited to leverage my legal background, combined with my frontend development expertise, to contribute to innovative projects and collaborate with teams in the tech industry, and see how far it can take me.</p>
<p>Thank you for visiting my website, and I invite you to explore my portfolio and get in touch to discuss potential opportunities and collaborations!</p>
</div>
        </div>



        </div>


    )
  }
  
  export default Home