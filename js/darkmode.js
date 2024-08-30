let darkmode = localStorage.getItem('light-mode')
const themeSwitch = document.getElementById('theme-switch')

const enableDarkmode = () => {
  document.body.classList.add('light-mode')
  localStorage.setItem('light-mode', 'active')
}

const disableDarkmode = () => {
  document.body.classList.remove('light-mode')
  localStorage.setItem('light-mode', null)
}

if(darkmode === "active") enableDarkmode()

themeSwitch.addEventListener("click", () => {
  darkmode = localStorage.getItem('light-mode')
  darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})

document.querySelectorAll('[data-target]').forEach(function (icon) {
  icon.onclick = function (event) {
    event.preventDefault(); // Evita la acción predeterminada del enlace
    var targetId = this.getAttribute('data-target'); // Obtener el ID del target
    var targetElement = document.getElementById(targetId); // Encontrar la imagen correspondiente
    if (targetElement) {
      targetElement.click(); // Disparar el clic en la imagen principal
    }
  };
});