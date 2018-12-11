

class CloseNav {
    constructor() {
        this.links = document.querySelectorAll('.nav-burger__link');
        this.exitBurgerNav();
    }

exitBurgerNav() {
    var that = this;
    that.links.forEach(link => link.addEventListener('click', closeBurgerNav));

    function closeBurgerNav() {
        console.log('clocked');
        document.querySelector('input#nav-toggle.nav-burger__checkbox').checked = false;
        }
    }
}

export default CloseNav
