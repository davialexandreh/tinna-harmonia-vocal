*** Settings ***
Documentation       Revelação das seções da Home. O risco desta técnica é
...                 esconder conteúdo de quem não roda o script, então é isso
...                 que estes testes guardam.
Resource            resources/comum.resource
Test Teardown       Close Browser    ALL

*** Test Cases ***
Secoes Abaixo Da Dobra Comecam Escondidas E Aparecem Ao Rolar
    Abrir Site No Celular
    Sleep    0.5s
    ${inicio} =    Evaluate JavaScript    ${None}    () => { const s = [...document.querySelectorAll('main > section')]; return JSON.stringify({ classe: document.documentElement.classList.contains('revelacao-ativa'), escondidas: s.filter((x) => parseFloat(getComputedStyle(x).opacity) < 0.5).length, total: s.length }); }
    Should Contain    ${inicio}    "classe":true
    Should Not Contain    ${inicio}    "escondidas":0

    Evaluate JavaScript    ${None}    () => window.scrollTo({ top: 1500, behavior: 'instant' })
    Sleep    1s
    ${depois} =    Evaluate JavaScript    ${None}
    ...    () => JSON.stringify({ visiveis: [...document.querySelectorAll('main > section')].filter((x) => parseFloat(getComputedStyle(x).opacity) > 0.9).length })
    Should Not Contain    ${depois}    "visiveis":1

Sem JavaScript A Pagina Aparece Inteira
    [Documentation]    A classe que esconde só entra por script. Sem ele, nada
    ...    pode ficar invisível.
    New Browser    chromium    headless=${True}
    New Context    viewport={'width': 390, 'height': 844}    javaScriptEnabled=${False}
    New Page    ${BASE_URL}
    ${secoes} =    Get Element Count    main > section
    Should Be True    ${secoes} >= 8
    Get Element States    main > section >> nth=5    contains    visible

Movimento Reduzido Nao Esconde Nada
    New Browser    chromium    headless=${True}
    New Context    viewport={'width': 390, 'height': 844}    reducedMotion=reduce
    New Page    ${BASE_URL}
    Sleep    0.8s
    ${r} =    Evaluate JavaScript    ${None}    () => { const s = [...document.querySelectorAll('main > section')]; return JSON.stringify({ classe: document.documentElement.classList.contains('revelacao-ativa'), escondidas: s.filter((x) => parseFloat(getComputedStyle(x).opacity) < 0.5).length, total: s.length }); }
    Should Contain    ${r}    "escondidas":0
