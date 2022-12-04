const burger = () => {
    const btn = document.querySelector('.header__burger');
    const menu = document.querySelector('.burgerMenu');

    const burgerFunc = (e) => {
        if(btn.classList.contains('active')) {
            menu.classList.add('active')
        } else {
            menu.classList.remove('active')
        }
    }


   

    if(btn && menu) {
        burgerFunc()
        btn.addEventListener('click', () => {
            console.log('clicked')
            btn.classList.toggle('active')
            burgerFunc()
        })
    }
}
export default burger;