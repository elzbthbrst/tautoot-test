
function onChangeThemeClick(e) {
    if(e.target.checked) {
        body.setAttribute('data-theme', "dark")
        logo.forEach(img => img.src = './img/logo-dark.png')
        iconGoogle.src = './img/icons/google-dock.svg'
        iconWiFi.src = './img/icons/wi-fi.svg'
        iconAndroid.src = './img/icons/android.svg'
    } else {
        body.removeAttribute("data-theme")
        logo.forEach(img => img.src = './img/logo-light.png')
        iconGoogle.src = './img/icons/google-lazur.svg'
        iconWiFi.src = './img/icons/wi-fi-lazur.svg'
        iconAndroid.src = './img/icons/androig-grey.svg'
    }
}