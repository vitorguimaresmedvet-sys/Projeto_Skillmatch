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