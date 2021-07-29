let costumerName = document.querySelector('.customer-name')
let costumerOpinion = document.querySelector('.opinion')
let count = 0;
let userImage = document.querySelector('.userImg')
let costumer = document.querySelector('.customer-testimonial')

const users = [
    {
        userName: 'JOHN',
        userOpinion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis neque reprehenderit laborum, corporis explicabo assumenda. Porro impedit consectetur animi, reprehenderit recusandae sapiente at aliquam reiciendis modi ipsam rerum suscipit distinctio?',
        userImg: `img-1.jpg`
    },
    {
        userName: 'SANDY',
        userOpinion: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock',
        userImg: `img-2.jpg`

    },
    {
        userName: 'AMY',
        userOpinion: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable`,
        userImg: 'img-3.jpg'
    },
    {
        userName: 'TYRELL',
        userOpinion: `If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.`,
        userImg: 'img-4.jpg',
    }
]

costumer.addEventListener('click', e => {
    let btnClick = e.target
    if(btnClick.classList.contains('fa-angle-right')){
        count++;
        if(count === users.length){
            count = 0;
        }
        costumerName.textContent = users[count].userName
        costumerOpinion.textContent = users[count].userOpinion
        userImage.style.backgroundImage  = `url(img/${users[count].userImg})`  
    }
    if(btnClick.classList.contains('fa-angle-left')){
        if(count == 0){
            count = users.length;
        }
        count--;
        costumerName.textContent = users[count].userName;
        costumerOpinion.textContent = users[count].userOpinion;
        userImage.style.backgroundImage  = `url(img/${users[count].userImg})`  
    }
})