const Perfil = (props) => {
      return(
            <div className='t-center'>
            <h2>{props.titulo}</h2>
            <img src={props.img} />
      </div>
      )
}

export default Perfil;