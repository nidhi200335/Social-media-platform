// const addBioEventListners= () =>{

const editBioForm = document.querySelector('.edit-bio-form')

const editBioButton=document.querySelector('.edit-bio-btn')
const cancelFormButton =document.querySelector('.cancel-edit-bio')




 editBioButton.addEventListener('click', ()=> {
    editBioForm.style.display ='block'
})

editBioForm.addEventListener('submit', () =>{
    event.preventDefault()
    const unameInput = document.querySelector('#username').value
    const nameInput = document.querySelector('#name').value

    const unameOutput = document.querySelector('.username')
    const nameOutput = document.querySelector('.name')
    console.log({nameInput});
    unameOutput.innerText= unameInput
    nameOutput.innerText= nameInput
})
cancelFormButton.addEventListener('click', ()=> {
    editBioForm.style.display ='none';
})


// function cedit(){
//     let btn= document.getElementById('edit-bio-btn')
//     let editBioForm= document.getElementById('edit-bio-form')
//    editBioForm.style.display='block';

//     }
  
//  const request=indexedDB.open('myDatabase', 1);
 
//   // Handle errors when opening the database
//   request.onerror = function(event) {
//     console.log('Error opening database:', event.target.errorCode);
//   };
  
//   // Handle successful database opening
//   request.onsuccess = function(event) {
//     console.log("sucsess");
//   }
  




///search chat




 