import { WhatsappLogo } from 'phosphor-react'
import './../styles/whatsapp.scss'

export function Whatsapp(){
    return(
        <>
            <div className='whatsappContainer'>
                <a href='https://api.whatsapp.com/send?phone=5511934992069' className='whatsapp'>
                    <WhatsappLogo size={36}/>
                </a>
            </div>
        </>
    )
}