document.addEventListener("DOMContentLoaded", e => {
    console.log(e.target);
    let el = document.querySelector("head");
    const elements = document.getElementsByTagName("footer")[0];
    console.log(elements.children);
    console.log(el.children);
    console.log(el.children[8].innerText = "Javascript");

    // Sélectionnez le bouton de bascule de mode sombre
    const toggleDarkModeButton = document.getElementById('toggle-dark-mode');

    // Écoutez l'événement clic sur le bouton
    toggleDarkModeButton.addEventListener('click', () => {
        // Basculez la classe dark-mode sur le corps du document
        document.body.classList.toggle('dark-mode');

        // Basculez la classe d'icône pour le mode sombre
        //const iconMoon = toggleDarkModeButton.querySelector('.material-symbols-outlined');
        //iconMoon.classList.toggle('material-symbols-outlined');
    });
});