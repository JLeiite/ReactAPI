import '../styles/home.scss'

export function Home() {
    return (
      <>
      <div className='banner'>
        <img src="https://www.fenixcargo.com.br/img/home-header.png" alt="Excelência em transportes" />
      </div>

      <section id='sobreNos'>
      <h2>Soluções de Entrega</h2>

        <div className='aboutContainer'>
          <div className='aboutText'>
          <p>Somos a escolha confiável para suas necessidades de transporte, oferecendo soluções logísticas integradas que garantem eficiência, segurança e pontualidade em cada envio.</p>
          <p>Com uma frota moderna e uma equipe dedicada, estamos preparados para atender tanto pequenas quanto grandes demandas de transporte em todo o território nacional.</p>
          <div className='item'>
            <img src="https://cdn-icons-png.flaticon.com/512/5771/5771802.png" alt="Avião" />
            Transporte Aéreo
          </div>
          <div className='item'>
            <img src="https://cdn-icons-png.flaticon.com/512/2769/2769339.png" alt="Caminhão" />
            Transporte Rodoviário
          </div>
          <div className='item'>
            <img src="https://cdn-icons-png.flaticon.com/512/10149/10149291.png" alt="QR Code" />
            Rastreamento de carga
          </div>
          <div className='item'>
            <img src="https://cdn-icons-png.flaticon.com/512/5759/5759877.png" alt="Carga perigosa" />
            Envio de cargas perigosas e especiais (sob consulta)
          </div>
          </div>
          <div className='aboutImage'>
            <img src="https://static.vecteezy.com/system/resources/previews/001/019/678/non_2x/courier-walking-with-package-for-delivery-vector.jpg" alt="Courier" />
          </div>
        </div>
      </section>

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