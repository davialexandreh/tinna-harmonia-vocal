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
    Get Text    body    contains    Pedir um orçamento

Cada Ferramenta Termina Em Um CTA
    FOR    ${slug}    IN
    ...    nota-guia    tocador-de-naipes    metronomo    treino-de-ouvido
        Abrir Site No Celular    /ferramentas/${slug}/
        Todo CTA De WhatsApp Deve Apontar Para wa.me
        Close Browser
    END

Nenhum Número De Telefone Placeholder Vai Ao Ar
    [Documentation]    Trava de segurança: impede subir com o número fictício.
    ...    Deve falhar enquanto o WhatsApp real não for configurado.
    [Tags]    pendente-cliente
    Abrir Site No Celular
    ${href} =    Get Attribute    (//*[@data-evento="whatsapp"])[1]    href
    Should Not Contain    ${href}    5511999999999
