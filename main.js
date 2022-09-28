// Grab Element

const selectElement = (selector) => {
    const elemento = document.querySelector(selector);
    if (elemento) return elemento
    throw new Error(`Algo salio mal, asegurate que el selector ${selector} exista o esta escrito correctamente`);
};
// Grab Elements
const selectElements = (selector) => {
    const elementos = document.querySelectorAll(selector);
    if (elementos){
        return elementos
    }
    throw new Error(`Algo salio mal, asegurate que el selector ${selector} exista o esta escrito correctamente`);
};

const openMenuBtn = selectElement('.open-menu-icon');
const closeMenuBtn = selectElement('.close-menu-icon');
const myNav = selectElement('.navbar');  

// Open/Close Menu

openMenuBtn.addEventListener('click', () => {
    myNav.classList.add('active');
});

closeMenuBtn.addEventListener('click', () => {
    myNav.classList.remove('active');
});

// Dropdown buttons

const dropdownBtns = selectElements('.dropdown-btn');

dropdownBtns.forEach(element => {
    element.addEventListener('click', () => {
        let visible = element.nextElementSibling.style.display;

        if (visible == 'flex') {
            element.nextElementSibling.style.display = 'none';
        } else {
            element.nextElementSibling.style.display = 'flex';
        }
    });
});