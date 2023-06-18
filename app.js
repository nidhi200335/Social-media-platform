const button = document.getElementById('alertButton');

button.addEventListener('click', function() {
    alert('Allow gallary and photos');
    alert('do you really want to continue')
  
  });

  
  const search = ()  =>{
// const messages =document.querySelectorAll('.messages')
// const message =messages.querySelector('.message')
 const messageSearch=document.querySelector('#message-search')
///show heart

// const clickArea = document.querySelector('.feeds');
// const clickCount = document.querySelector('.clickCount');

// let likeCount =0;
 
// const showHeart =(e) =>{
//     const heart = document.createElement('i');
    // heart.classList.add('fas');
    // heart.classList.add('fa-heart');
    // clickArea.appendChild(heart);

    // setTimeout(()=>{
     //   feeds.appendChild(heart);
    // },800)
//     Console.log("nidhi")
// }

// clickArea.addEventListener('dblclick',(e) =>{
//     clickCount.innerHTML = ++likeCount;
//     showHeart(e);
// });



const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    console.log(val);
//     message.forEach(user => {
//         let name = user.querySelectorAll('h6').textContent.toLowerCase();
//         if(name.indexOf(val)!=-1){
//             user.style.display= 'flex';
//         }
//         else{
//             user.style.display= 'none';
//         }
//     })
}

  messageSearch.addEventListener('keyup', searchMessage);


}