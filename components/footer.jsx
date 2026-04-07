import EmailIcon from "../public/emailIcon.jsx"
import PhoneIcon from "../public/phoneIcon.jsx"

const footer = () => {
    return(
        <footer className="text-center text-[#E5D4ED] bg-[#514F59] w-full h-fit flex flex-row justify-around pl-10 pr-10" id="contato">
            <div className="m-5 ml-0 flex flex-col text-center items-center">
                <div className="flex flex-row items-center">
                    <EmailIcon size={40} className="mr-2 text-[#E5D4ED] hover:text-[#E5D4ED]"/>
                    <span className="text-4xl">Email</span>
                </div>
                <span className="text-2xl">nicolas.s.nichnig@gmail.com</span>
            </div>

            <div className="m-5 ml-0 flex flex-col text-center items-center">
                <div className="flex flex-row items-center">
                    <PhoneIcon ize={40} className="mr-2 text-[#E5D4ED] hover:text-[#E5D4ED]"/>
                    <span className="text-4xl">Telefone</span>
                </div>
                <span className="text-2xl">(+55) 48 99123-4211</span>
            </div>
        </footer>
    )
}

export default footer