*** Settings ***
Documentation       Mídia do hero: vídeo de fundo e retrato da Tinna.
...                 O Chromium do Playwright não traz codec H.264, então aqui
...                 se verifica o elemento e os atributos, não a reprodução.
Resource            resources/comum.resource
Test Teardown       Close Browser    ALL

*** Test Cases ***
Vídeo De Fundo Não Atrapalha Quem Está Lendo
    Abrir Site No Desktop
    Sleep    1s
    ${video} =    Evaluate JavaScript    ${None}
    ...    () => { const v = document.querySelector('video'); return JSON.stringify({ existe: !!v, mudo: v?.muted, semControles: !v?.controls, emLoop: v?.loop, naLinha: v?.playsInline, temPoster: !!v?.poster }); }
    Should Contain    ${video}    "existe":true
    Should Contain    ${video}    "mudo":true
    Should Contain    ${video}    "semControles":true
    Should Contain    ${video}    "emLoop":true
    Should Contain    ${video}    "naLinha":true
    Should Contain    ${video}    "temPoster":true

Retrato Da Tinna Fica No Bloco De Quem Ensina, Não No Hero
    [Documentation]    A foto é da seção "quem ensina" e carrega em lazy: no
    ...    hero ela competiria com o vídeo e com o LCP.
    Abrir Site No Celular
    ${onde} =    Evaluate JavaScript    ${None}
    ...    () => { const i = document.querySelector('img[alt*="Tinna"]'); const hero = document.querySelector('main section'); return JSON.stringify({ noHero: !!hero.querySelector('img[alt*="Tinna"]'), lazy: i.loading, secao: i.closest('section')?.querySelector('h2')?.textContent ?? '' }); }
    Should Contain    ${onde}    "noHero":false
    Should Contain    ${onde}    "lazy":"lazy"
    Should Contain    ${onde}    Tinna Silva

    ${img} =    Evaluate JavaScript    ${None}
    ...    () => { const i = document.querySelector('img[alt*="Tinna"]'); i.scrollIntoView({ block: 'center', behavior: 'instant' }); return new Promise(ok => { const pronto = () => ok(JSON.stringify({ carregou: i.complete && i.naturalWidth > 0, alt: i.alt, arquivo: i.currentSrc.split('/').pop(), temDimensoes: !!(i.getAttribute('width') && i.getAttribute('height')) })); i.complete ? pronto() : i.addEventListener('load', pronto, { once: true }); }); }
    Should Contain    ${img}    "carregou":true
    Should Contain    ${img}    "temDimensoes":true
    Should Contain    ${img}    tinna-480.webp

Com Movimento Reduzido O Vídeo Não Carrega
    New Browser    chromium    headless=${True}
    New Context    viewport={'width': 1280, 'height': 800}    reducedMotion=reduce
    New Page    ${BASE_URL}
    Sleep    1s
    Get Element Count    video    ==    0
    Get Element Count    img[src*="hero-poster"]    ==    1
