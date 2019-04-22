const menuItems = document.querySelectorAll('.menu-nav a');

menuItems.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick);
})

function getScrollTopByHref(element) {
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
}

function scrollToIdOnClick(event) {
    event.preventDefault();
    const to = getScrollTopByHref(this);

    scrollToPosition(to);
}

function scrollToPosition(to) {
    window.scroll({
        top: to -80,
        behavior: 'smooth'
    })
}
