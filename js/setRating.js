// rating logic

function onScoreClick(e) {
    const target = e.target
    const rating = Number(target.dataset.rating)
    const liList = Array.from(score.children)
    if (rating < 10) {
        const width = 53 + (rating * 20)
        scoreView.style.width = width + 'px'
        scoreView.style.borderTopRightRadius = '0px'
        scoreView.style.borderBottomRightRadius = '0px'
        changeRatingLine(liList, rating)
        setRatingCircle(rating)
    } else {
        scoreView.style.width = '269px'
        scoreView.style.borderRadius = '17px'
        changeRatingLine(liList, rating)
        setRatingCircle(rating)
    }
}

function changeRatingLine(list, rating) {
    list.forEach(li => {
        if (li.dataset.rating <= rating) {
            li.style.borderLeft = '1px solid rgb(255, 255, 255, 0.2)'
            li.style.color = '#fff'
        } else {
            li.style.borderLeft = '1px solid rgba(112, 112, 112, 0.15)'
            li.style.color = '#707070'
        }

    });
}
function setRatingCircle(rating) {
    const ratingContent = rating;
    const ratingScore = parseInt(ratingContent * 10, 10);
    const gradient = `background: conic-gradient(#ef793c ${ratingScore}%, transparent 0 100%)`;
    ratingView.setAttribute("style", gradient);
    ratingScoreSpan.innerHTML = ratingScore / 10
}
