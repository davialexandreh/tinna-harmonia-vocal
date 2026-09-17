*** Settings ***
Library     Browser    timeout=10s

*** Variables ***
${BASE_URL}         http://localhost:4321
${LARGURA_MOBILE}   390
${ALTURA_MOBILE}    844

*** Keywords ***
Abrir Site No Celular
    [Documentation]    A maior parte do tráfego vem do link da bio, então o
    ...    padrão da suíte é viewport de celular.
    [Arguments]    ${caminho}=/
    New Browser    chromium    headless=${True}
    New Context    viewport={'width': ${LARGURA_MOBILE}, 'height': ${ALTURA_MOBILE}}
    New Page    ${BASE_URL}${caminho}

Abrir Site No Desktop
    [Arguments]    ${caminho}=/
    New Browser    chromium    headless=${True}
    New Context    viewport={'width': 1280, 'height': 900}
    New Page    ${BASE_URL}${caminho}

O Título Deve Conter
    [Arguments]    ${trecho}
    ${titulo} =    Get Title
    Should Contain    ${titulo}    ${trecho}

Todo CTA De WhatsApp Deve Apontar Para wa.me
    ${quantidade} =    Get Element Count    [data-evento="whatsapp"]
    Should Be True    ${quantidade} > 0    nenhum CTA de WhatsApp na página
    FOR    ${indice}    IN RANGE    ${quantidade}
        ${href} =    Get Attribute    (//*[@data-evento="whatsapp"])[${indice + 1}]    href
        Should Start With    ${href}    https://wa.me/
    END
