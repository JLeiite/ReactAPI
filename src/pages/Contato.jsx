import '../styles/contato.scss'

export function Contato() {
  return (
    <>
    <div className='banner'>
      <img src="https://www.vinilsul.com.br/wp-content/uploads/2020/08/banner2.jpg" alt="Whatsapp Banner" />
    </div>

    <section id='contato'>
      <h2>Dados de Contato</h2>

        <div className='aboutContainer'>
          <div className='aboutText'>
          <p>Somos a escolha confiável para suas necessidades de transporte, oferecendo soluções logísticas integradas que garantem eficiência, segurança e pontualidade em cada envio.</p>
          <p>Com uma frota moderna e uma equipe dedicada, estamos preparados para atender tanto pequenas quanto grandes demandas de transporte em todo o território nacional.</p>
          <a className='item' href='https://wa.me/5511934992069'>
            <img src="https://cdn-icons-png.flaticon.com/512/160/160200.png" alt="Whatsapp icon" />
            Whatsapp - São Paulo
          </a>
          <a className='item' href='https://wa.me/5521996939656'>
            <img src="https://cdn-icons-png.flaticon.com/512/160/160200.png" alt="Whatsapp icon" />
            Whatsapp - Rio de Janeiro
          </a>
          <a className='item' href='mailto: comercial@fenixcargo.com.br'>
            <img src="https://cdn-icons-png.flaticon.com/512/482/482138.png " alt="Email" />
            E-mail
          </a>
          <a className='item' href='tel:08000310302'>
            <img src="https://cdn-icons-png.flaticon.com/512/925/925125.png" alt="Central de Atendimento" />
            0800 031 0302
          </a>
          </div>
          <div className='aboutImage'>
            <img src="https://evolux.net.br/wp-content/uploads/2022/06/novodecretodosac.png" alt="Contato" />
          </div>
        </div>
      </section>
    </>
  )
}