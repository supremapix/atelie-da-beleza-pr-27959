// Script para atualizar descrições com endereço
// Este arquivo será usado apenas como referência

const enderecoAtelie = "R. Alexandre Von Humboldt, 306";
const bairroAtelie = "Pilarzinho";
const cepAtelie = "80060-150";

// Textos padrão para inserir nas descrições:
const textosCidade = [
  `Nossa escola está localizada no ${bairroAtelie} (${enderecoAtelie}) com fácil acesso desde [CIDADE] via transporte público e carro.`,
  `O Ateliê Beleza fica no ${bairroAtelie} (${enderecoAtelie} - CEP ${cepAtelie}), região com excelente acesso de [CIDADE].`,
  `Estamos estrategicamente localizados no ${bairroAtelie} (${enderecoAtelie}) para atender você de [CIDADE] com comodidade.`
];

const textosBairro = [
  `Nossa escola no ${bairroAtelie} (${enderecoAtelie}) está próxima ao [BAIRRO] com fácil acesso via transporte público.`,
  `O Ateliê Beleza fica no ${bairroAtelie} (${enderecoAtelie} - CEP ${cepAtelie}), região com excelente acesso do [BAIRRO].`,
  `Localizada no ${bairroAtelie} (${enderecoAtelie}), nossa escola tem fácil acesso desde o [BAIRRO].`
];

export { enderecoAtelie, bairroAtelie, cepAtelie, textosCidade, textosBairro };
