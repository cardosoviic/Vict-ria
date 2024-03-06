import Personagem1 from '../../images/hermione.png';
import Personagem2 from '../../images/harry.png';
import Personagem3 from '../../images/rony.png';
import Personagem4 from '../../images/draco.webp'
import Personagem5 from '../../images/bellatrix.jpg'
import Personagem6 from '../../images/tom.jpg'
import Perfil from '../Perfil/Perfil';
import Equipe from '../Equipe/Equipe';
import './Main.css';

const Main = () => {
      return (
            <main>
                  <Equipe titulo={'Grifinória'} img1={Personagem1} nome1={"Hermione"} img2={Personagem2} nome2={"Harry"} img3={Personagem3} nome3={"Rony"}/>
                  <Equipe titulo={'Sonserina'} img1={Personagem4} nome1={"Draco"} img2={Personagem5} nome2={"Bellatrix"} img3={Personagem6} nome3={"Tom Riddle"}/>
                  

            </main>
      )
}

export default Main;