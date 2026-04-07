import DivApresentacao from "../components/divApresentacao.jsx"
import DivSkills from "../components/divSkills.jsx"
import Footer from "../components/footer.jsx"
import HamburguerMenu from "../components/hamburguerMenu.jsx"
import DivProjetos from "../components/divProjetos.jsx"

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans bg-[#E5D4ED]">
      <HamburguerMenu/>

      <DivApresentacao/>

      <DivSkills/>

      <DivProjetos/>

      <Footer/>
    </div>
  );
}
