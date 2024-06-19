import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Whatsapp } from './components/Whatsapp';

import './global.css';
import styles from './App.module.css';

import { ColetaOnline } from './pages/ColetaOnline.jsx';
import { enviarParaAPI  } from './controladores/EnvioParaAPI.jsx';

export function App() {

  const handleFormSubmit = async (dadosParaAPI) => {
    try {
        const response = await enviarParaAPI(dadosParaAPI);
        // Lógica adicional após o envio bem-sucedido, se necessário
        console.log('Resposta da API:', response);
    } catch (error) {
        // Tratamento de erro, feedback ao usuário, etc.
        console.error('Erro ao enviar dados:', error.message);
    }
  };

  return (
    <>
      <Header/>
      <Whatsapp/>
      
      <div className={styles.wrapper}>
        <main>
          <ColetaOnline onSubmit={handleFormSubmit} />    
        </main>
      </div>
      <Footer/>
    </>
  )
}