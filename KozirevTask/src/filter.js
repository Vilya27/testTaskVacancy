const tabs = document.querySelectorAll(` .filters li`);
const cards = document.querySelectorAll(`.courses-grid__card`);
const badge = document.querySelectorAll('.card-badge');

tabs.forEach((el) => {
    el.addEventListener('click', () => {
        for (let i = 0; i < cards.length; i++) {

            if (el.innerText === badge[i].innerText) {
                cards[i].classList.add('visible');
                cards[i].classList.remove('hidden');
            } else if (el.innerText === 'All') {
                for (let i = 0; i < cards.length; i++) {
                    cards[i].classList.remove('hidden');
                    cards[i].classList.add('visible');
                }
            } else {
                cards[i].classList.add('hidden');
                cards[i].classList.remove('visible');
            }
        }
        changeTabStyle();
        el.classList.add('active');

    })
})

function changeTabStyle() {
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active');
    }
}