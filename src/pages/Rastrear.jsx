import '../styles/rastrear.scss'

export function Rastrear() {
    return (
      <>
    <div className='banner'>
      <img src="https://www.vinilsul.com.br/wp-content/uploads/2020/08/banner2.jpg" alt="Whatsapp Banner" />
    </div>

    <section>
      <h2>Rastrear Encomenda</h2>

        <div className='rastrear'>
          <iframe src="https://www.fenixcargo.com.br/sistema/rastreamento/index.php"></iframe>
        </div>
      </section>
    </>
    )
}