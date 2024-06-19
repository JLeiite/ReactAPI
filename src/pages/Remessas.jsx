import { useState } from 'react';
import '../styles/remessas.scss'
import { 
  formatCPFCNPJ, 
  validateCPF, 
  validateCNPJ, 
  validateCEP, 
  validateTelefone, 
  formatCEP, 
  formatTelefone,
  formatCurrency
 } from '../components/inputMask'; // Importa a função que aplica as máscaras

export function Remessas() {

  function navigateToStep(currentStepId, nextStepId) {
    // Verifica se todos os campos obrigatórios do passo atual estão preenchidos
    if (!validateRequiredFields(currentStepId)) {
    alert('Por favor, preencha todos os campos obrigatórios.');
    return;
    }
    
    // Oculta o passo atual
    document.getElementById(currentStepId).style.display = 'none';
  
    // Exibe o próximo passo
    document.getElementById(nextStepId).style.display = 'block';

    // Altera a cor de fundo dos headers conforme a transição de passos
    updateHeaderBackground(currentStepId, nextStepId);
  }

  function validateRequiredFields(stepId) {
    // Obtém todos os elementos dentro do passo atual
    const elements = document.getElementById(stepId).querySelectorAll('[required]');
    let allFieldsValid = true;
    
    // Verifica se todos os campos obrigatórios estão preenchidos
    for (let element of elements) {
      if (!element.value.trim()) {
        element.style.border = '1px solid red';
        allFieldsValid = false;
      } else {
        element.style.border = '1px solid var(--blue-100)'; // Restaurando a borda original
      }
    }
    return allFieldsValid;
  }

  function updateHeaderBackground(currentStepId, nextStepId) {
    // Define o ID dos headers correspondentes aos passos
    const headers = {
      'step1': 'step1Header',
      'step2': 'step2Header',
      'step3': 'step3Header'
    };
  
    // Obtém os IDs dos headers atual e próximo
    const currentHeaderId = headers[currentStepId];
    const nextHeaderId = headers[nextStepId];
  
    // Altera as cores de fundo conforme a transição de passos
    if (currentHeaderId && nextHeaderId) {
      document.getElementById(currentHeaderId).style.backgroundColor = '#0f672c';
      document.getElementById(nextHeaderId).style.backgroundColor = '#002A42';
    }
  }

  // Validação de campos
  const [cpfCnpjPagador, setCpfCnpjPagador] = useState('');
  const [cepColeta, setCepColeta] = useState('');
  const [cepEntrega, setCepEntrega] = useState('');
  const [valorNF, setValorNF] = useState('');
  const [telefoneSolicitante, setTelefoneSolicitante] = useState('');

  const handleInputChange = (setter, formatter, validator, value) => {
    const formattedValue = formatter(value);
    setter(formattedValue);

    // Validar apenas se houver algo para validar (após a formatação)
    if (formattedValue) {
      const isValid = validator(formattedValue); // Validar o valor formatado
      if (!isValid) {
        console.log(`Campo inválido: ${value}`);
      } else {
        console.log('Validação OK');
      }
    }
  };

  const handleSubmit = (event) => {
    alert('Remessa enviada com sucesso!');
    event.preventDefault();
  };

  return (
      <>
        <p className="title">Preencha o formulário abaixo para solicitar sua coleta.</p>

        <form className="form" onSubmit={handleSubmit}>
          <div className="headerForm">
              <a id='step1Header' onClick={() => navigateToStep('step1', 'step1')}>
                PASSO 1 - REMETENTE
              </a>
          </div>

          <div className="formBox" id='step1'>
            <div className="formLine">
              <div className="formItem">
                <small>REMETENTE</small>
                <input type="text" id="remetente" placeholder="Razão social/Nome" maxLength={150} required/>
              </div>

              <div className="formItem">
                <small>CEP DE COLETA</small>
                <input 
                  type="text"
                  id="CEPColeta"
                  placeholder="00000-000"
                  minLength={8}
                  maxLength={9}
                  value={cepColeta}
                  onChange={(e) => handleInputChange(setCepColeta, formatCEP, (value) => (validateCEP(value)), e.target.value)}
                  required
                />
              </div>
            </div>
            
            <div className="formLine">
              <div className="formItem">
                <small>UF</small>
                <select id="ufColeta" required>
                  <option default>SP</option>
                  <option>RJ</option>
                  <hr/>
                  <option>AC</option>
                  <option>AL</option>
                  <option>AP</option>
                  <option>AM</option>
                  <option>BA</option>
                  <option>CE</option>
                  <option>DF</option>
                  <option>ES</option>
                  <option>GO</option>
                  <option>MA</option>
                  <option>MT</option>
                  <option>MS</option>
                  <option>MG</option>
                  <option>PA</option>
                  <option>PB</option>
                  <option>PE</option>
                  <option>PI</option>
                  <option>PR</option>
                  <option>RN</option>
                  <option>RS</option>
                  <option>RO</option>
                  <option>RR</option>
                  <option>SC</option>
                  <option>SE</option>
                  <option>TO</option>
                </select>
              </div>
              
              <div className="formItem">
                <small>CIDADE</small>
                <input type="text" id="cidadeColeta" placeholder="Cidade" maxLength={50} required/>
              </div>

              <div className="formItem">
                <small>BAIRRO</small>
                <input type="text" id="bairroColeta" placeholder="Bairro" maxLength={50} required/>
              </div>
            </div>

            <div className="formLine">
              <div className="formItem">
                <small>ENDEREÇO</small>
                <input type="address" id="enderecoColeta" placeholder="Endereço" maxLength={200} required/>
              </div>

              <div className="formItem">
                <small>NUMERO</small>
                <input type="addressNumber" id="numeroColeta" placeholder="000" maxLength={20} required/>
              </div>

              <div className="formItem">
                <small>COMPLEMENTO</small>
                <input type="text" id="complementoColeta" placeholder="Complemento" maxLength={150}/>
              </div>
            </div>

            <div className="formLine">
              <div className="formItem">
                <small>INFORMAÇÕES ADICIONAIS</small>
                <input type="text" id="responsavelColeta" placeholder="Responsável da coleta" maxLength={100}/>
              </div>
            </div>

            <div className="formLine">
              <div className="formButton">
                  <button type="reset">Limpar</button>
                </div>
                <div className="formButton">
                  <button type="next" onClick={() => navigateToStep('step1', 'step2')}>Próximo</button>
                </div>
              </div>
          </div>

          <div className="headerForm">
            <a id='step2Header' onClick={() => navigateToStep('step1', 'step2')}>
              PASSO 2 - DESTINATÁRIO
            </a>
          </div>

          <div className="formBox" id='step2' style={{display: 'none'}} >
            <div className="formLine">
              <div className="formItem">
                <small>Nome</small>
                <input type="text" id="destinatario" placeholder="Razão social" maxLength={150} required/>
              </div>

              <div className="formItem">
                <small>CEP DE ENTREGA</small>
                <input
                  type="text"
                  id="CEPEntrega"
                  placeholder="00000-000"
                  minLength={8}
                  maxLength={9}
                  value={cepEntrega}
                  onChange={(e) => handleInputChange(setCepEntrega, formatCEP, (value) => (validateCEP(value)), e.target.value)}
                  required
                />
              </div>
            </div>
            
            <div className="formLine">
              <div className="formItem">
                <small>UF</small>
                <select id="ufEntrega" required>
                  <option default>SP</option>
                  <option>RJ</option>
                  <hr/>
                  <option>AC</option>
                  <option>AL</option>
                  <option>AP</option>
                  <option>AM</option>
                  <option>BA</option>
                  <option>CE</option>
                  <option>DF</option>
                  <option>ES</option>
                  <option>GO</option>
                  <option>MA</option>
                  <option>MT</option>
                  <option>MS</option>
                  <option>MG</option>
                  <option>PA</option>
                  <option>PB</option>
                  <option>PE</option>
                  <option>PI</option>
                  <option>PR</option>
                  <option>RN</option>
                  <option>RS</option>
                  <option>RO</option>
                  <option>RR</option>
                  <option>SC</option>
                  <option>SE</option>
                  <option>TO</option>
                </select>
              </div>
              
              <div className="formItem">
                <small>CIDADE</small>
                <input type="text" id='cidadeEntrega' placeholder='Cidade' maxLength={50} required/>
              </div>

              <div className="formItem">
                <small>BAIRRO</small>
                <input type="text" id="bairroEntrega" placeholder="Bairro" maxLength={50} required/>
              </div>
            </div>

            <div className="formLine">
              <div className="formItem">
                <small>ENDEREÇO</small>
                <input type="address" id="enderecoEntrega" placeholder="Endereço" maxLength={200} required/>
              </div>

              <div className="formItem">
                <small>NUMERO</small>
                <input type="addressNumber" id="numeroEntrega" placeholder="000" maxLength={20} required/>
              </div>

              <div className="formItem">
                <small>COMPLEMENTO</small>
                <input type="text" id="complementoEntrega" placeholder="Complemento" maxLength={150} />
              </div>
            </div>

            <div className="formLine">
              <div className="formItem">
                <small>INFORMAÇÕES ADICIONAIS</small>
                <input type="text" id="responsavelEntrega" placeholder="Responsável da entrega" maxLength={100}/>
              </div>
            </div>

            <div className="formLine">
                <div className="formButton">
                  <button type="prev" onClick={() => navigateToStep('step2', 'step1')}>Retornar</button>
                </div>
                <div className="formButton">
                  <button type="next" onClick={() => navigateToStep('step2', 'step3')}>Próximo</button>
                </div>
              </div>
          </div>

          <div className="headerForm">
          <a id='step3Header' onClick={() => navigateToStep('step2', 'step3')}>
              PASSO 3 - MATERIAL
            </a>
          </div>

          <div className="formBox" id='step3' style={{display: 'none'}} >
            <div className="formLine">
              <div className="formItem">
                <small>DATA E HORA DE COLETA</small>
                <input type="datetime-local" id="dataColeta" placeholder="00/00/00 00:00" required/>
              </div>

              <div className="formItem">
                <small>O QUE É O MATERIAL?</small>
                <input type="text" id="descricaoMaterial" placeholder="Descrição do material" maxLength={100}/>
              </div>

              <div className="formItem">
                <small>VALOR DA NOTA</small>
                <input 
                  id="valorNF" 
                  placeholder="R$ 00,00" 
                  type="text"
                  value={valorNF}
                  onChange={(e) => handleInputChange(setValorNF, formatCurrency, '', e.target.value)}
                  required/>
              </div>
            </div>
            
            <div className="formLine">
              <div className="formItem">
                <small>CHAVE DA NOTA FISCAL</small>
                <input type="text" id="notaFiscal" placeholder="Código da NF" maxLength={44} required/>
              </div>
              
              <div className="formItem">
                <small>QUANTIDADE</small>
                <input type="number" id="quantidade" placeholder="01" min="1" required/>
              </div>

              <div className="formItem">
                <small>PESO TOTAL</small>
                <input type="number" id="peso" placeholder="10.0" step="0.5" min="0.5" required/>
              </div>
            </div>

            <div className="formLine">
              <div className="formItem">
                <small>CPF OU CNPJ DO PAGADOR</small>
                <input 
                  type="text"
                  id="CPFCNPJPagador"
                  placeholder="00.000.000/0000-00"
                  maxLength={18}
                  value={cpfCnpjPagador}
                  onChange={(e) => handleInputChange(setCpfCnpjPagador, formatCPFCNPJ, (value) => (validateCPF(value) || validateCNPJ(value)), e.target.value)}
                  required
                />
              </div>

              <div className="formItem">
                <small>PAGADOR DO FRETE</small>
                <input type="text" id="expedidor" placeholder="Razão Social" maxLength={250} required/>
              </div>

              <div className="formItem">
                <small>E-MAIL CONTATO</small>
                <input type="email" id="emailContato" placeholder="Insira seu e-mail" maxLength={100} required/>
              </div>
            </div>

            <div className="formLine">
              <div className="formItem">
                <small>SOLICITANTE</small>
                <input type="text" id="solicitante" placeholder="Insira seu nome" maxLength={80} required/>
              </div>

              <div className="formItem">
                <small>TELEFONE DO SOLICITANTE</small>
                <input
                  type="text"
                  id="TelefoneSolicitante"
                  placeholder="+55 (00) 00000-0000"
                  maxLength={19}
                  value={telefoneSolicitante}
                  onChange={(e) => handleInputChange(setTelefoneSolicitante, formatTelefone, (value) => (validateTelefone(value)), e.target.value)}
                  required
                />
              </div>

              <div className="formCheck">
                <div className="formCheckItem">
                  <input type="checkbox" value="1" id="checkMail"/>
                  <label htmlFor="checkMail">Quero ser notificado via e-mail</label>
                </div>
                <div className="formCheckItem">
                  <input type="checkbox" value="2" id="checkPhone"/>
                  <label htmlFor="checkPhone">Quero ser notificado via Whatsapp</label>
                </div>
              </div>
            </div>

            <div className="formLine"> 
              <div className="formButton">
                <button type="prev" onClick={() => navigateToStep('step3', 'step2')}>Retornar</button>
              </div>
              <div className="formButton">
                <button type="submit">Enviar</button>
              </div>
            </div>
          </div>

        </form>
      </>
    )
}