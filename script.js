const background = document.querySelector('.container');
const leftButton = document.querySelector('.left-btn');
const rightButton = document.querySelector('.right-btn');

// background.style.backgroundColor = 'purple';

const bg = ['red','blue','purple','aqua']

const bgLen = bg.length;
let i = 0;
console.log(bgLen);

// background.style.backgroundColor =`${bg[0]}`;

// setInterval(()=>{
//     i++;
//     i=i%bgLen;
//     background.style.backgroundColor = bg[i];
// },3000)

rightButton.addEventListener('click',()=>{
    i++;
    i=i%bgLen;
    background.style.backgroundColor = bg[i];
})


leftButton.addEventListener('click',()=>{
    i--;
    if(i<0){
        i = bgLen-1;
    }
    background.style.backgroundColor = bg[i];
})

