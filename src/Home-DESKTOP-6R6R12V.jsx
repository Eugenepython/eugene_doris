import profileImage from '../public/images/profileImage.jpeg';
import EmailButton from "./Buttons/EmailButton"
import LinkedinButton from "./Buttons/LinkedinButton"
import GithubButton from "./Buttons/GithubButton"
import Phone from "./Buttons/Phone"


function Home() {


  return (

    <div>

      <div className='top'>
        <div className='picAndNameHolder'>


          <div className='nameHolder'>
            <h1>Eugene Doris</h1>

            <p>Full Stack Software Developer</p>
            <EmailButton />
            <LinkedinButton />
            <GithubButton />
            <Phone />
          </div>

          <div>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>React</li>
              <li>Redux</li>
              <li>React Native</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>PostgreSQL</li>
              <li>Firebase</li>
            </ul>

          </div>

          <div className='picHolder'><img className='portFolioImage' src={profileImage} alt="color" /></div>

        </div>

        <div className='paragraph-container'>
          <p>Hello, and welcome to my website!</p>
          <p>I am a full-stack software developer specialising in JavaScript, React, Node.JS with a professional background in the legal sector. I have 10 years of experience as a lawyer in the UK, specializing in costs litigation, I regularly attended court for civil costs hearings and negotiated parties costs liabilities on behalf of solicitors firms across the country. However, my curiosity and growing interest in coding led me to finally make a career change to the IT sector in 2023.</p>
          <p>In contrast to the slower pace of legislation and case law, I have found the tech industry to be a dynamic environment driven by constant innovation, especially recently with the growth of AI. The ability to develop interesting apps that can solve real-world problems or provide entertainment gives me immense satisfaction. I have discovered that the creative aspect of coding can keep me engrossed at the laptop for hours on end which is usually a good sign for a career!</p>
          <p>What drew me to tech is the logical nature of problem-solving and the scientific approach it embraces.</p>
          <p>My extensive experience in advocacy, negotiation, and seeking optimal solutions for human interests in litigation has equipped me with invaluable skills for my new career. I have a proven track record of calculating favorable settlements in court and effectively communicating them to clients and opponents. The ability to understand clients needs and wants and offer tailored solutions and selling points is a strength I bring from my professional client interactions.</p>
          <p>I am excited to leverage my skills and background, combined with my development expertise, to contribute to projects and collaborate with teams in the tech industry, and see how far it can take me.</p>
          <p>Thank you for visiting my website, and I invite you to explore my portfolio and get in touch to discuss potential opportunities and collaborations!</p>
        </div>
      </div>



    </div>


  )
}

export default Home