*** Settings ***
Documentation       As ferramentas de áudio precisam ao menos montar, responder
...                 ao clique e não derrubar a página.
Resource            resources/comum.resource
Test Teardown       Close Browser    ALL

*** Test Cases ***
Índice Lista As Quatro Ferramentas
    Abrir Site No Celular    /ferramentas/
    Get Element Count    a[href^="/ferramentas/"]    >=    4

Metrônomo Inicia E Para
    Abrir Site No Celular    /ferramentas/metronomo/
    Get Text    body    contains    batidas por minuto
    Click    text=▶ Iniciar
    Get Text    button:has-text("Parar")    contains    Parar
    Click    text=■ Parar
    Get Text    button:has-text("Iniciar")    contains    Iniciar

Tocador De Naipes Mostra As Três Vozes Com As Notas Certas
    Abrir Site No Celular    /ferramentas/tocador-de-naipes/
    Get Text    body    contains    Soprano
    Get Text    body    contains    Contralto
    Get Text    body    contains    Tenor
    # Dó maior: tenor Dó3, contralto Sol3, soprano Mi4
    Get Text    body    contains    Dó3
    Get Text    body    contains    Sol3
    Get Text    body    contains    Mi4

Acorde Menor Mostra A Terça Menor
    [Documentation]    Regressão do erro musical do protótipo.
    Abrir Site No Celular    /ferramentas/tocador-de-naipes/
    Click    text=Ré menor
    Get Text    body    contains    Fá4
    Get Text    body    not contains    Fá#4

Nota-Guia Troca A Nota Escolhida
    Abrir Site No Celular    /ferramentas/nota-guia/
    Click    button:has-text("Sol3")
    Get Text    body    contains    196.0 Hz

Treino De Ouvido Começa Uma Rodada
    Abrir Site No Celular    /ferramentas/treino-de-ouvido/
    Click    text=▶ Começar
    Get Text    body    contains    acorde
