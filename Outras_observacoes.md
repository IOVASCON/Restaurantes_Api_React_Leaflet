# Passos Iniciais da Criação do Projeto

1. Criar o Projeto do Zero:

    No terminal, navegue até o diretório onde você quer criar o projeto:

    Exemplo: cd L:\\VSCode\\REACT

2. Execute o comando para criar um novo projeto:

    npx create-react-app restaurante_google_map

3. Verificar o Progresso:

    O comando irá baixar as dependências e configurar a estrutura do projeto. Isso pode levar alguns minutos, dependendo da sua conexão com a internet.

4. Configurar Personalizações Manuais:

    - Após o projeto ser criado, você pode adicionar os arquivos e pastas personalizados manualmente:
        - Pastas: Adicione src/components, src/services, etc.
        - Arquivos: Crie .gitignore, .outras_observacoes.md, etc., usando um editor de texto ou comandos do terminal.

5. Iniciar o servidor de desenvolvimento:

    - Execute o comando abaixo para rodar a aplicação React localmente:

    npm start

    - Isso abrirá o navegador padrão com a URL <http://localhost:3000>, onde você poderá visualizar o projeto.

É sempre uma boa prática testar o servidor de desenvolvimento para garantir que a configuração inicial está funcionando corretamente.

Quando você cria um projeto React com o comando npx create-react-app, ele já configura um projeto base funcional, contendo um código inicial de exemplo (como o componente App.js que exibe "Learn React" com um link). Esse teste inicial serve para confirmar que:

1. O ambiente está funcionando corretamente (Node.js, dependências e servidor local).
2. O servidor de desenvolvimento pode ser iniciado e o projeto pode ser acessado no navegador (geralmente em <http://localhost:3000>).

**Por que testar mesmo sem código?**

1. **Evita problemas futuros:**

    - Se algo não funcionar agora, você sabe que o problema está na configuração inicial, e não em alterações feitas depois.
    - Por exemplo, vulnerabilidades ou conflitos de dependências podem impedir o servidor de iniciar, e isso é mais fácil de resolver antes de adicionar código.

2. **Garante que o ambiente está pronto:**

    - Você pode começar a desenvolver sem se preocupar com a configuração do ambiente ou dependências quebradas.

3. **Facilita a depuração:**

    - Se o servidor inicial funcionar, mas depois parar quando você adicionar código, você saberá que o problema está relacionado às suas alterações e não à configuração inicial.

## Passos Seguintes Desenvolvimento Projeto

1. **Limpar a página inicial (opcional):**

    - Remova o conteúdo padrão do React (Learn React) em src/App.js para começar do zero.

2. **Configurar a API do Google Maps:**

    - Crie uma conta na Google Cloud e habilite a API do Google Maps.
    - Gere uma chave de API e configure um arquivo .env no seu projeto para armazená-la:

    REACT_APP_GOOGLE_MAPS_API_KEY=SUA_CHAVE_AQUI

OU
    Use o aplicativo gratis "react leaFlet" para simular a web

    - Lembre-se de adicionar .env ao arquivo .gitignore.

3. **nstalar bibliotecas necessárias:**

    - Para trabalhar com o Google Maps e fazer requisições HTTP, instale os pacotes:

    npm install @react-google-maps/api axios

4. **Criar a estrutura inicial do projeto:**

    - Crie as pastas necessárias para organizar o código, como:

    src/
    ├── components/
    ├── services/
    ├── utils/
    ├── assets/

    Pastas Criadas:

    **assets:**
        Para armazenar imagens, ícones ou outros arquivos estáticos que você usará no projeto.

    **components:**
        Contém componentes reutilizáveis, como o mapa e marcadores.

    **services:**
        Para lidar com APIs externas (como consultas para buscar restaurantes ou outros dados).

    **utils:**
        Funções auxiliares, como cálculo de distância entre dois pontos ou formatação de strings.

    Arquivos Base:

    **App.js:** Componente principal que orquestrará os outros componentes.
    **index.js:** Já está configurado corretamente e não precisará de ajustes no momento.

5. **Testar integração com o Google Maps:**

    - Adicione um componente básico para renderizar o mapa.

## Reajustando os Arquivos Criados Automaticamente

**Arquivos que você pode excluir (não essenciais para começar):**

1. App.test.js:
    - Este arquivo é usado para testes automatizados (Jest). Se você não pretende escrever testes agora, pode excluí-lo.

2. logo.svg:
    - Este é o logotipo do React que aparece na página inicial. Se você vai criar sua própria interface, pode removê-lo.

3. reportWebVitals.js:
    - Este arquivo é usado para medir o desempenho da aplicação. Não é essencial para o funcionamento e pode ser removido se você não vai trabalhar com métricas agora.

4. setupTests.js:
    - Configuração para testes com Jest. Assim como App.test.js, pode ser removido se você não vai usar testes por enquanto.

**Arquivos que você deve manter (essenciais):**

1. App.js:
    - Contém o componente principal do seu projeto. Este é o ponto de entrada principal para a lógica da sua aplicação.

2. App.css:
    - Contém os estilos do componente App.js. Você pode modificar ou substituir este arquivo por seus próprios estilos.

3. index.js:
    - É o ponto de entrada principal da aplicação React. Não remova este arquivo, pois ele é necessário para inicializar a aplicação.

4. index.css:
    - Contém estilos globais para a aplicação. Você pode modificar este arquivo para os estilos gerais ou criar um novo.

## Serviço alternativo ao Google Maps

Esse desafio/estudo usará os serviços de mapas que podem ser integradas ao React do Leaflet.js

1. **Leaflet.js (Open Source):**

    - É uma biblioteca gratuita que permite integrar mapas interativos no seu projeto.
    - Você pode usar o serviço de mapas do OpenStreetMap, que é gratuito.
    - Instale o Leaflet no seu projeto:

2. **Instalar as Dependências**

    - No terminal, dentro do diretório do seu projeto React, execute os seguintes comandos

    npm install react-leaflet leaflet

    - Isso instalará a biblioteca React-Leaflet (para integração com React) e a própria biblioteca do Leaflet.

## Plano de Desenvolvimento

1. Componentes Iniciais

    Criação de dois componentes básicos:

    1. **Mapa (components/Map.js):**
        - Renderizará o mapa do Leaflet com marcadores.

    2. **Cabeçalho ou Barra de Pesquisa (components/SearchBar.js):**
        - Terá um campo de texto para buscar restaurantes.

2. **Configurar APIs Externas**

    Depois, configuraremos o acesso a APIs (usaremos dados simulados inicialmente, mas deixaremos espaço para integrações futuras).

3. **Fluxo do Projeto**

    - Inicialmente, o mapa exibirá apenas marcadores estáticos.
    - Depois, integraremos a funcionalidade de buscar restaurantes e adicionar marcadores dinâmicos.

## Implementaçções

1. Adicionando Marcadores Dinâmicos:

    - Quando o usuário pesquisar algo na barra de pesquisa, exiba novos marcadores no mapa.
        Exemplo:
        Você pode configurar dados de restaurantes fictícios para cada busca.

2. Integrando API de Busca de Restaurantes:

    - Você pode simular uma API usando um arquivo JSON local no início, ou integrar com uma API real futuramente.

    O que Foi Alterado

    1. **Estado** filteredRestaurants:
        Substitui o estado searchResult por filteredRestaurants para armazenar a lista de restaurantes exibidos no mapa.

    2. **Lógica de Filtro na Função handleSearch:**
        Adicionada lógica para filtrar restaurantes fictícios com base na pesquisa.
        Se o campo de busca estiver vazio, todos os restaurantes são exibidos.

    3. **Renderização Dinâmica de Marcadores:**
        Substituído o marcador fixo por uma iteração sobre os restaurantes filtrados (filteredRestaurants).

    4. **Teste a Função de Busca:**

    No navegador, digite "Restaurante A" na barra de pesquisa.
    Apenas o marcador correspondente ao restaurante deve ser exibido.

3. Adicionando mais detalhes nos popups:

    Exibir imagens ou links para os restaurantes no popup.

    O que Foi Adicionado

    1. **Imagem no Popup:**
        A propriedade image exibe uma imagem com tamanho de 100x100 pixels.
        Estilo adicional para bordas arredondadas.

    2. **Link no Popup:**
        A propriedade website cria um link clicável para o site do restaurante.
        O atributo target="_blank" abre o link em uma nova aba.

## SUGESTÕES FUTURAS

Se quiser melhorar ainda mais a aparência ou adicionar AS SEGUINTES funcionalidades:

1. **Estilizar o Popup com Mais Detalhes:**
    - Adicionar bordas, sombras ou um layout mais sofisticado para o conteúdo do popup.

2. **Adicionar Funcionalidades no Link:**
    - Faça o link abrir um modal ou redirecione para outra página dentro do seu site.

3. **Expandir os Dados do Restaurante:**
    - Adicione novas propriedades ao JSON, como horário de funcionamento, avaliação ou menu.

4. **Testar com Imagens Reais:**
    - Substitua os links <https://via.placeholder.com/150> por URLs de imagens reais ou locais.
