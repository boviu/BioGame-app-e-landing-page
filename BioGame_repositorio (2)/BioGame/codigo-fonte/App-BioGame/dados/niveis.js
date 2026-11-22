// Conteúdo do jogo.
// 4 níveis x 4 fases. Cada fase tem uma narrativa e 2 perguntas (4 opções, `correta` = índice da certa, começando em 0).
// Cada pergunta tem uma `explicacao` curta, exibida na tela do quiz depois que o jogador acerta ("Você sabia?").
// A jornada vai do ALERTA VERMELHO (o problema do plástico convencional) até a SOLUÇÃO (consumo consciente + bioplásticos
// usados do jeito certo), conscientizando em cada fase:
//   Nível 1 (vermelho)  - o tamanho do problema: acúmulo, tempo de decomposição, microplásticos, limites da reciclagem
//   Nível 2 (laranja)   - as causas e os primeiros passos: recusar, efeito multiplicador, origem fóssil, descarte correto
//   Nível 3 (amarelo)   - bioplásticos: o que são, de onde vêm, cuidado com falsas promessas e destino correto
//   Nível 4 (verde)     - a solução completa: ecossistema, ordem de prioridades, responsabilidade individual e coletiva
// Depois das 16 fases aparece o nível bônus "O Guardião da Semente"; ao concluí-lo a árvore vira dourada.
// Para editar textos ou perguntas, mexa só neste arquivo.

export const NIVEIS = [
  {
    "id": 1,
    "nome": "Introdução",
    "subtitulo": "O alerta vermelho",
    "fases": [
      {
        "id": "1.1",
        "titulo": "O Alerta Vermelho",
        "narrativa": "Você encontrou uma pequena árvore quase sem vida em um lugar que já foi uma floresta exuberante. O chão está coberto de sacolas, garrafas e embalagens, e o painel do jogo pisca em vermelho: o plástico convencional, que parecia uma solução prática, virou um dos maiores problemas ambientais do planeta.",
        "perguntas": [
          {
            "pergunta": "Por que o plástico convencional se acumula tanto no meio ambiente?",
            "opcoes": [
              "Porque ele se decompõe rápido, mas as pessoas descartam demais.",
              "Porque ele só é produzido em países sem coleta de lixo.",
              "Porque é produzido em enorme escala, usado por pouco tempo e leva séculos para se degradar.",
              "Porque a chuva e o vento criam plástico a partir do solo."
            ],
            "correta": 2,
            "explicacao": "A produção mundial de plástico mais que dobrou desde o ano 2000. Boa parte vira embalagem, usada por minutos, mas o material permanece no ambiente por séculos."
          },
          {
            "pergunta": "Sacolas, copos, canudos e embalagens de alimentos são chamados de plásticos de uso único. O que isso significa?",
            "opcoes": [
              "São feitos para serem usados uma só vez, ou por muito pouco tempo, e depois descartados.",
              "São feitos de um material que pode ser reciclado infinitas vezes sem perder qualidade.",
              "São produtos usados apenas pela indústria, nunca pelo consumidor final.",
              "São produtos que desaparecem sozinhos depois do primeiro uso."
            ],
            "correta": 0,
            "explicacao": "Os itens de uso único estão entre os que mais aparecem em praias, rios e ruas. Eles são o principal alvo de quem quer reduzir o lixo plástico, porque quase sempre existe uma alternativa reutilizável."
          }
        ]
      },
      {
        "id": "1.2",
        "titulo": "Minutos de Uso, Séculos de Lixo",
        "narrativa": "Entre as raízes, você encontra copos, canudos e garrafas esquecidos. Cada um foi usado por alguns minutos e, mesmo assim, está aqui há anos. E vai continuar por muito mais tempo se ninguém fizer nada.",
        "perguntas": [
          {
            "pergunta": "Em estimativas científicas, quanto tempo uma garrafa plástica comum pode levar para se decompor na natureza?",
            "opcoes": [
              "Algumas semanas, como uma folha caída.",
              "Cerca de um ano.",
              "Poucos dias, com a ajuda do sol.",
              "Centenas de anos."
            ],
            "correta": 3,
            "explicacao": "O sol e o tempo quebram o plástico em pedaços menores, mas isso é fragmentação, não decomposição. Por isso se fala em centenas de anos."
          },
          {
            "pergunta": "Por que a expressão \"joguei fora\" engana quando falamos de lixo plástico?",
            "opcoes": [
              "Porque o lixo plástico é sempre recolhido e reaproveitado pela prefeitura.",
              "Porque não existe \"fora\": o resíduo só muda de lugar e pode terminar em aterro, solo, rio ou mar.",
              "Porque o plástico jogado fora volta para a fábrica automaticamente.",
              "Porque o plástico só é um problema quando fica dentro de casa."
            ],
            "correta": 1,
            "explicacao": "Todo resíduo vai para algum lugar. Em aterros ele ocupa espaço por muito tempo, e quando é descartado de forma errada pode ser levado pela chuva até rios e oceanos."
          }
        ]
      },
      {
        "id": "1.3",
        "titulo": "O Plástico que Não se Vê",
        "narrativa": "O vento levanta uma poeira fina sobre o solo da floresta. Parte dela não é terra: são fragmentos minúsculos de plástico, tão pequenos que quase ninguém percebe. Eles estão no solo, na água e até no ar.",
        "perguntas": [
          {
            "pergunta": "O que são microplásticos?",
            "opcoes": [
              "Plásticos novos que se dissolvem completamente na água.",
              "Tipos de bioplástico criados em laboratório.",
              "Plásticos usados somente em equipamentos eletrônicos pequenos.",
              "Fragmentos de plástico menores que 5 mm, vindos da quebra de objetos maiores ou liberados, por exemplo, por roupas sintéticas e alguns cosméticos."
            ],
            "correta": 3,
            "explicacao": "Lavar roupas de poliéster ou nylon libera microfibras que passam pelo esgoto e chegam a rios e mares. Os microplásticos vêm tanto da quebra de lixo quanto de produtos do dia a dia."
          },
          {
            "pergunta": "Por que os microplásticos preocupam cientistas e profissionais de saúde?",
            "opcoes": [
              "Porque entram na cadeia alimentar e já foram encontrados em animais, na água e até no corpo humano.",
              "Porque são biodegradáveis e viram alimento saudável para os peixes.",
              "Porque são grandes demais e entopem os rios.",
              "Porque só afetam objetos e não causam nenhuma preocupação para os seres vivos."
            ],
            "correta": 0,
            "explicacao": "Estudos já detectaram microplásticos no sangue humano. Os efeitos completos na saúde ainda estão sendo pesquisados, e é por isso que o melhor caminho é evitar que cheguem ao ambiente."
          }
        ]
      },
      {
        "id": "1.4",
        "titulo": "O Pacto com a Natureza",
        "narrativa": "A árvore ainda respira, mas o alerta continua vermelho. Você descobre que reciclar sozinho não dá conta do problema: a maior parte do plástico produzido nunca volta a ser matéria-prima. É hora de selar um pacto com a natureza: entender o problema para poder agir.",
        "perguntas": [
          {
            "pergunta": "Segundo a OCDE, qual é, aproximadamente, a parcela do lixo plástico do mundo que de fato é reciclada?",
            "opcoes": [
              "Cerca de 90%.",
              "Cerca de 9%.",
              "Cerca de 50%.",
              "Praticamente 100%."
            ],
            "correta": 1,
            "explicacao": "Só cerca de 9% do lixo plástico global é reciclado. O resto vai para aterros, é incinerado ou escapa para o ambiente. Reciclar é importante, mas não resolve sozinho."
          },
          {
            "pergunta": "Se a reciclagem não dá conta de tudo, qual é a atitude mais eficaz diante do plástico descartável?",
            "opcoes": [
              "Evitar e reduzir o consumo do que não é necessário.",
              "Comprar mais, já que uma parte será reciclada.",
              "Queimar o plástico para ele desaparecer.",
              "Enterrar o plástico no quintal."
            ],
            "correta": 0,
            "explicacao": "O melhor resíduo é aquele que nunca foi gerado. Queimar plástico, além de não resolver, libera gases tóxicos que fazem mal à saúde e ao ar."
          }
        ]
      }
    ],
    "feedback": "O pacto foi feito! Você enxergou o tamanho do problema e as primeiras respostas deram forças para a pequena árvore resistir. O alerta ainda está vermelho, mas agora existe um caminho.",
    "rotulo": "Introdução",
    "arvore": "Árvore quase sem vida",
    "cor": "vermelho"
  },
  {
    "id": 2,
    "nome": "O Início",
    "subtitulo": "Uma escolha aparentemente pequena",
    "fases": [
      {
        "id": "2.1",
        "titulo": "A Sacola Extra",
        "narrativa": "Você começa a caminhar e encontra uma cena do dia a dia urbano: uma pessoa sai de uma loja e recebe uma sacola plástica descartável para levar só uma caixinha de chicletes. Parece uma escolha inofensiva...",
        "perguntas": [
          {
            "pergunta": "Você comprou apenas uma caixinha de chicletes e o caixa oferece uma sacola. Qual é a atitude mais consciente?",
            "opcoes": [
              "Aceitar, porque a sacola é de graça e não tem impacto nenhum.",
              "Recusar e levar o item na mão, no bolso ou em uma bolsa ou ecobag que você já tenha.",
              "Aceitar duas sacolas para a caixinha não cair.",
              "Aceitar a sacola e jogá-la na calçada depois."
            ],
            "correta": 1,
            "explicacao": "Recusar o que você não precisa é a forma mais simples de evitar lixo. Uma ecobag guardada na mochila substitui centenas de sacolas ao longo da vida."
          },
          {
            "pergunta": "Por que \"recusar\" é considerado o primeiro passo do consumo consciente?",
            "opcoes": [
              "Porque sacolas plásticas são proibidas em todo o mundo.",
              "Porque faz o comércio ter prejuízo e o preço dos produtos cair.",
              "Porque o resíduo mais fácil de tratar é aquele que nunca foi gerado.",
              "Porque qualquer sacola de papel é sempre melhor para o ambiente."
            ],
            "correta": 2,
            "explicacao": "Recusar evita gastar recursos para fabricar, transportar e descartar algo que seria usado por minutos. Trocar por papel nem sempre ajuda: o que reduz o impacto é usar menos e reutilizar mais."
          }
        ]
      },
      {
        "id": "2.2",
        "titulo": "O Efeito Multiplicador",
        "narrativa": "Uma única sacolinha ou um copinho parecem não fazer diferença no planeta, certo? Mas o perigo está na matemática escondida: bilhões de pessoas repetindo a mesma escolha todos os dias.",
        "perguntas": [
          {
            "pergunta": "Um canudo usado por 5 minutos parece insignificante. Por que ele importa?",
            "opcoes": [
              "Porque ele é feito de um material raro e caro.",
              "Porque multiplicado por bilhões de pessoas, todos os dias, vira milhões de toneladas de resíduos.",
              "Porque ele não importa: o problema vem só das grandes indústrias.",
              "Porque canudos plásticos são o único tipo de lixo que chega ao mar."
            ],
            "correta": 1,
            "explicacao": "Pequenos hábitos viram grandes números quando se repetem em massa. É por isso que as ilhas de lixo nos oceanos e o acúmulo nos aterros crescem tão rápido."
          },
          {
            "pergunta": "Qual frase descreve melhor o poder das escolhas do consumidor?",
            "opcoes": [
              "\"Minha escolha não importa, sou só uma pessoa.\"",
              "\"Basta eu me preocupar com o lixo nos fins de semana.\"",
              "\"Só governos podem mudar alguma coisa.\"",
              "\"As escolhas de muita gente, somadas, mudam o que o mercado oferece e o que sobra no ambiente.\""
            ],
            "correta": 3,
            "explicacao": "Quando muitas pessoas deixam de comprar o que é descartável, as empresas passam a oferecer alternativas. Consumir é também uma forma de votar no tipo de mundo que queremos."
          }
        ]
      },
      {
        "id": "2.3",
        "titulo": "De Onde Ele Vem?",
        "narrativa": "Para combater a poluição desta área, é preciso conhecer a origem do inimigo. O plástico convencional espalhado pelo chão não nasce na natureza: ele vem de um recurso subterrâneo limitado e muito poluente.",
        "perguntas": [
          {
            "pergunta": "Mais de 99% do plástico convencional é produzido a partir de quê?",
            "opcoes": [
              "Combustíveis fósseis, como petróleo e gás natural.",
              "Seiva de árvores da Amazônia.",
              "Areia e água do mar.",
              "Restos de alimentos e plantas."
            ],
            "correta": 0,
            "explicacao": "O plástico comum é um derivado do petróleo e do gás natural, recursos que levaram milhões de anos para se formar e não se renovam na escala em que os usamos."
          },
          {
            "pergunta": "Qual é o problema de usar um recurso fóssil para fazer produtos que usamos por poucos minutos?",
            "opcoes": [
              "O petróleo se renova tão rápido que acaba sobrando demais.",
              "Gasta um recurso não renovável e gera emissões de gases de efeito estufa na produção e no descarte.",
              "O plástico de petróleo é macio demais e quebra antes de ser usado.",
              "Não há problema, desde que a embalagem seja colorida."
            ],
            "correta": 1,
            "explicacao": "A produção e a queima de plásticos respondem por cerca de 3% das emissões globais de gases de efeito estufa. Usar menos plástico descartável também ajuda o clima."
          }
        ]
      },
      {
        "id": "2.4",
        "titulo": "A Virada de Chave",
        "narrativa": "Olhe ao redor! Suas escolhas começaram a surtir efeito. Um raio de sol atravessou a névoa de poluição e tocou o solo desta área. O segredo da mudança foi revelado: não é uma solução mágica, é uma sequência de boas decisões.",
        "perguntas": [
          {
            "pergunta": "Na ordem de prioridades da Política Nacional de Resíduos Sólidos, o que vem primeiro?",
            "opcoes": [
              "Reciclar tudo o que for possível.",
              "Enterrar o lixo em aterros.",
              "Não gerar e reduzir os resíduos.",
              "Queimar o lixo para gerar energia."
            ],
            "correta": 2,
            "explicacao": "A lei brasileira (Lei 12.305/2010) estabelece a ordem: não geração, redução, reutilização, reciclagem, tratamento e, por último, disposição final em aterro."
          },
          {
            "pergunta": "Para a coleta seletiva e a reciclagem funcionarem melhor, qual atitude do cidadão mais ajuda?",
            "opcoes": [
              "Misturar tudo em um saco só e deixar a usina separar.",
              "Separar o lixo seco do orgânico e descartar as embalagens limpas, sem restos de comida.",
              "Amassar o lixo orgânico junto com as embalagens.",
              "Deixar as embalagens bem sujas para facilitar a separação."
            ],
            "correta": 1,
            "explicacao": "Restos de comida contaminam o material reciclável e podem fazer um lote inteiro ser descartado. Basta um enxágue rápido e separar o lixo seco do molhado."
          }
        ]
      }
    ],
    "feedback": "Zona limpa! Você aprendeu a recusar, a reduzir e a descartar melhor. O solo desta área voltou a respirar e a grama começou a brotar.",
    "rotulo": "O início",
    "arvore": "Árvore em recuperação",
    "cor": "laranja"
  },
  {
    "id": 3,
    "nome": "Bioplásticos",
    "subtitulo": "Uma nova possibilidade",
    "fases": [
      {
        "id": "3.1",
        "titulo": "O Laboratório Perdido",
        "narrativa": "Você caminha mais a fundo na floresta e encontra uma estrutura de pesquisa abandonada. Dentro dela, as telas se acendem com uma mensagem gravada por um cientista: \"E se pudéssemos criar materiais a partir de fontes renováveis, que não dependam do petróleo?\"",
        "perguntas": [
          {
            "pergunta": "O que significa o termo \"bioplástico\"?",
            "opcoes": [
              "Um plástico feito de fonte renovável, um plástico biodegradável, ou os dois. São características independentes.",
              "Qualquer plástico que tenha uma folha verde desenhada na embalagem.",
              "Um plástico que desaparece em poucos dias em qualquer lugar.",
              "Um plástico que só pode ser usado para fazer sacolas."
            ],
            "correta": 0,
            "explicacao": "\"Bio\" pode se referir à origem (matéria-prima vegetal, renovável) ou ao fim de vida (biodegradável). Um plástico pode ter uma característica sem ter a outra, e é por isso que vale ler com atenção."
          },
          {
            "pergunta": "Por que a ciência busca alternativas ao plástico feito de petróleo?",
            "opcoes": [
              "Porque o plástico comum saiu de moda.",
              "Porque bioplásticos são sempre mais baratos de produzir.",
              "Para reduzir a dependência de combustíveis fósseis e o impacto do descarte.",
              "Para criar embalagens que durem ainda mais tempo na natureza."
            ],
            "correta": 2,
            "explicacao": "Alternativas bem escolhidas podem reduzir o uso de petróleo, as emissões e o tempo que o material permanece no ambiente. Por enquanto, os bioplásticos ainda são mais caros e produzidos em menor escala."
          }
        ]
      },
      {
        "id": "3.2",
        "titulo": "Fontes da Natureza",
        "narrativa": "Vasculhando anotações e tubos de ensaio, você descobre algo fascinante: cientistas aprenderam a extrair compostos de vegetais da agricultura, e até a usar microrganismos, para criar plásticos de origem renovável.",
        "perguntas": [
          {
            "pergunta": "Quais matérias-primas renováveis podem ser usadas para fazer bioplásticos?",
            "opcoes": [
              "Areia, rochas e água salgada.",
              "Óleo de motor usado e carvão mineral.",
              "Alumínio reciclado e ferro.",
              "Cana-de-açúcar, milho, mandioca, algas e resíduos agrícolas."
            ],
            "correta": 3,
            "explicacao": "Plásticos como o PLA (feito de amido de milho ou cana) e o PHA (produzido por microrganismos) usam fontes renováveis. Resíduos como o bagaço de cana também estão sendo estudados, para não competir com a produção de alimentos."
          },
          {
            "pergunta": "O \"plástico verde\" brasileiro, feito a partir do etanol de cana-de-açúcar, é um exemplo de qual caso?",
            "opcoes": [
              "Um plástico biodegradável que some na natureza em poucas semanas.",
              "Um plástico de origem renovável, mas que não é biodegradável: quimicamente é igual ao polietileno comum.",
              "Um plástico feito de petróleo pintado de verde.",
              "Um plástico que só pode ser descartado em compostagem."
            ],
            "correta": 1,
            "explicacao": "O polietileno \"verde\" tem matéria-prima renovável, mas se comporta como o plástico comum: não é biodegradável e, justamente por ser igual, pode ser reciclado junto com ele."
          }
        ]
      },
      {
        "id": "3.3",
        "titulo": "A Ressalva Científica",
        "narrativa": "Atenção! O diário do pesquisador traz um alerta em letras vermelhas: nem tudo o que leva o nome \"bio\", \"eco\" ou \"verde\" se comporta da mesma forma na natureza. Um bom Guardião da Floresta precisa saber ler o rótulo.",
        "perguntas": [
          {
            "pergunta": "Uma embalagem diz \"bio\" em letras grandes. Qual é a pergunta mais útil a se fazer?",
            "opcoes": [
              "\"Tem uma folha desenhada? Então é sustentável.\"",
              "\"É de fonte renovável, biodegradável ou os dois, e em quais condições se degrada, com qual certificação?\"",
              "\"Custa mais caro? Então é melhor para o ambiente.\"",
              "\"Se é bio, posso descartar em qualquer lugar.\""
            ],
            "correta": 1,
            "explicacao": "Alegações vagas como \"eco\" ou \"verde\" podem ser marketing sem base (o chamado greenwashing). Certificações e informações claras de descarte são o que realmente indicam o comportamento do material."
          },
          {
            "pergunta": "O que são os plásticos \"oxibiodegradáveis\" (ou oxodegradáveis)?",
            "opcoes": [
              "Bioplásticos de última geração que viram adubo em poucos dias.",
              "Plásticos feitos apenas de oxigênio e água.",
              "Plásticos comuns com aditivos que só aceleram a fragmentação em pedaços menores (microplásticos), e por isso foram proibidos na União Europeia.",
              "Plásticos que se transformam em alimento para animais."
            ],
            "correta": 2,
            "explicacao": "Esses plásticos não se biodegradam de verdade: apenas se quebram em microplásticos mais rápido. A proibição na União Europeia (2019) mostra por que é importante checar o que a embalagem realmente promete."
          }
        ]
      },
      {
        "id": "3.4",
        "titulo": "O Destino Correto",
        "narrativa": "Você reativa a energia do laboratório! As máquinas voltam a funcionar e enviam novas orientações de descarte para as cidades vizinhas. Você aprende que até as melhores soluções dependem de educação e do destino certo.",
        "perguntas": [
          {
            "pergunta": "Um copo de bioplástico compostável (como o PLA) precisa de calor e umidade controlados para se degradar. Onde ele deve ser descartado?",
            "opcoes": [
              "Na rua, porque como é biodegradável some sozinho.",
              "No rio, para servir de alimento para os peixes.",
              "Em compostagem industrial, quando houver na cidade, ou em coleta indicada pelo fabricante.",
              "Misturado ao PET na reciclagem comum."
            ],
            "correta": 2,
            "explicacao": "Fora de condições adequadas, o plástico compostável pode levar muito tempo para se degradar. \"Biodegradável\" não é autorização para jogar no ambiente."
          },
          {
            "pergunta": "Por que um bioplástico compostável, como o PLA, não deve ir para a reciclagem comum dos plásticos?",
            "opcoes": [
              "Porque ele contamina o material reciclado e piora a qualidade do produto final.",
              "Porque ele é tóxico para qualquer máquina de reciclagem.",
              "Porque nenhum plástico pode ser reciclado.",
              "Porque ele precisa ser enterrado em uma calçada de concreto."
            ],
            "correta": 0,
            "explicacao": "Cada tipo de plástico tem seu destino. Já o polietileno verde, por ser quimicamente igual ao comum, pode seguir para a reciclagem normal. Por isso o descarte depende do tipo de material."
          }
        ]
      }
    ],
    "feedback": "Conhecimento ativado! Você entendeu o que os bioplásticos são, o que não são e como descartá-los. O laboratório está funcionando e gerando tecnologia verde para ajudar o bioma.",
    "rotulo": "Bioplásticos",
    "arvore": "Árvore renascendo",
    "cor": "amarelo"
  },
  {
    "id": 4,
    "nome": "Meio Ambiente",
    "subtitulo": "O ecossistema conectado",
    "fases": [
      {
        "id": "4.1",
        "titulo": "Vozes da Floresta (Inspirado no Lorax)",
        "narrativa": "Saindo do laboratório, você percebe pegadas de animais. Conforme avança, nota que o descarte inadequado não feriu apenas as plantas: os habitats mudaram e os bichos sofrem em silêncio. Cuidar do meio ambiente é proteger toda a teia da vida, da qual fazemos parte.",
        "perguntas": [
          {
            "pergunta": "O descarte incorreto de resíduos plásticos pode afetar quem?",
            "opcoes": [
              "Apenas as pessoas que vivem em cidades grandes.",
              "Exclusivamente os peixes de oceanos distantes.",
              "Animais, plantas e pessoas, de forma conectada.",
              "Somente as plantas pequenas da floresta."
            ],
            "correta": 2,
            "explicacao": "O plástico e os microplásticos circulam pelo solo, pela água e pelos alimentos. Quando um elo da cadeia é afetado, os outros sentem, incluindo nós."
          },
          {
            "pergunta": "Em O Lorax, a floresta some porque ninguém pensou nas consequências. Qual atitude leva em conta as consequências de longo prazo?",
            "opcoes": [
              "Escolher pelo preço mais baixo, sem olhar mais nada.",
              "Escolher produtos pensando no ciclo de vida inteiro: de onde vêm, como são usados e para onde vão depois.",
              "Deixar a decisão sempre para outra pessoa.",
              "Só se preocupar com o que acontece dentro de casa."
            ],
            "correta": 1,
            "explicacao": "Pensar no ciclo de vida (origem, uso e destino) ajuda a evitar o que só parece barato ou prático no momento da compra."
          }
        ]
      },
      {
        "id": "4.2",
        "titulo": "Rios de Plástico",
        "narrativa": "Um pequeno riacho corta esta área do mapa, mas suas águas estão cinzentas. Garrafas flutuam na superfície e microplásticos se misturam à areia do fundo. Aves e peixes locais correm perigo real.",
        "perguntas": [
          {
            "pergunta": "O que pode acontecer quando animais encontram plástico em rios e florestas?",
            "opcoes": [
              "Eles usam o plástico como suplemento vitamínico.",
              "Eles aprendem a reciclar o plástico sozinhos.",
              "Eles constroem casas mais seguras com ele.",
              "Eles confundem o plástico com comida, ou ficam presos nele, e podem sofrer engasgos, desnutrição e morte."
            ],
            "correta": 3,
            "explicacao": "Tartarugas podem confundir sacolas com águas-vivas, e aves enchem o estômago de fragmentos sem se alimentar de verdade. Muitos animais também morrem presos em redes e embalagens."
          },
          {
            "pergunta": "Como o plástico jogado na rua chega a rios e oceanos distantes?",
            "opcoes": [
              "Os animais buscam o lixo nas cidades.",
              "A chuva, o vento e as enxurradas levam o lixo por bueiros, córregos e rios até o mar.",
              "O plástico se move sozinho por reações químicas com o sol.",
              "Barcos de pesca levam o lixo das calçadas até os rios."
            ],
            "correta": 1,
            "explicacao": "A maior parte do lixo que chega aos oceanos vem de atividades em terra. O descarte correto na cidade é também uma forma de proteger rios e mares."
          }
        ]
      },
      {
        "id": "4.3",
        "titulo": "Escolhendo o Caminho",
        "narrativa": "A floresta está quase limpa, mas o BioGame coloca você diante de uma encruzilhada. Três caminhos se abrem para o futuro: continuar consumindo sem pensar, trocar o material mas manter o desperdício, ou mudar a forma de consumir. Qual direção você vai escolher?",
        "perguntas": [
          {
            "pergunta": "Qual ordem de prioridade é mais adequada para lidar com o plástico?",
            "opcoes": [
              "Consumir à vontade, porque a tecnologia vai resolver tudo depois.",
              "Reciclar primeiro e só depois pensar em reduzir.",
              "Primeiro repensar e reduzir, depois reutilizar, depois reciclar ou compostar, e usar bioplásticos de forma criteriosa onde fizerem sentido.",
              "Trocar todo plástico por bioplástico e manter os mesmos hábitos."
            ],
            "correta": 2,
            "explicacao": "Evitar o desperdício vem antes de qualquer material. Reutilizar vem depois, e só então reciclar ou compostar. Os bioplásticos ajudam quando bem escolhidos, mas não substituem essas etapas."
          },
          {
            "pergunta": "Por que simplesmente trocar o plástico comum por bioplástico, mantendo o desperdício, não resolve o problema?",
            "opcoes": [
              "Porque bioplásticos são tóxicos para a camada de ozônio.",
              "Porque o volume de descarte e o uso de recursos (terra, água, energia) continuam altos, e a destinação correta continua necessária.",
              "Porque nenhuma fábrica consegue produzir bioplástico.",
              "Porque as pessoas preferem o visual das embalagens de petróleo."
            ],
            "correta": 1,
            "explicacao": "Produzir bioplástico em grande escala exige áreas de cultivo, água e energia, e pode competir com alimentos se mal planejado. Se o desperdício continua, o problema só muda de lugar."
          }
        ]
      },
      {
        "id": "4.4",
        "titulo": "O Renascimento",
        "narrativa": "Impressionante! Olhe para trás e veja a transformação. As árvores cresceram fortes, flores desabrocharam e o canto dos pássaros voltou a ecoar. A floresta não precisava de um super-herói mágico; precisava de pessoas dispostas a fazer escolhas diferentes, e de uma sociedade que as apoiasse.",
        "perguntas": [
          {
            "pergunta": "Qual conjunto de ações resume o que aprendemos na jornada do BioGame?",
            "opcoes": [
              "Comprar, usar, descartar e repetir.",
              "Repensar, recusar, reduzir, reutilizar e reciclar.",
              "Enterrar, queimar, esconder e esquecer.",
              "Esperar, ignorar, adiar e culpar os outros."
            ],
            "correta": 1,
            "explicacao": "Os 5Rs funcionam como um roteiro do dia a dia: repensar se preciso de algo, recusar o desnecessário, reduzir, reutilizar e só então reciclar."
          },
          {
            "pergunta": "Além das escolhas individuais, o que mais é necessário para manter a floresta e o planeta limpos?",
            "opcoes": [
              "Nada: só as pessoas, sozinhas, resolvem tudo.",
              "Só as empresas, enquanto os cidadãos não precisam fazer nada.",
              "Ações coletivas: políticas públicas, empresas responsáveis pelas embalagens que colocam no mercado, coleta seletiva e cobrança por produtos melhores.",
              "Apenas esperar que a natureza se limpe sozinha."
            ],
            "correta": 2,
            "explicacao": "A lei brasileira prevê a responsabilidade compartilhada e a logística reversa: fabricantes, comércio, governo e consumidores têm, cada um, o seu papel. As escolhas individuais são o ponto de partida."
          }
        ]
      }
    ],
    "feedback": "PARABÉNS! Você concluiu a jornada principal do BioGame! A floresta renasceu graças à sabedoria das suas escolhas: do alerta vermelho ao verde, passando por recusar, reduzir, reutilizar e escolher alternativas com consciência.",
    "rotulo": "Meio ambiente",
    "arvore": "Árvore florescendo",
    "cor": "verdeCard"
  }
]

export const BONUS = {
  "nome": "O Guardião da Semente",
  "narrativa": "Um brilho místico surge nas raízes da árvore mestre. O espírito guardião da floresta reconheceu seu conhecimento e depositou em suas mãos a última Semente de Ouro. Para plantá-la e transformar sua árvore em uma estrutura dourada eterna, você deve responder ao desafio final com atenção.",
  "perguntas": [
    {
      "pergunta": "Qual afirmação resume melhor o papel do bioplástico na solução do problema do plástico?",
      "opcoes": [
        "É uma solução mágica: com ele, podemos consumir e descartar sem nos preocupar.",
        "É uma ferramenta útil quando bem escolhida e descartada do jeito certo, mas funciona junto com redução do consumo, reutilização e destinação correta.",
        "É sempre pior que o plástico de petróleo e não deve ser estudado.",
        "É um material que não precisa de nenhum cuidado no descarte."
      ],
      "correta": 1,
      "explicacao": "Bioplásticos podem reduzir o uso de petróleo e o impacto do descarte, mas a solução completa combina menos consumo, mais reutilização, descarte correto e políticas públicas."
    },
    {
      "pergunta": "O que a \"Árvore Dourada\" do BioGame simboliza na vida real?",
      "opcoes": [
        "Que você pode consumir plástico à vontade, sem culpa.",
        "Que a ciência descobriu como transformar lixo em ouro.",
        "Que você adquiriu consciência crítica para ser um agente de mudança, dentro e fora do jogo.",
        "Que o jogo acabou e as atitudes fora da tela não fazem diferença."
      ],
      "correta": 2,
      "explicacao": "O jogo termina, mas o aprendizado continua: cada escolha consciente, repetida por muita gente, faz a floresta real renascer."
    }
  ],
  "efeito": "Ao validar a última resposta correta, a semente de ouro é plantada. Raios dourados cobrem a tela, as folhas da árvore principal ganham uma textura dourada brilhante e o título de \"Guardião Lendário da Biosfera\" é exibido para o jogador!"
}

export const TOTAL_NIVEIS = NIVEIS.length
export const FASES_POR_NIVEL = 4

export function getNivel(n) {
  return NIVEIS.find((x) => x.id === n)
}

export function getFase(n, f) {
  return getNivel(n)?.fases[f - 1]
}
