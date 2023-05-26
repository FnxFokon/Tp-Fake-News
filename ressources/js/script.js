
document.addEventListener( 'DOMContentLoaded', function() {

    // Déclaration de mes variables
    const cmdMenu = document.getElementById('cmd-menu');
    const mainMenu = document.getElementById('main-menu');

    // Affichage / Désafichage du menu
    cmdMenu.addEventListener( 'click', function() {
        mainMenu.classList.toggle( 'menu-pop' );
        cmdMenu.classList.toggle('cmd-menu')
    });


    // TODO: JS du FORM
});