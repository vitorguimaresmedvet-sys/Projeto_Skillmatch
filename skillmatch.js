// 1. Dados de teste (descomentados)
// const candidatoOriginal = {
//   nome: "João Silva",
//   idade: 30,
//   area: "Desenvolvimento Back-End",
//   habilidades: ["JavaScript", "React", "Node.js"],
//   experienciaMeses: 5,
// };

const candidatoOriginal = {
  nome: "nome",
  idade: "idade",
  area: "area",
  habilidades: "",
  experienciaMeses: "experienciaMeses",
};

// Controle global de saída no console. Defina `true` para suprimir logs de listagem.

// Lista de vagas do sistema (RF02) -- array de objetos que descrevem cada vaga.
// Cada objeto deve conter: id, empresa, cargo, requisitos (array), salario e modalidade.
const listaVagas = [
  {
    id: 1,
    empresa: "Tech Solutions",
    cargo: "Desenvolvedor Back-End Júnior",
    requisitos: ["JavaScript", "Node.js", "SQL"],
    salario: 4800,
    modalidade: "Presencial",
  },
  {
    id: 2,
    empresa: "InovaTech",
    cargo: "Desenvolvedor Back-End Pleno",
    requisitos: ["JavaScript", "Node.js", "Docker", "React"],
    salario: 7000,
    modalidade: "Remoto",
  },
  {
    id: 3,
    empresa: "CodeMasters",
    cargo: "Desenvolvedor Back-End Sênior",
    requisitos: ["JavaScript", "Node.js", "Docker", "Kubernetes"],
    salario: 11000,
    modalidade: "Híbrido",
  },
];

// 2. Classes (Com iniciais maiúsculas para evitar conflito de escopo)
// `Vaga` representa o modelo de uma vaga (RF09). Usamos classes para demonstrar POO.
class Vaga {
  constructor(cargo, salario, requisitos, modalidade, id = null) {
    this.id = id;
    this.cargo = cargo;
    this.salario = salario;
    this.requisitos = requisitos;
    this.modalidade = modalidade;
  }
}

// Classe simples para representar o candidato (objeto de domínio - RF01).
class Candidato {
  constructor(nome, idade, area, habilidades, experienciaMeses) {
    this.nome = nome;
    this.idade = idade;
    this.area = area;
    this.habilidades = habilidades;
    this.experienciaMeses = experienciaMeses;
  }
}

// Exemplo de herança (RF10): VagaFrontEnd estende Vaga e adiciona `nivel`.
class VagaFrontEnd extends Vaga {
  constructor(cargo, empresa, requisitos, salario, modalidade, nivel) {
    super(cargo, salario, requisitos, modalidade);
    this.empresa = empresa;
    this.nivel = nivel;
  }
  // Método que demonstra o uso de `this` (RF11).
  exibirNivel() {
    return `Nivel da vaga: ${this.nivel}`;
  }
}
