document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll('.info-card');

    function showCards() {
        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) {
                card.style.opacity = 1;
                card.style.transform = "translateY(0)";
            }
        });
    }

    window.addEventListener('scroll', showCards);
    showCards();
});
