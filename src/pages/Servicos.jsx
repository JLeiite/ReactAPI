import '../styles/home.scss'

export function Servicos() {
    return (
      <>
      <div className='banner'>
        <img src="https://en.sunriseltd.ca/wp-content/uploads/2017/06/logistics-banner.png" alt="Excelência em transportes" />
      </div>

      <section id="nossosServicos">
        <h2>Nossos Serviços</h2>
        
        <div className="cardContainer">
          <div className="card">
            <div className="card-image">
              <img src="https://www.fenixcargo.com.br/img/Home-CARGASURGENTES.png" alt="Cargas Urgentes" />
            </div>
            <div className="card-text">
              <h3>Cargas urgentes</h3>
              <p>Enviamos materiais perecíveis e encomendas urgentes no modal aéreo, com entrega de 24h a 48h para diversas cidades no Brasil.</p>
            </div>
            <a href="https://wa.me/5511934992069">Saiba mais</a>
          </div>

          <div className="card">
            <div className="card-image">
              <img src="https://www.fenixcargo.com.br/img/Home-ENTREGAEXCLUSIVA.png" alt="Entrega exclusiva" />
            </div>
            <div className="card-text">
              <h3>Entrega exclusiva</h3>
              <p>Disponibilizamos um veículo fretado compatível com a sua necessidade que levará o material da origem direto ao seu destino.</p>
            </div>
            <a href="https://wa.me/5511934992069">Saiba mais</a>
          </div>

          <div className="card">
            <div className="card-image">
              <img src="https://www.fenixcargo.com.br/img/Home-DIPLOMATA.png" alt="Entrega diplomata" />
            </div>
            <div className="card-text">
              <h3>Entrega diplomata</h3>
              <p>Encomendas com a máxima urgência seguem no primeiro voo para realização da entrega com segurança na cidade de destino.</p>
            </div>
            <a href="https://wa.me/5511934992069">Saiba mais</a>
          </div>

          <div className="card">
            <div className="card-image">
              <img src="https://www.fenixcargo.com.br/img/Home-ARMAZENAMENTO.png" alt="Armazenamento" />
            </div>
            <div className="card-text">
              <h3>Armazenamento</h3>
              <p>Contamos com um amplo espaço para armazenamento de documentos, móveis e mercadorias com áreas disponíveis para locação.</p>
            </div>
            <a href="https://wa.me/5511934992069">Saiba mais</a>
          </div>
        </div>
      </section>
      </>
    )
}