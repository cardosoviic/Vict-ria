import Mione from '../../images/mione.jpg';
import './Descricao.css';


const Descricao = () => {
     return (

          <div className='mione'>

               <h2>Hermione Granger</h2>

               <img src={Mione}></img>

          <div className='container-potter'>
               <div className='potter'>
                    <p>A Ministra da Magia Hermione Jean Granger, nascida em 19 de setembro de 1979, é uma bruxa inglesa nascida trouxa e a única filha do Sr. e da Sra. Granger.
                         <br></br>Aos onze anos de idade, quando aprendeu sobre sua natureza mágica, Hermione foi aceita na Escola de Magia e Bruxaria de Hogwarts.Ela iniciou seus estudos em 1991 e foi classificada para a Casa Grifinória. <br></br>
                         Hermione possuía uma mente acadêmica brilhante e se provou uma estudante talentosa em quase todas as matérias que estudou, a ponto de ser considerada à Casa Corvinal quando classificada pelo Chapéu Seletor. No entanto,
                         sua disposição cética e lógica foi uma das características que o fez mudar de ideia.</p>
               </div>
               </div>

          </div>

     )

}

export default Descricao;