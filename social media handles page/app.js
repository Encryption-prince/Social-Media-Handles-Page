const shareBtn = document.querySelector('#share-btn');
const shareOptions = document.querySelector('.share-options');
const likeBtn = document.querySelector('#likes-btn')

shareBtn.addEventListener('click',() => {
    shareOptions.classList.toggle('active');
})

var likes = 0
document.getElementById('likes-count').innerHTML = likes

likeBtn.addEventListener('click', () => {
    likes += 1
    document.getElementById('likes-count').innerHTML = likes
    console.log(likes)
})
