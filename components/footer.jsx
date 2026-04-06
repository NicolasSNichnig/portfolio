import EmailIcon from "../public/emailIcon.jsx"
import PhoneIcon from "../public/phoneIcon.jsx"

const footer = () => {
    return(
        <footer className="text-center text-[#514F59] w-full h-fit bg-[#E5D4ED] flex flex-row justify-around pl-10 pr-10" id="contato">
            <div className="m-5 ml-0 flex flex-col text-center items-center">
                <div className="flex flex-row items-center">
                    <EmailIcon size={40} className="mr-2 text-[#514F59] hover:text-[#000000]"/>
                    <span className="text-4xl">Email</span>
                </div>
                <span className="text-2xl">nicolas.s.nichnig@gmail.com</span>
            </div>

            <div className="m-5 ml-0 flex flex-col text-center items-center">
                <div className="flex flex-row items-center">
                    <PhoneIcon ize={40} className="mr-2 text-[#514F59] hover:text-[#000000]"/>
                    <span className="text-4xl">Telefone</span>
                </div>
                <span className="text-2xl">(+55) 48 99123-4211</span>
            </div>
        </footer>
    )
}

export default footer