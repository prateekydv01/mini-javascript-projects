const data = [
    {
      name: "prateek",
      photoUrl:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
      text: "this is simply unbelievable! I would be lost without Apple. The very best. Not able to tell you how happy I am with Apple.",
    },
    {
      name: "parv",
      photoUrl:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
      text: "I would also like to say thank you to all your staff. Wow what great service, I love it! Apple impressed me on multiple levels.",
    },
    {
      name: "apurv",
      photoUrl:
        "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
      text: "Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. The very best.",
    },
  ];
  
const imageDoc=document.querySelector('img')
const textDoc=document.querySelector('.text')
const usernameDoc=document.querySelector('.username')
const leftbtn=document.querySelector('.left')
const rightbtn=document.querySelector('.right')

let index=0
function updateContent(){
    const profile=data[index]
    imageDoc.src=profile.photoUrl
    textDoc.innerHTML=profile.text
    usernameDoc.innerHTML=profile.name
}

function updateContentRight(){
    index = (index + 1) % data.length;
    updateContent();
    console.log(index);
    
}

function updateContentLeft(){
    index = (index - 1 + data.length) % data.length;
    updateContent();
    console.log(index);
    
}
updateContentRight()
setInterval(updateContentRight,5000)

rightbtn.addEventListener('click',()=>{
    updateContentRight()
})

leftbtn.addEventListener('click',()=>{
    updateContentLeft()
})