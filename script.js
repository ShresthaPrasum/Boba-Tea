const item = document.querySelectorAll('.img');

const hoverEffect = {
    0: "img/items/rollover-bobba-naturel-CA-fraise.png",
    1: "img/items/rollover-bobba-naturel-CA-limonade-fruit-du-dragon.png",
    2: "img/items/rollover-bobba-naturel-CA-limonade-mangue.png",
    3: "img/items/rollover-bobba-naturel-CA-melondeau.png",
    4: "img/items/rollover-bobba-naturel-CA-peche.png",
    5:"img/items/bullefusion_fraise_bobba_490g_rollover-1.png",
    6:"img/items/bullefusion_mangue_bobba_490g_rollover-1.png",
    7:"img/items/bullefusion_peche_bobba_490g_rollover-1.png"
}
const originalSrc = Array.from(item).map(img => img.src);

document.addEventListener('DOMContentLoaded', () => {
    const loader = document.querySelector('.loader');
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }
        , 500);
    }, 1200);

    const logo = document.querySelector('.logo');
    const navContainer = document.querySelector('.nav-container');
    const main = document.querySelector('.main');
    const navLinks = document.querySelectorAll('.nav ul li a');
    let active = false;

    logo.addEventListener('click', () => {
        if(!active){
            active = true;
            navContainer.classList.add('active');
            main.classList.add('naved');
        }
        else{
            active = false;
            navContainer.classList.remove('active');
            main.classList.remove('naved');
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navContainer.classList.remove('active');
            main.classList.remove('naved');
            active = false;
        });
        
    });
});

console.log(item);
item.forEach((item, index) => {
    item.style.animationDelay = `${Math.random() * 0.5}s`;
    item.addEventListener('mouseenter', () => {
        item.style.animationPlayState = 'running';
        item.src = hoverEffect[index];
    });
    item.addEventListener('mouseleave', () => {
        item.style.animationPlayState = 'paused';
        item.src = originalSrc[index];
    });
})
        