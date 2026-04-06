import DivApresentacao from "../components/divApresentacao.jsx"
import DivSkills from "../components/divSkills.jsx"
import Footer from "../components/footer.jsx"
import HamburguerMenu from "../components/hamburguerMenu.jsx"

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans bg-[#E5D4ED]">
      <HamburguerMenu/>
      <DivApresentacao/>
      {/* Div Skills */}
      <DivSkills/>
      <Footer/>
    </div>
  );
}
