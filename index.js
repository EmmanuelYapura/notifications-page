const arrayUnread = document.querySelectorAll('.unread');
const arrayCircleRed = document.querySelectorAll('.circle-red');

let btn_markAll = document.querySelector('.mark-all');
let booleanMark = true;

btn_markAll.addEventListener('click', () => {
    if(booleanMark){
        booleanMark = false;
        arrayUnread.forEach( div => {
            div.classList.toggle('unread')
        });
        arrayCircleRed.forEach( div => {
            div.classList.toggle('circle-red')
        });
    }
});

