// Attendre le chargement complet du DOM
document.addEventListener("DOMContentLoaded", () => {
    
    const ctaButton = document.getElementById("cta-btn");

    // Ajout d'une interactivité simple (effet fluide au clic sur le bouton)
    if (ctaButton) {
        ctaButton.addEventListener("click", () => {
            const projectsSection = document.getElementById("projects");
            
            // Fait défiler la page de manière fluide jusqu'à la section projets
            projectsSection.scrollIntoView({ behavior: "smooth" });
            
            // Affiche une animation visuelle temporaire dans la console
            console.log("L'utilisateur a interagi avec le portfolio.");
        });
    }
});

