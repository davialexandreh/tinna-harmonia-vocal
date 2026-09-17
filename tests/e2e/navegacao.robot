*** Settings ***
Documentation       Fluxos de navegação do site, no viewport de celular.
Resource            resources/comum.resource
Test Teardown       Close Browser    ALL

*** Test Cases ***
Home Carrega Com A Promessa Principal
    Abrir Site No Celular
    O Título Deve Conter    Tinna Silva
    Get Text    h1    contains    Cantar em harmonia

Menu Mobile Abre E Leva Para Workshops
    Abrir Site No Celular
    # No celular a navegação de desktop fica escondida.
    Get Element States    nav[aria-label="Navegação principal"]    contains    hidden
    Click    [aria-label="Abrir menu"]
    Click    css=#menu-mobile >> text=Workshops
    Get Url    contains    /workshops/
    Get Text    h1    contains    na sua igreja

Menu Mobile Fecha Com Esc
    Abrir Site No Celular
    Click    [aria-label="Abrir menu"]
    Get Element States    css=#menu-mobile    contains    visible
    Keyboard Key    press    Escape
    Get Element Count    css=#menu-mobile    ==    0

Navegação Do Desktop Alcança Todas As Páginas
    Abrir Site No Desktop
    FOR    ${rotulo}    ${esperado}    IN
    ...    Workshops    /workshops/
    ...    Ferramentas    /ferramentas/
    ...    Sobre    /sobre/
    ...    Contato    /contato/
        Click    nav[aria-label="Navegação principal"] >> text=${rotulo}
        Get Url    contains    ${esperado}
        Go Back
    END

Rodapé Leva Para As Páginas Legais
    Abrir Site No Celular
    Click    footer >> text=Política de privacidade
    Get Url    contains    /privacidade/
    Get Text    h1    ==    Política de privacidade
