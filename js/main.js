import App from '../component/App.js'
import { attach } from '../lib/store.js'

attach(App, document.getElementById('root'))

$(window).load(() => {
    $('.turn').delay(2000).fadeOut('fast',() => {
        $('#load-page').removeClass('load-page');
    });
});

/**button toggle dark mode */
const body = document.querySelector('body')
const toggle = document.getElementById('toggle')
const mode_key = 'NIGHT-MODE'

/* lưu night mode vào local */
const settingMode = {
    get() {
        return JSON.parse(localStorage.getItem(mode_key)) || []
    },
    set(mode) {
        localStorage.setItem(mode_key, JSON.stringify(mode))
    }
}
const mode = {
    nightMode: settingMode.get().nightMode,
}

body.classList.toggle('dark',mode.nightMode)

// body.classList.toggle('dark',settingMode.get().nightMode)
toggle.onclick = function () {
    mode.nightMode = !mode.nightMode
    settingMode.set(mode)
    const check = settingMode.get(mode)
    
    console.log(check.nightMode)
    body.classList.toggle('dark',check.nightMode)
}


