import LinkedInIcon from "../public/LinkedInIcon.jsx"
import InstagramIcon from "../public/InstagramIcon.jsx"
import GitHubIconm from "../public/GitHubIcon.jsx"

const divApresentacao = () => {
    return(
    <div className="min-h-screen flex-col flex justify-center" id="home">
        <div className="text-center flex flex-col text-[#514F59] mb-5">
          <span className="text-6xl">Nicolas Nichnig</span> 
          <span className="text-2xl">| FullStack Dev | Game Developer |</span>
        </div>

        <div className="flex flex-row justify-around">
          <a href="https://www.linkedin.com/in/nicolas-nichnig-b51601286/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon size={40} className="text-[#514F59] hover:text-[#000000]"/>
          </a>

          <a href="https://www.instagram.com/nicolas_nichnig/" target="_blank" rel="noopener noreferrer">
            <InstagramIcon size={40} className="text-[#514F59] hover:text-[#000000]"/>
          </a>

          <a href="https://github.com/NicolasSNichnig" target="_blank" rel="noopener noreferrer">
            <GitHubIconm size={40} className="text-[#514F59] hover:text-[#000000]"/>       
          </a>

          </div>
    </div>
    )
}

export default divApresentacao