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
    # O painel continua no DOM para poder animar a saída; fechado, fica
    # invisível e inerte.
    Get Element States    css=#menu-mobile    contains    hidden
    ${inerte} =    Get Attribute    css=#menu-mobile    inert
    Should Not Be Equal    ${inerte}    ${None}

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

Trocar De Rota Leva Ao Topo Na Hora
    [Documentation]    Regressão: com scroll-behavior smooth no html, o "ir ao
    ...    topo" do roteador virava animação, e meio segundo depois do clique a
    ...    página nova ainda aparecia pelo meio. Aqui se verifica a causa, que
    ...    é determinística, e o resultado depois da navegação.
    Abrir Site No Desktop
    ${comportamento} =    Evaluate JavaScript    ${None}
    ...    () => getComputedStyle(document.documentElement).scrollBehavior
    Should Be Equal    ${comportamento}    auto

    Evaluate JavaScript    ${None}
    ...    () => window.scrollTo({ top: document.body.scrollHeight, behavior: 'instant' })
    Sleep    0.3s
    Click    footer >> text=Sobre a Tinna
    Get Url    contains    /sobre/
    ${y} =    Evaluate JavaScript    ${None}    () => Math.round(window.scrollY)
    Should Be Equal As Integers    ${y}    0
