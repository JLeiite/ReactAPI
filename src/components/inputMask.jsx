// Formata CPF ou CNPJ
export const formatCPFCNPJ = (value) => {
  const cleanedValue = value.replace(/[^\d]/g, '');

  if (cleanedValue.length <= 11) {
    // Formata CPF: 000.000.000-00
    return cleanedValue.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  } else {
    // Formata CNPJ: 00.000.000/0000-00
    return cleanedValue.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
  }
};

// Valida CPF
export const validateCPF = (value) => {
  const cleanedValue = value.replace(/[^\d]/g, '');

  if (cleanedValue.length !== 11) {
    return false; // CPF incompleto
  }

  // Verifica se todos os dígitos são iguais
  if (/^(\d)\1{10}$/.test(cleanedValue)) {
    return false; // CPF inválido, todos os dígitos são iguais
  }

  // Calcula o primeiro dígito verificador
  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += parseInt(cleanedValue.charAt(i)) * (10 - i);
  }
  let firstDigit = 11 - (sum % 11);
  if (firstDigit > 9) {
    firstDigit = 0;
  }

  // Calcula o segundo dígito verificador
  sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += parseInt(cleanedValue.charAt(i)) * (11 - i);
  }
  let secondDigit = 11 - (sum % 11);
  if (secondDigit > 9) {
    secondDigit = 0;
  }

  // Verifica se os dígitos verificadores estão corretos
  if (
    parseInt(cleanedValue.charAt(9)) === firstDigit &&
    parseInt(cleanedValue.charAt(10)) === secondDigit
  ) {
    return true; // CPF válido
  } else {
    return false; // CPF inválido
  }
};

// Valida CNPJ
export const validateCNPJ = (value) => {
  const cleanedValue = value.replace(/[^\d]/g, '');

  if (cleanedValue.length !== 14) {
    return false; // CNPJ incompleto
  }

  // Calcula o primeiro dígito verificador
  let sum = 0;
  let weight = 5;
  for (let i = 0; i < 12; i++) {
    sum += parseInt(cleanedValue.charAt(i)) * weight;
    weight = weight === 2 ? 9 : weight - 1;
  }
  let firstDigit = 11 - (sum % 11);
  if (firstDigit > 9) {
    firstDigit = 0;
  }

  // Calcula o segundo dígito verificador
  sum = 0;
  weight = 6;
  for (let i = 0; i < 13; i++) {
    sum += parseInt(cleanedValue.charAt(i)) * weight;
    weight = weight === 2 ? 9 : weight - 1;
  }
  let secondDigit = 11 - (sum % 11);
  if (secondDigit > 9) {
    secondDigit = 0;
  }

  // Verifica se os dígitos verificadores estão corretos
  if (
    parseInt(cleanedValue.charAt(12)) === firstDigit &&
    parseInt(cleanedValue.charAt(13)) === secondDigit
  ) {
    return true; // CNPJ válido
  } else {
    return false; // CNPJ inválido
  }
};

// Formata CEP
export const formatCEP = (value) => {
  const cleanedValue = value.replace(/[^\d]/g, '');
  if (cleanedValue.length <= 5) {
    return cleanedValue;
  }
  return `${cleanedValue.slice(0, 5)}-${cleanedValue.slice(5, 8)}`;
};

// Valida CEP
export const validateCEP = (value) => {
  const cleanedValue = value.replace(/[^\d]/g, '');
  return cleanedValue.length === 8; // Deve ter exatamente 8 dígitos
};

// Formata Telefone
export const formatTelefone = (value) => {
  const cleanedValue = value.replace(/[^\d]/g, '');

  // Verifica se o valor já inclui o prefixo +55
  const hasCountryCode = cleanedValue.startsWith('55');

  if (cleanedValue.length <= 2) {
    return `+${cleanedValue}`;
  } else if (cleanedValue.length <= 4) {
    return `+${cleanedValue.slice(0, 2)} (${cleanedValue.slice(2)}`;
  } else if (cleanedValue.length <= 12) {
    if (hasCountryCode) {
      return `+${cleanedValue.slice(0, 2)} (${cleanedValue.slice(2, 4)}) ${cleanedValue.slice(4, 8)}-${cleanedValue.slice(8, 12)}`;
    } else {
      return `+55 (${cleanedValue.slice(0, 2)}) ${cleanedValue.slice(2, 6)}`;
    }
  } else {
    if (hasCountryCode) {
      return `+${cleanedValue.slice(0, 2)} (${cleanedValue.slice(2, 4)}) ${cleanedValue.slice(4, 9)}-${cleanedValue.slice(9, 13)}`;
    } else {
      return `+55 (${cleanedValue.slice(0, 2)}) ${cleanedValue.slice(2, 7)}-${cleanedValue.slice(7, 11)}`;
    }
  }
};

// Formata Valor
export const formatCurrency = (value) => {
  // Remove tudo que não for número ou ponto
  let cleanedValue = value.replace(/[^\d,]/g, '');

  // Substitui vírgulas por ponto para facilitar a manipulação
  cleanedValue = cleanedValue.replace(/,/g, '.');

  // Formata apenas se o valor não for vazio
  if (cleanedValue) {
    // Divide o valor em parte inteira e decimal
    const parts = cleanedValue.split('.');

    // Formata a parte inteira com separador de milhares
    let formattedValue = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');

    // Se há parte decimal
    if (parts.length > 1) {
      // Limita a parte decimal a dois dígitos
      formattedValue += `,${parts[1].slice(0, 2)}`;
    }

    // Adiciona o símbolo de moeda ou qualquer outra formatação desejada
    return `R$ ${formattedValue}`;
  } else {
    // Retorna valor vazio se o input estiver vazio
    return '';
  }
};