*** Settings ***
Documentation       O site tem um único caminho de conversão: o WhatsApp.
...                 Se estes testes quebrarem, o site parou de vender.
Resource            resources/comum.resource
Test Teardown       Close Browser    ALL

*** Test Cases ***
Home Tem CTA De WhatsApp Em Todos Os Blocos
    Abrir Site No Celular
    ${quantidade} =    Get Element Count    [data-evento="whatsapp"]
    Should Be True    ${quantidade} >= 4
    ...    a Home precisa repetir o CTA ao longo da página, achei só ${quantidade}
    Todo CTA De WhatsApp Deve Apontar Para wa.me

CTA Carrega A Mensagem Já Escrita
    Abrir Site No Celular
    ${href} =    Get Attribute    (//*[@data-evento="whatsapp"])[1]    href
    Should Contain    ${href}    ?text=
    Should Contain    ${href}    workshop

Página De Workshops Pede Orçamento
    Abrir Site No Celular    /workshops/
    Todo CTA De WhatsApp Deve Apontar Para wa.me
    Get Text    body    contains    Pedir orçamento

Cada Ferramenta Termina Em Um CTA
    FOR    ${slug}    IN
    ...    nota-guia    tocador-de-naipes    metronomo    treino-de-ouvido
        Abrir Site No Celular    /ferramentas/${slug}/
        Todo CTA De WhatsApp Deve Apontar Para wa.me
        Close Browser
    END

Número De WhatsApp É Real, Não Placeholder
    [Documentation]    Guarda o que importa: DDI do Brasil, tamanho de celular
    ...    e nenhum padrão de número inventado (dígito repetido ou sequência).
    Abrir Site No Celular
    ${veredito} =    Evaluate JavaScript    ${None}
    ...    () => { const href = document.querySelector('[data-evento="whatsapp"]').href; const numero = href.split('wa.me/')[1].split('?')[0]; const digitos = [...numero].every(c => c >= '0' && c <= '9'); let maiorRepeticao = 1, atual = 1; for (let i = 1; i < numero.length; i++) { atual = numero[i] === numero[i - 1] ? atual + 1 : 1; maiorRepeticao = Math.max(maiorRepeticao, atual); } return JSON.stringify({ numero, formatoValido: digitos && numero.startsWith('55') && numero.length >= 12 && numero.length <= 13, repetido: maiorRepeticao >= 7, sequencial: numero.includes('1234567') }); }
    Should Contain    ${veredito}    "formatoValido":true
    Should Contain    ${veredito}    "repetido":false
    Should Contain    ${veredito}    "sequencial":false
