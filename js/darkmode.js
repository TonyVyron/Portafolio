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
