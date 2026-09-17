*** Settings ***
Documentation       Consentimento: nada de medição antes do aceite.
Resource            resources/comum.resource
Test Teardown       Close Browser    ALL

*** Test Cases ***
Banner Aparece Na Primeira Visita
    Abrir Site No Celular
    Get Text    [aria-label="Aviso de cookies"]    contains    cookies de medição

Aceitar Esconde O Banner E Persiste Na Próxima Página
    Abrir Site No Celular
    Click    button:has-text("Aceitar")
    Get Element Count    [aria-label="Aviso de cookies"]    ==    0
    Go To    ${BASE_URL}/workshops/
    Get Element Count    [aria-label="Aviso de cookies"]    ==    0

Recusar Também Encerra O Aviso
    Abrir Site No Celular
    Click    button:has-text("Recusar")
    Get Element Count    [aria-label="Aviso de cookies"]    ==    0

Sem Aceite Nenhum Script De Terceiro É Carregado
    Abrir Site No Celular
    ${google} =    Get Element Count    script[src*="googletagmanager"]
    ${meta} =    Get Element Count    script[src*="facebook"]
    Should Be Equal As Integers    ${google}    0
    Should Be Equal As Integers    ${meta}    0

Política De Privacidade Descreve A Medição
    Abrir Site No Celular    /privacidade/
    Get Text    body    contains    Google Analytics 4
    Get Text    body    contains    Pixel da Meta
