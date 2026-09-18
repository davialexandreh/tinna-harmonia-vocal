*** Settings ***
Documentation       Revelações da Home: as seções ao rolar e a resposta do
...                 FAQ ao abrir. O risco das duas é esconder conteúdo de quem
...                 não roda o script ou pediu menos movimento, e é isso que
...                 estes testes guardam.
Resource            resources/comum.resource
Test Teardown       Close Browser    ALL

*** Test Cases ***
Secoes Abaixo Da Dobra Comecam Escondidas E Aparecem Ao Rolar
    Abrir Site No Celular
    Sleep    0.5s
    ${inicio} =    Evaluate JavaScript    ${None}    () => { const s = [...document.querySelectorAll('main > section')]; return JSON.stringify({ escondidas: s.filter((x) => parseFloat(getComputedStyle(x).opacity) < 0.5).length, visiveisNoTopo: s.filter((x) => x.getBoundingClientRect().top < window.innerHeight && parseFloat(getComputedStyle(x).opacity) > 0.9).length }); }
    Should Not Contain    ${inicio}    "escondidas":0
    # Seção que já estava na tela nunca é escondida: nada pisca.
    Should Not Contain    ${inicio}    "visiveisNoTopo":0

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
    ${r} =    Evaluate JavaScript    ${None}    () => { const s = [...document.querySelectorAll('main > section')]; return JSON.stringify({ escondidas: s.filter((x) => parseFloat(getComputedStyle(x).opacity) < 0.5).length }); }
    Should Contain    ${r}    "escondidas":0

Resposta Do FAQ Abre Animando E Fecha Mais Rapido
    [Documentation]    Sem ::details-content a resposta aparecia de uma vez.
    ...    Onde o navegador não suporta, continua abrindo na hora, e é por isso
    ...    que o teste só cobra animação quando há suporte.
    Abrir Site No Desktop
    ${suporta} =    Evaluate JavaScript    ${None}
    ...    () => CSS.supports('selector(::details-content)')
    Pass Execution If    not ${suporta}    Navegador sem ::details-content: nada a animar.

    Evaluate JavaScript    ${None}
    ...    () => document.querySelector('#faq').scrollIntoView({ block: 'start', behavior: 'instant' })
    Sleep    0.4s
    ${fechado} =    Evaluate JavaScript    ${None}
    ...    () => Math.round(document.querySelector('#faq details:nth-of-type(2)').getBoundingClientRect().height)

    Click    css=#faq details:nth-of-type(2) summary
    ${no_clique} =    Evaluate JavaScript    ${None}
    ...    () => Math.round(document.querySelector('#faq details:nth-of-type(2)').getBoundingClientRect().height)
    # No instante do clique o details já está aberto, mas a altura ainda é a
    # de antes: é isso que prova que existe transição em vez de salto.
    Should Be Equal As Integers    ${no_clique}    ${fechado}

    Sleep    0.6s
    ${aberto} =    Evaluate JavaScript    ${None}
    ...    () => Math.round(document.querySelector('#faq details:nth-of-type(2)').getBoundingClientRect().height)
    Should Be True    ${aberto} > ${fechado} + 20

Movimento Reduzido Abre A Resposta Na Hora
    New Browser    chromium    headless=${True}
    New Context    viewport={'width': 900, 'height': 900}    reducedMotion=reduce
    New Page    ${BASE_URL}
    Evaluate JavaScript    ${None}
    ...    () => document.querySelector('#faq').scrollIntoView({ block: 'start', behavior: 'instant' })
    Sleep    0.4s
    ${fechado} =    Evaluate JavaScript    ${None}
    ...    () => Math.round(document.querySelector('#faq details:nth-of-type(2)').getBoundingClientRect().height)
    Click    css=#faq details:nth-of-type(2) summary
    ${imediato} =    Evaluate JavaScript    ${None}
    ...    () => Math.round(document.querySelector('#faq details:nth-of-type(2)').getBoundingClientRect().height)
    Should Be True    ${imediato} > ${fechado} + 20

Revelacao Funciona Tambem Ao Chegar Por Navegacao Interna
    [Documentation]    O script inline só rodava na carga do documento: quem
    ...    chegasse à Home por link interno não via revelação nenhuma. Agora
    ...    quem esconde é o componente, que monta nos dois caminhos.
    Abrir Site No Celular    /workshops/
    Click    css=header >> text=Tinna Silva
    Get Url    ==    ${BASE_URL}/
    Sleep    0.6s
    ${estado} =    Evaluate JavaScript    ${None}
    ...    () => JSON.stringify({ escondidas: [...document.querySelectorAll('main > section')].filter((x) => parseFloat(getComputedStyle(x).opacity) < 0.5).length })
    Should Not Contain    ${estado}    "escondidas":0
