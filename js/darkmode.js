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

const filled = document.querySelector('.filled');

function update() {
  filled.style.width = `${((window.scrollY) / (document.body.scrollHeight - window.innerHeight)) * 100}%`;
  requestAnimationFrame(update);
}

update();
