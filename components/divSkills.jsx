const DivSkills = () => {
    return(
        <div className="text-[#E5D4ED] min-h-screen bg-[#514F59] flex flex-col w-full items-center justify-center" id="habilidades">
            <span className="text-6xl text-center mt-5">Habilidades</span>
            <div className="flex flex-col text-center rounded-md p-5 m-5 text-2xl">
                <div className="flex flex-row text-center p-2 pb-0 mb-3 rounded-[12px]">
                    <img className="size-6 mr-1 mb-2" src="https://www.svgrepo.com/show/349419/javascript.svg"/>
                    <span>Javascript</span>
                </div>
                <div className="flex flex-row p-2 pb-0 mb-3 rounded-[12px]">
                    <img className="size-6 mr-1 mb-2" src="https://www.svgrepo.com/show/452091/python.svg"/>
                    <span>Python</span>
                </div>
                <div className="flex flex-row p-2 pb-0 mb-3 rounded-[12px]">
                    <img className="size-6 mr-1 mb-2" src="https://www.svgrepo.com/show/353924/java.svg"/>
                    <span>Java</span>
                </div>
                <div className="flex flex-row p-2 pb-0 mb-3 rounded-[12px]">
                    <img className="size-6 mr-1 mb-2" src="https://www.svgrepo.com/show/373641/godot.svg"/>
                    <span>Godot</span>
                </div>
                <div className="flex flex-row p-2 pb-0 mb-3 rounded-[12px]">
                    <img className="size-6 mr-1 mb-2" src="https://www.svgrepo.com/show/374118/tailwind.svg"/>
                    <span>Tailwind</span>
                </div>
                <div className="flex flex-row p-2 pb-0 mb-3 rounded-[12px]">
                    <img className="size-6 mr-1 mb-2" src="https://www.svgrepo.com/show/493719/react-javascript-js-framework-facebook.svg"/>
                    <span>React</span>
                </div>
            </div>
            
            <span className="text-6xl text-center">Linguagens</span>
            <div className="flex flex-col p-5 text-2xl">
                <span className="pl-5 pr-5 mt-2 rounded-[12px]">Português - Nativo</span>
                <span className="pl-5 pr-5 mt-2 rounded-[12px]">Inglês - Avançado</span>
            </div>
        </div>
    )
}

export default DivSkills