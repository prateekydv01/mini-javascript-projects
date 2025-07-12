document.addEventListener('DOMContentLoaded',()=>{
    const bannerLeftScrollBtn = document.getElementById("scroll_left_button")
const bannerRightScrollBtn=document.getElementById("scroll_right_button")
const sliderBanner=document.querySelector('.slider')

bannerLeftScrollBtn.addEventListener('click',()=>{    
    sliderBanner.scrollBy({ left: -250, behavior: "smooth" });
})

bannerRightScrollBtn.addEventListener('click',()=>{
    sliderBanner.scrollBy({left:250,behavior:"smooth"})
})

function createBanner(){
    const slider = document.querySelector('.slider')
    const banner = document.createElement("div")
    banner.className="banner"
    const image = document.createElement("img");
    image.src = ""; 
    image.alt = "40%off"; 
    banner.appendChild(image);
    const content = document.createElement('div')
    content.className="layout_content"
    banner.appendChild(content)
    const h5= document.createElement('h5')
    h5.innerText="get 40% off upto rs80"
    const copyButton = document.createElement('button')
    copyButton.className="copy_code"
    copyButton.innerText="copy code"
    copyButton.addEventListener('click',()=>{
        console.log('clicked')
    })
    content.appendChild(h5)
    content.appendChild(copyButton)
    slider.appendChild(banner)
}

createBanner()

const copyCodeBtn = document.querySelector('.copy_code');
    copyCodeBtn.addEventListener('click',()=>{
        const cuponcode="prateek50"
        alert('cupon copied')
    });

})

const orderbtn=document.getElementById('orderNow')
orderbtn.addEventListener('click',()=>{
    window.location.href = "menu.html"
    
})