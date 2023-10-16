// Gestionnaire d'événement pour les liens
document.querySelectorAll(".popup-link").forEach(function (link) {
    link.addEventListener("click", function (event) {
        event.preventDefault();

        // Récupérer la valeur de l'attribut data-popup
        const popupId = link.getAttribute("data-popup");

        // Appeler la fonction pour afficher le popup spécifié
        afficherPopup(popupId);
    });
});

// Fonction pour afficher un popup spécifique
function afficherPopup(popupId) {
    // Cacher tous les popups
    document.querySelectorAll(".modal").forEach(function (modal) {
        modal.style.display = "none";
    });

    // Afficher le popup spécifié
    document.getElementById(popupId).style.display = "flex";
}

// Fonction pour fermer la fenêtre modale
function fermerPopup() {
    document.querySelectorAll(".modal").forEach(function (modal) {
        modal.style.display = "none";
    });
}



