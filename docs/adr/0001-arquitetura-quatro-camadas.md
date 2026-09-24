# ADR 0001: Decisão de Arquitetura 4 camadas

## Status

Aceito

## Contexto

Separação das responsabilidades.

- Desacopla a interface da lógica de negócio fornecendo uma camada abstrata para
  operações de dados. Facilitando os testes unitários e ganhando flexibilidade
  pois permite a troca de fonte da dados por outra sem afetar o restante da
  aplicação.
- Resolve os problemas de baixa testabilidade, alto acoplamento e dificuldade de
  manutenção.
- Separação das camadas domain/hooks/components promovendo isolamento e o
  reaproveitamento entre contextos diferentes.

## Decisão

Decidi adotar uma arquitetura de software dividida estritamente em 4 camadas de
responsabilidade única:

- **components** (Camada de View) - Componentes visuais. Sua única função é
  renderizar a interface gráfica e os estados fornecidos.
- **hooks** (Camada de Orquestração) - Responsável por gerenciar o ciclo de vida
  e estado do componente, invocar as regras de negócio e coordenar as chamadas
  de dados, servindo de ponte para os gatilhos de re-render da tela.
- **domain** (Camada de Negócio) - Onde ficam as regras de negócio.
- **repositories** (Camada de Dados) - Encapsula a lógica de acesso a dados.

## Alternativas consideradas

Inicialmente cogitei a arquitetura MVC, porém no React não possuímos equivalente
direto para o Controller. E hooks de forma solta prendem a lógica ao ciclo de
vida do React.

## Consequências

**Positivas**

- Separação de conceitos clara: facilidade na leitura do código.
- Alta testabilidade: a camada domain pode ser coberta por testes unitários
  rápidos sem necessidade de simular o ecossistema do React ou DOM.
- Independência de tecnologia: ganho na troca de fonte de dados sem afetar toda
  a aplicação.
- Ganho na solução do problema do acoplamento da regra de negócio e das chamadas
  de acesso a dados diretamente no JSX.

**Negativas (Trade-offs / Riscos)**

- Aumento da verbosidade no código para operações simples. Introduz uma
  verbosidade inicial que reduz a velocidade de entrega em trechos do sistema de
  baixa complexidade.
- Aumento da curva de aprendizado.
- Dependência de disciplina até virar hábito: dependência estrita da disciplina
  contínua do time, ou no meu caso, de mim mesma, na revisão do código, para não
  correr o risco de regras de negócio ou de acesso ao banco vazarem para a
  camada visual em nome de acelerar a entrega.
