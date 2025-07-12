document.addEventListener('DOMContentLoaded',()=>{
    const keys=document.querySelector('.grid-container')
    const display=document.querySelector('#text-box')
    keys.addEventListener('click',(e)=>{
        const inputValue=e.target.value
        if(e.target.value){
            if(inputValue==="AC"){
                display.value=""
            }
            else if(inputValue==="backspace"){
                display.value=display.value.slice(0, -1)
            }
            else if(inputValue==="="){
                display.value=eval(display.value)
            }
            else{
                display.value+=inputValue
            }
        }
    
    })
})

