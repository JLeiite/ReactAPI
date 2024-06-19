import '../styles/formularios.scss'

export function Formularios() {

  return (
      <>
        <p className="title">Comece selecionando o serviço desejado:</p>

        <div className='cardContainer'>
          <div className='card'>
            <h3>Coleta Online</h3>
            <img src="https://cdn-icons-png.flaticon.com/512/2821/2821834.png" alt="Coleta" />
            <p>Emita sua solicitação de coleta.</p>
            <a href="./coletaOnline">Enviar agora</a>
          </div>

          <div className='card'>
            <h3>Remessas</h3>
            <img src="https://cdn-icons-png.flaticon.com/512/2821/2821868.png" alt="Remessas" />
            <p>Envie remessas para diversos remetentes.</p>
            <a href="./remessas">Enviar agora</a>
          </div>

          <div className='card'>
            <h3>Cotação</h3>
            <img src="https://cdn-icons-png.flaticon.com/512/2821/2821876.png" alt="Cotação" />
            <p>Solicite seu orçamento de frete.</p>
            <a href="./cotacao">Enviar agora</a>
          </div>
        </div>
      </>
    )
}