//change theme
checkbox.addEventListener('change', onChangeThemeClick)

//change score
score.addEventListener('click', onScoreClick)

//burger menu 
mainBurgerBtn.addEventListener('click', () => {
    mainBurgerBtn.classList.toggle('active');
    mainBurgerMenu.classList.toggle('active');
})


bannerBurgerBtn.addEventListener('click', () => {
    bannerBurgerBtn.classList.toggle('active');
    bannerBurgerMenu.classList.toggle('active');
})

