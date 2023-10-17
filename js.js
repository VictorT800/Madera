



// Selección del párrafo del Copyright e introducción automática del año:
const fecha = new Date();

let year = fecha.getFullYear();

//console.log (year);

const copy = document.querySelector(".copy");
//console.log (copy);
copy.textContent=(` ${year}`);