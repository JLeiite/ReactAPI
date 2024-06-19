import '../styles/header.scss'
import fenixLogo from '../assets/LogoFenix.svg'

export function Header(){
    return(
        <>
            <header className="header">
                <a href="#">
                    <img src={fenixLogo} alt='Logo da Fenix Cargo'/>
                </a>
                
                <div className="headerLink">
                    <a href='./servicos'>SERVIÇOS</a>
                    <a href='./rastrear'>RASTREAMENTO</a>
                    <a href='./formularios'>FORMULÁRIOS</a>
                    <a href='./contato'>CONTATO</a>
                </div>
            </header>
        </>
    )
}