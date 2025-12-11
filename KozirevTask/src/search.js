const search = document.getElementById('search');

search.addEventListener('input', () => {
    const cards = document.querySelectorAll('.courses-grid__card');
    const cardsName = document.querySelectorAll('.card-name');
        for (let i = 0; i < cards.length; i++) {
            if (cardsName[i].innerText.toLowerCase().includes(search.value.toLowerCase())) {
                cards[i].classList.add('visible');
                cards[i].classList.remove('hidden');
            } else {
                cards[i].classList.add('hidden');
                cards[i].classList.remove('visible');
            }
    }
})