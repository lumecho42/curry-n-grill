function scrollLeft() {
    const container = document.querySelector('.menu-items');
    container.scrollBy({ left: -300, behavior: 'smooth' });
}

function scrollRight() {
    const container = document.querySelector('.menu-items');
    container.scrollBy({ left: 300, behavior: 'smooth' });
}
