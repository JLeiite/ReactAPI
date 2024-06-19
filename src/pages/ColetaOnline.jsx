import { useState } from 'react';
import '../styles/coletaOnline.scss'
import { 
  formatCPFCNPJ, 
  validateCPF, 
  validateCNPJ, 
  validateCEP,
  formatCEP, 
  formatTelefone,
  formatCurrency
 } from '../components/inputMask'; // Importa a função que aplica as máscaras

export function ColetaOnline({ onSubmit }) {

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

  // Estados para campos que precisam de validação
  const [cpfCnpjRemetenteFormatted, setCpfCnpjRemetenteFormatted] = useState('');
  const [cpfCnpjDestinatarioFormatted, setCpfCnpjDestinatarioFormatted] = useState('');
  const [cpfCnpjPagadorFormatted, setCpfCnpjPagadorFormatted] = useState('');
  const [cepColetaFormatted, setCepColetaFormatted] = useState('');
  const [cepEntregaFormatted, setCepEntregaFormatted] = useState('');
  const [telefoneColetaFormatted, setTelefoneColetaFormatted] = useState('');
  const [telefoneEntregaFormatted, setTelefoneEntregaFormatted] = useState('');
  const [telefoneSolicitanteFormatted, setTelefoneSolicitanteFormatted] = useState('');
  const [valorNFFormatted, setValorNFFormatted] = useState('');

  // Função para lidar com mudanças nos campos que precisam de validação
  const handleFormattedInputChange = (setter, formatter, validator, value) => {
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

  // Captura dos dados
  const [formData, setFormData] = useState({
    cpfCnpjRemetente: '',
    IERemetente: '',
    remetente: '',
    cepColeta: '',
    ufColeta: '',
    cidadeColeta: '',
    bairroColeta: '',
    enderecoColeta: '',
    numeroColeta: '',
    complementoColeta: '',
    responsavelColeta: '',
    telefoneColeta: '',
    cpfCnpjDestinatario: '',
    IEDestinatario: '',
    destinatario: '',
    cepEntrega: '',
    ufEntrega: '',
    cidadeEntrega: '',
    bairroEntrega: '',
    enderecoEntrega: '',
    numeroEntrega: '',
    complementoEntrega: '',
    responsavelEntrega: '',
    telefoneEntrega: '',
    dataColeta: '',
    descricaoMaterial: '',
    valorNF: '',
    notaFiscal: '',
    quantidade: '',
    peso: '',
    cpfCnpjPagador: '',
    expedidor: '',
    emailContato: '',
    solicitante: '',
    telefoneSolicitante: '',
    checkMail: false,
    checkWhatsapp: false
  });

  // Função para lidar com mudanças nos campos que não precisam de validação
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  // Função para mudança no campo checkbox
  const handleChangeCheckbox = (e) => {
    const { id, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: checked
    }));
  };

  // Envio dos dados para API
  const handleSubmit = (e) => {

    // Preparar os dados a serem enviados para a API
    const dadosParaAPI = {
      ...formData,
      cpfCnpjRemetente: cpfCnpjRemetenteFormatted,
      cpfCnpjDestinatario: cpfCnpjDestinatarioFormatted,
      cpfCnpjPagador: cpfCnpjPagadorFormatted,
      cepColeta: cepColetaFormatted,
      cepEntrega: cepEntregaFormatted,
      telefoneColeta: telefoneColetaFormatted,
      telefoneEntrega: telefoneEntregaFormatted,
      telefoneSolicitante: telefoneSolicitanteFormatted,
      valorNF: valorNFFormatted
    };

    alert('Coleta solicitada com sucesso!');
    e.preventDefault();
    onSubmit(dadosParaAPI); // Chama a função onSubmit passando formData
    console.log(dadosParaAPI);
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
                <small>CPF OU CNPJ DO REMETENTE</small>
                <input 
                  type="text"
                  id="CPFCNPJRemetente"
                  placeholder="00.000.000/0000-00"
                  maxLength={18}
                  value={cpfCnpjRemetenteFormatted}
                  onChange={(e) => handleFormattedInputChange(setCpfCnpjRemetenteFormatted, formatCPFCNPJ, (value) => (validateCPF(value) || validateCNPJ(value)), e.target.value)}
                  required
                />
              </div>

              <div className="formItem">
                <small>INSCRIÇÃO ESTADUAL</small>
                <input type="text" id="IERemetente" value={formData.IERemetente} onChange={handleChange} placeholder="00000000" maxLength={25}/>
              </div>

              <div className="formItem">
                <small>REMETENTE</small>
                <input type="text" id="remetente" value={formData.remetente} onChange={handleChange} placeholder="Razão social" maxLength={150} required/>
              </div>
            </div>
            
            <div className="formLine">
              <div className="formItem">
                <small>CEP DE COLETA</small>
                <input 
                  type="text"
                  id="CEPColeta"
                  placeholder="00000-000"
                  minLength={8}
                  maxLength={9}
                  value={cepColetaFormatted}
                  onChange={(e) => handleFormattedInputChange(setCepColetaFormatted, formatCEP, (value) => (validateCEP(value)), e.target.value)}
                  required
                />
              </div>

              <div className="formItem">
                <small>UF</small>
                <select id="ufColeta" value={formData.ufColeta} onChange={handleChange} required>

                  <option value="SP" default>SP</option>
                  <option value="RJ">RJ</option>
                  <optgroup label="—————————"></optgroup> {/* Linha divisória */}
                  <option value="AC">AC</option>
                  <option value="AL">AL</option>
                  <option value="AM">AM</option>
                  <option value="AP">AP</option>
                  <option value="BA">BA</option>
                  <option value="CE">CE</option>
                  <option value="DF">DF</option>
                  <option value="ES">ES</option>
                  <option value="GO">GO</option>
                  <option value="MA">MA</option>
                  <option value="MT">MT</option>
                  <option value="MS">MS</option>
                  <option value="MG">MG</option>
                  <option value="PA">PA</option>
                  <option value="PB">PB</option>
                  <option value="PE">PE</option>
                  <option value="PI">PI</option>
                  <option value="PR">PR</option>
                  <option value="RN">RN</option>
                  <option value="RO">RO</option>
                  <option value="RR">RR</option>
                  <option value="RS">RS</option>
                  <option value="SC">SC</option>
                  <option value="SE">SE</option>
                  <option value="TO">TO</option>
                </select>
              </div>
              
              <div className="formItem">
                <small>CIDADE</small>
                <input type="text" id="cidadeColeta" value={formData.cidadeColeta} onChange={handleChange} placeholder="Cidade" maxLength={50} required/>
              </div>

              <div className="formItem">
                <small>BAIRRO</small>
                <input type="text" id="bairroColeta" value={formData.bairroColeta} onChange={handleChange} placeholder="Bairro" maxLength={50} required/>
              </div>
            </div>

            <div className="formLine">
              <div className="formItem">
                <small>ENDEREÇO</small>
                <input type="address" id="enderecoColeta" value={formData.enderecoColeta} onChange={handleChange} placeholder="Endereço" maxLength={200} required/>
              </div>

              <div className="formItem">
                <small>NUMERO</small>
                <input type="addressNumber" id="numeroColeta" value={formData.numeroColeta} onChange={handleChange} placeholder="000" maxLength={20} required/>
              </div>

              <div className="formItem">
                <small>COMPLEMENTO</small>
                <input type="text" id="complementoColeta" value={formData.complementoColeta} onChange={handleChange} placeholder="Complemento" maxLength={150}/>
              </div>
            </div>

            <div className="formLine">
              <div className="formItem">
                <small>INFORMAÇÕES ADICIONAIS</small>
                <input type="text" id="responsavelColeta" value={formData.responsavelColeta} onChange={handleChange} placeholder="Responsável da coleta" maxLength={100} required/>
              </div>

              <div className="formItem">
                <small>TELEFONE</small>
                <input
                  type="text"
                  id="telefoneColeta"
                  placeholder="+55 (00) 00000-0000"
                  maxLength={19}
                  value={telefoneColetaFormatted}
                  onChange={(e) => handleFormattedInputChange(setTelefoneColetaFormatted, formatTelefone, (value) => (value), e.target.value)}
                  required
                />
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
                <small>CPF OU CNPJ DO DESTINATÁRIO</small>
                <input
                  type="text"
                  id="cpfCnpjDestinatario"
                  placeholder="00.000.000/0000-00"
                  maxLength={18}
                  value={cpfCnpjDestinatarioFormatted}
                  onChange={(e) => handleFormattedInputChange(setCpfCnpjDestinatarioFormatted, formatCPFCNPJ, (value) => (validateCPF(value) || validateCNPJ(value)), e.target.value)}
                  required
                />
              </div>

              <div className="formItem">
                <small>INSCRIÇÃO ESTADUAL</small>
                <input type="text" id="IEDestinatario" value={formData.IEDestinatario} onChange={handleChange} placeholder="00000000" maxLength={25}/>
              </div>

              <div className="formItem">
                <small>DESTINATÁRIO</small>
                <input type="text" id="destinatario" value={formData.destinatario} onChange={handleChange} placeholder="Razão social" maxLength={150} required/>
              </div>
            </div>
            
            <div className="formLine">
              <div className="formItem">
                <small>CEP DE ENTREGA</small>
                <input
                  type="text"
                  id="cepEntrega"
                  placeholder="00000-000"
                  minLength={8}
                  maxLength={9}
                  value={cepEntregaFormatted}
                  onChange={(e) => handleFormattedInputChange(setCepEntregaFormatted, formatCEP, (value) => (validateCEP(value)), e.target.value)}
                  required
                />
              </div>

              <div className="formItem">
                <small>UF</small>
                <select id="ufEntrega" value={formData.ufEntrega} onChange={handleChange} required>
                  <option value="SP" default>SP</option>
                  <option value="RJ">RJ</option>
                  <optgroup label="—————————"></optgroup> {/* Linha divisória */}
                  <option value="AC">AC</option>
                  <option value="AL">AL</option>
                  <option value="AM">AM</option>
                  <option value="AP">AP</option>
                  <option value="BA">BA</option>
                  <option value="CE">CE</option>
                  <option value="DF">DF</option>
                  <option value="ES">ES</option>
                  <option value="GO">GO</option>
                  <option value="MA">MA</option>
                  <option value="MT">MT</option>
                  <option value="MS">MS</option>
                  <option value="MG">MG</option>
                  <option value="PA">PA</option>
                  <option value="PB">PB</option>
                  <option value="PE">PE</option>
                  <option value="PI">PI</option>
                  <option value="PR">PR</option>
                  <option value="RN">RN</option>
                  <option value="RO">RO</option>
                  <option value="RR">RR</option>
                  <option value="RS">RS</option>
                  <option value="SC">SC</option>
                  <option value="SE">SE</option>
                  <option value="TO">TO</option>
                </select>
              </div>
              
              <div className="formItem">
                <small>CIDADE</small>
                <input type="text" id='cidadeEntrega' value={formData.cidadeEntrega} onChange={handleChange} placeholder='Cidade' maxLength={50} required/>
              </div>

              <div className="formItem">
                <small>BAIRRO</small>
                <input type="text" id="bairroEntrega" value={formData.bairroEntrega} onChange={handleChange} placeholder="Bairro" maxLength={50} required/>
              </div>
            </div>

            <div className="formLine">
              <div className="formItem">
                <small>ENDEREÇO</small>
                <input type="address" id="enderecoEntrega" value={formData.enderecoEntrega} onChange={handleChange} placeholder="Endereço" maxLength={200} required/>
              </div>

              <div className="formItem">
                <small>NUMERO</small>
                <input type="addressNumber" id="numeroEntrega" value={formData.numeroEntrega} onChange={handleChange} placeholder="000" maxLength={20} required/>
              </div>

              <div className="formItem">
                <small>COMPLEMENTO</small>
                <input type="text" id="complementoEntrega" value={formData.complementoEntrega} onChange={handleChange} placeholder="Complemento" maxLength={150} />
              </div>
            </div>

            <div className="formLine">
              <div className="formItem">
                <small>INFORMAÇÕES ADICIONAIS</small>
                <input type="text" id="responsavelEntrega" value={formData.responsavelEntrega} onChange={handleChange} placeholder="Responsável da entrega" maxLength={100} required/>
              </div>

              <div className="formItem">
                <small>TELEFONE</small>
                <input 
                  type="text"
                  id="telefoneEntrega"
                  placeholder="+55 (00) 00000-0000"
                  maxLength={19}
                  value={telefoneEntregaFormatted}
                  onChange={(e) => handleFormattedInputChange(setTelefoneEntregaFormatted, formatTelefone, (value) => (value), e.target.value)}
                />
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
                <input type="datetime-local" id="dataColeta" value={formData.dataColeta} onChange={handleChange} placeholder="00/00/00 00:00" required/>
              </div>

              <div className="formItem">
                <small>O QUE É O MATERIAL?</small>
                <input type="text" id="descricaoMaterial" value={formData.descricaoMaterial} onChange={handleChange} placeholder="Descrição do material" maxLength={100}/>
              </div>

              <div className="formItem">
                <small>VALOR DA NOTA</small>
                <input 
                  id="valorNF" 
                  placeholder="R$ 00,00" 
                  type="text"
                  value={valorNFFormatted}
                  onChange={(e) => handleFormattedInputChange(setValorNFFormatted, formatCurrency, (value) => (value), e.target.value)}
                  required/>
              </div>
            </div>
            
            <div className="formLine">
              <div className="formItem">
                <small>CHAVE DA NOTA FISCAL</small>
                <input type="text" id="notaFiscal" value={formData.notaFiscal} onChange={handleChange} placeholder="Código da NF" maxLength={44} required/>
              </div>
              
              <div className="formItem">
                <small>QUANTIDADE</small>
                <input type="number" id="quantidade" value={formData.quantidade} onChange={handleChange} placeholder="01" min="1" required/>
              </div>

              <div className="formItem">
                <small>PESO TOTAL</small>
                <input type="number" id="peso" value={formData.peso} onChange={handleChange} placeholder="10.0" step="0.5" min="0.5" required/>
              </div>
            </div>

            <div className="formLine">
              <div className="formItem">
                <small>CPF OU CNPJ DO PAGADOR</small>
                <input 
                  type="text"
                  id="cpfCnpjPagador"
                  placeholder="00.000.000/0000-00"
                  maxLength={18}
                  value={cpfCnpjPagadorFormatted}
                  onChange={(e) => handleFormattedInputChange(setCpfCnpjPagadorFormatted, formatCPFCNPJ, (value) => (validateCPF(value) || validateCNPJ(value)), e.target.value)}
                  required
                />
              </div>

              <div className="formItem">
                <small>PAGADOR DO FRETE</small>
                <input type="text" id="expedidor" value={formData.expedidor} onChange={handleChange} placeholder="Razão Social" maxLength={250} required/>
              </div>

              <div className="formItem">
                <small>E-MAIL CONTATO</small>
                <input type="email" id="emailContato" value={formData.emailContato} onChange={handleChange} placeholder="Insira seu e-mail" maxLength={100} required/>
              </div>
            </div>

            <div className="formLine">
              <div className="formItem">
                <small>SOLICITANTE</small>
                <input type="text" id="solicitante" value={formData.solicitante} onChange={handleChange} placeholder="Insira seu nome" maxLength={80} required/>
              </div>

              <div className="formItem">
                <small>TELEFONE DO SOLICITANTE</small>
                <input
                  type="text"
                  id="telefoneSolicitante"
                  placeholder="+55 (00) 00000-0000"
                  maxLength={19}
                  value={telefoneSolicitanteFormatted}
                  onChange={(e) => handleFormattedInputChange(setTelefoneSolicitanteFormatted, formatTelefone, (value) => (value), e.target.value)}
                  required
                />
              </div>

              <div className="formCheck">
                <div className="formCheckItem">
                  <input type="checkbox" id="checkMail" value={formData.checkMail} onChange={handleChangeCheckbox}/>
                  <label htmlFor="checkMail">Quero ser notificado via e-mail</label>
                </div>
                <div className="formCheckItem">
                  <input type="checkbox" id="checkWhatsapp" value={formData.checkWhatsapp} onChange={handleChangeCheckbox}/>
                  <label htmlFor="checkWhatsapp">Quero ser notificado via Whatsapp</label>
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