import { FacebookLogo, InstagramLogo, LinkedinLogo, TwitterLogo } from 'phosphor-react'
import '../styles/footer.scss'

export function Footer(){
    return(
        <>
            <footer className="footer">

                <div className="socialMedia">
                    <a href="#">
                        <InstagramLogo size={32}/>
                    </a>
                    <a href="#">
                        <TwitterLogo size={32}/>
                    </a>
                    <a href="#">
                        <FacebookLogo size={32}/>
                    </a>
                    <a href="#">
                        <LinkedinLogo size={32}/>
                    </a>
                </div>

                <div className="infoEmpresa">
                    <h4>FENIX CARGO LOGISTICA E TRANSPORTES LTDA</h4>
                    <p>43.079.594/0001-80</p>
                </div>
                
            </footer>
        </>
    )
}