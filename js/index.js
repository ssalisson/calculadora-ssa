const cursos = {
  // Recife
  medicina_recife: { corte: 76.41, campus: "Recife" },
  engenharia_comp_recife: { corte: 65.16, campus: "Recife" },
  direito_recife: { corte: 63.61, campus: "Recife" },
  odontologia_recife: { corte: 54.88, campus: "Recife" },
  ciencias_biologicas_recife: { corte: 43.57, campus: "Recife" },
  enfermagem_recife: { corte: 48.50, campus: "Recife" },
  saude_coletiva_recife: { corte: 23.74, campus: "Recife" },
  terapia_ocupacional_recife: { corte: 55.52, campus: "Recife" },
  educacao_fisica_recife: { corte: 35.89, campus: "Recife" },
  ciencias_sociais_recife: { corte: 37.51, campus: "Recife" },
  administracao_recife: { corte: 37.00, campus: "Recife" },
  engenharia_civil_recife: { corte: 18.18, campus: "Recife" },
  engenharia_automacao_controle_recife: { corte: 43.36, campus: "Recife" },
  engenharia_eletrica_eletrotecnica_recife: { corte: 32.00, campus: "Recife" },
  engenharia_telecom_recife: { corte: 31.00, campus: "Recife" },
  engenharia_eletrica_recife: { corte: 23.83, campus: "Recife" },
  engenharia_mecanica_recife: { corte: 38.51, campus: "Recife" },
  fisica_material_recife: { corte: 32.46, campus: "Recife" },

  // Caruaru
  sistemas_informacao_caruaru: { corte: 50.84, campus: "Caruaru" },
  administracao_caruaru: { corte: 38.52, campus: "Caruaru" },

  // Nazaré da Mata
  ciencia_computacao_nazare: { corte: 45.63, campus: "Nazré da Mata" },
  ciencias_biologicas_nazare: { corte: 22.17, campus: "Nazré da Mata" },
  geografia_nazare: { corte: 18.90, campus: "Nazré da Mata" },
  historia_nazare: { corte: 37.04, campus: "Nazré da Mata" },
  letras_port_esp_nazare: { corte: 17.94, campus: "Nazré da Mata" },
  letras_port_ing_nazare: { corte: 37.71, campus: "Nazré da Mata" },
  matematica_nazare: { corte: 27.09, campus: "Nazré da Mata" },
  pedagogia_nazare: { corte: 34.88, campus: "Nazré da Mata" },
  tecnologia_logistica_nazare: { corte: 27.70, campus: "Nazré da Mata" },

  // Garanhuns
  medicina_garanhuns: { corte: 74.79, campus: "Garanhuns" },
  psicologia_garanhuns: { corte: 50.16, campus: "Garanhuns" },
  engenharia_software_garanhuns: { corte: 55.44, campus: "Garanhuns" },
  computacao_garanhuns: { corte: 32.08, campus: "Garanhuns" },
  ciencias_biologicas_l_garanhuns: { corte: 36.17, campus: "Garanhuns" },
  geografia_garanhuns: { corte: 31.00, campus: "Garanhuns" }, // Default/Existing if not in list? Not in list. Keeping safe.
  historia_garanhuns: { corte: 35.03, campus: "Garanhuns" },
  letras_portuguesa_garanhuns: { corte: 31.82, campus: "Garanhuns" },
  matematica_garanhuns: { corte: 35.20, campus: "Garanhuns" },
  pedagogia_garanhuns: { corte: 33.38, campus: "Garanhuns" },

  // Petrolina
  fisioterapia_petrolina: { corte: 47.32, campus: "Petrolina" },
  enfermagem_petrolina: { corte: 43.53, campus: "Petrolina" },
  nutricao_petrolina: { corte: 34.95, campus: "Petrolina" },
  ciencias_biologicas_l_petrolina: { corte: 32.00, campus: "Petrolina" },
  geografia_petrolina: { corte: 31.00, campus: "Petrolina" },
  letras_port_espanhol_petrolina: { corte: 35.00, campus: "Petrolina" },
  letras_port_ingles_petrolina: { corte: 36.00, campus: "Petrolina" },
  matematica_petrolina: { corte: 35.00, campus: "Petrolina" },
  historia_petrolina: { corte: 32.00, campus: "Petrolina" },
  pedagogia_petrolina: { corte: 30.00, campus: "Petrolina" },

  // Arcoverde
  direito_arcoverde: { corte: 49.55, campus: "Arcoverde" },
  odontologia_arcoverde: { corte: 50.76, campus: "Arcoverde" },

  // Serra talhada
  medicina_serratalhada: { corte: 71.63, campus: "Serratalhada" },

  // Surubim
  engenharia_software_surubim: { corte: 49.28, campus: "Surubim" },
  sistemas_informacao_surubim: { corte: 23.55, campus: "Surubim" },

  // Salgueiro
  administracao_salgueiro: { corte: 20.18, campus: "Salgueiro" },

  // Ouricuri
  enfermagem_ouricuri: { corte: 22.78, campus: "Ouricuri" },
  
  // Palmares
  administracao_palmares: { corte: 33.85, campus: "Palmares" },
  servico_social_palmares: { corte: 31.96, campus: "Palmares" }
};


function calcularNota3() {
  const nota1Input = document.getElementById("nota1");
  const nota2Input = document.getElementById("nota2");
  const notaRedacaoInput = document.getElementById("notaRedacao");
  const nota3Input = document.getElementById("nota3");
  const cursoSelecionado = document.getElementById("curso").value;
  const resultadoDiv = document.getElementById("resultado");

  const nota1 = parseFloat(nota1Input.value) || 0;
  const nota2 = parseFloat(nota2Input.value) || 0;
  const notaRedacao = parseFloat(notaRedacaoInput.value) || 0;

  if (cursos.hasOwnProperty(cursoSelecionado)) {
      const { corte, campus } = cursos[cursoSelecionado];
      const notaMinima = corte;

      const N1 = notaMinima * 10;
      const N2 = nota1 + nota2;
      const N3 = 3 * N2;
      const N4 = N1 - N3;
      const N5 = N4 - notaRedacao;
      const nota3Necessaria = N5 / 3;

      const mediaFinal = (nota3Necessaria * 0.75) + (notaRedacao * 0.25);
      nota3Input.value = nota3Necessaria.toFixed(2);

      // Calcular questões necessárias
      // Fórmula: teto(nota3Necessaria / 1.053)
      let questoes = Math.ceil(nota3Necessaria / 1.053);
      if (questoes < 0) questoes = 0;

      if (nota3Necessaria > 100) {
          resultadoDiv.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Nota necessária no SSA-3: ' + nota3Necessaria.toFixed(2);
          resultadoDiv.style.backgroundColor = "rgb(255, 255, 163)"; 
      } else if (nota3Necessaria < 0) {
          resultadoDiv.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Você já passou!';
          resultadoDiv.style.backgroundColor = "rgb(255, 255, 163)"; 
      } else {
          resultadoDiv.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Nota necessária no SSA-3: ' + nota3Necessaria.toFixed(2);
          resultadoDiv.style.backgroundColor = "rgb(255, 255, 163)";
      }

      resultadoDiv.style.display = "block";

      mostrarDetalhes(nota1, nota2, notaRedacao, parseFloat(nota3Input.value), notaMinima, mediaFinal, campus, questoes);
  } else {
      resultadoDiv.innerHTML = "Curso não encontrado.";
      nota3Input.value = "";
      resultadoDiv.style.display = "block";
  }
}

function mostrarDetalhes(nota1, nota2, notaRedacao, nota3, notaCorte, mediaFinal, campus, questoes) {
  const detalhesDiv = document.getElementById("detalhes");
  
  // Cálculo da nota final para exibição (média simples dos 4 componentes usada no display antigo, 
  // embora a nota de corte use pesos. Mantendo consistência com o código anterior para display)
  const notaFinalExibida = ((nota1 + nota2 + notaRedacao + nota3) / 4).toFixed(2);
  
  // Usando a fórmula de média final correta se necessário, mas o código original usava média aritmética simples para o display "Média Final no SSA-3"
  // Vou manter o cálculo original do display para não alterar comportamento visual inesperado, 
  // mas o valor de aprovação é baseado no 'notaCorte' vs 'notaMinima'.

  let htmlContent = `
    <div style="text-align: center; margin-bottom: 20px;">
        <h2 style="font-size: 2em; color: #333;">Você precisa acertar <strong>${questoes}</strong> questões no SSA-3</h2>
    </div>
    <hr style="margin: 20px 0; border: 1px solid #ccc;">
    <h3>DETALHAMENTO DE NOTAS</h3>
    <p>Nota da prova objetiva (SSA-3): <span id="nota3Detalhe">${nota3.toFixed(2)}</span></p>
    <p>Média Final no SSA-3: <span id="notaFinal">${notaFinalExibida}</span></p>
    <p>Nota de corte do curso: <span id="notaCorteCurso">${notaCorte.toFixed(2)}</span></p>
    <p>Classificação: <span id="classificacao">${nota3 > 100 ? "Reprovado (Impossível passar, nota necessária > 100)" : "Aprovado!"}</span></p>
  `;

  detalhesDiv.innerHTML = htmlContent;
  detalhesDiv.style.display = "block";
}

function limparTudo() {
  document.getElementById("nota1").value = "";
  document.getElementById("nota2").value = "";
  document.getElementById("notaRedacao").value = "";
  document.getElementById("nota3").value = "";
  document.getElementById("resultado").innerHTML = "";
  document.getElementById("resultado").style.display = "none";
  document.getElementById("detalhes").style.display = "none";
}
