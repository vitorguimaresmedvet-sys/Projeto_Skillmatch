# **<u>*“SkillMatch”*</u>**

## **<u>Sobre o Projeto</u>**
O *“skillmatch”* é um simulador de compatibilidade desenvolvido em *“Javascript”* puro para auxiliar recrutadoras na busca por talentos de *“Front-End”* Júnior. O sistema analisa de forma automatizada o perfil técnico de um candidato, comparando suas habilidades com os requisitos de diversas vagas disponíveis. 

Ao final da execução, o *“script”* entrega um relatório detalhado contendo:
- Percentual exato de compatibilidade matemática para cada vaga.
- Lista de habilidades em comum encontradas.
- Lista de habilidades faltantes (gargalos técnicos).
- Indicação da vaga ideal (maior compatibilidade).
- Recomendações personalizadas de estudo baseadas no que falta para o candidato.

## **<u>Desenvolvedores (*“Squad”*)</u>**
- **Vitor Augusto G. Guimarães** (Organização, *“Kanban”* & Documentação técnica)
- **Gabriel da Rosa dos Passos** (Desenvolvimento de *“Features”* & Lógica)
- **Guilherme Zanzi Vieira** (Desenvolvimento de *“Features”* & *“Video”*)

---



## **<u>Objetivos Técnicos (Módulo 01)</u>**
Este projeto foi construído para consolidar e aplicar os conceitos fundamentais de desenvolvimento de *“software”* abordados no primeiro módulo do curso, incluindo:
- Lógica e Controle de Fluxo: Estruturas condicionais avançadas, operadores lógicos e laços de repetição.
- Manipulação de Dados: Objetos literais, *“arrays”* e métodos modernos de iteração (*“map”*, *“filter”*, *“find”*, etc.).
- Paradigma Orientado a Objetos (POO): Criação de classes, herança e manipulação do contexto *“this”*.
- *“JavaScript”* Avançado: Uso prático de *“callbacks”*, *“closures”* e manipulação de fluxos assíncronos com *“Promises”* e *“async/await”*.
- Metodologia de Trabalho: Controle de versão com *“Git”*/*“GitHub”* (*“Git Flow”*) e gerenciamento de tarefas via *“Kanban”* (*“Trello”*).

---

## **<u>Fundamentos Teóricos Aplicados</u>**


### **<u>1. Como a Internet Funciona?</u>**
A internet é, fundamentalmente, uma infraestrutura global de redes interconectadas que trocam informações entre si. Quando você digita um endereço *“web”* (*“URL”*) ou interage com um sistema, os dados são divididos em pequenos pedaços chamados pacotes. Esses pacotes viajam por cabos submarinos, fibra óptica e roteadores utilizando protocolos padronizados (como o *“TCP/IP”*). Cada dispositivo na rede possui um endereço único chamado *“IP”*. Para que não precisemos decorar sequências numéricas, o sistema *“DNS (Domain Name System)”* atua como uma "lista telefônica", traduzindo nomes de domínio (ex: *“www.google.com”*) no *“IP”* real do servidor onde os arquivos estão hospedados.

### **<u>2. Arquitetura Cliente-Servidor</u>**
O modelo Cliente-Servidor é a estrutura de *“design”* de *“software”* que dita como os sistemas se comunicam na *“web”*:
- Cliente: É o dispositivo ou aplicação que faz a solicitação dos dados (a ponta final). No nosso caso, o navegador *“web”* (Google Chrome, Firefox) agindo por meio do usuário.
- Servidor: É uma máquina de alta performance configurada para processar requisições, armazenar bases de dados e devolver as respostas solicitadas. 

A comunicação ocorre através do protocolo *“HTTP/HTTPS”*, onde o cliente envia uma *“Request”* (requisição) e o servidor processa e devolve uma *<i>Response</i>* (resposta) contendo o *“status”* da operação e os dados necessários. (Nota: No *“SkillMatch”* *“JS”*, simulamos o tempo de resposta dessa arquitetura utilizando funções assíncronas).
