function clicouIconeMenu() {
    // Trazer o icone pra esquerda
    // Aparecer o menu
    if (document.getElementById("menuNav")) {
        document.getElementById("menuNav").id = "menuNav_abrir";
        document.getElementById("imagemMenu").id = "imagemMenuAberto";
    } else if (document.getElementById("menuNav_abrir")) {
        document.getElementById("menuNav_abrir").id = "menuNav";
        document.getElementById("imagemMenuAberto").id = "imagemMenu";
        document.getElementById("projetos_abrir").id = "projetos";
    }

    
}


function apareceOutrosProjetos() {
    document.getElementById("projetos").id = "projetos_abrir";
}
