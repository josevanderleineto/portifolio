// menu
const nav = document.querySelector(".nav");
const btnMenu = document.querySelector(".btn-menu");
const menu = document.querySelector(".menu");

function handleButtonClick(event) {
  if (event.type === "touchstart") event.preventDefault();
  event.stopPropagation();
  nav.classList.toggle("active");
  handleClickOutside(menu, () => {
    nav.classList.remove("active");
    setAria();
  });
  setAria();
}

function handleClickOutside(targetElement, callback) {
  const html = document.documentElement;
  function handleHTMLClick(event) {
    if (!targetElement.contains(event.target)) {
      targetElement.removeAttribute("data-target");
      html.removeEventListener("click", handleHTMLClick);
      html.removeEventListener("touchstart", handleHTMLClick);
      callback();
    }
  }
  if (!targetElement.hasAttribute("data-target")) {
    html.addEventListener("click", handleHTMLClick);
    html.addEventListener("touchstart", handleHTMLClick);
    targetElement.setAttribute("data-target", "");
  }
}

function setAria() {
  const isActive = nav.classList.contains("active");
  btnMenu.setAttribute("aria-expanded", isActive);
  if (isActive) {
    btnMenu.setAttribute("aria-label", "Fechar Menu");
  } else {
    btnMenu.setAttribute("aria-label", "Abrir Menu");
  }
}

btnMenu.addEventListener("click", handleButtonClick);
btnMenu.addEventListener("touchstart", handleButtonClick);
  //nome
  
  const el = document.querySelector("#text");
  const text = "VANDERLEI NETO";
  const interval = 300;
  
  function showText(el, text, interval) {
    const char = text.split("").reverse();
  
    const typer = setInterval(() => {
      if (!char.length) {
        return clearInterval(typer);
      }
  
      const next = char.pop();
  
      el.innerHTML += next;
    }, interval);
  }
  
  showText(el, text, interval);
  


    
function carregar() {
  let  data = new Date();
  let hora = data.getHours();
  if(hora >= 6 && hora < 18) {
    //Em quanto estiver claro o fundo será claro
    document.body.style.background = '#b997bd' 
  }  else {
    //
    document.body.style.background = '#2d233f'
  }  
} 