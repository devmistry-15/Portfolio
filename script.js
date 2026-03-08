const typing = document.querySelector(".typing-text")

const roles=[
"Frontend Developer",
"Web Designer",
"Creative Coder"
]

let roleIndex=0
let charIndex=0
let deleting=false

function type(){

const current=roles[roleIndex]

if(deleting){
charIndex--
}else{
charIndex++
}

typing.textContent=current.substring(0,charIndex)

if(!deleting && charIndex===current.length){
deleting=true
setTimeout(type,1500)
return
}

if(deleting && charIndex===0){
deleting=false
roleIndex=(roleIndex+1)%roles.length
}

setTimeout(type,deleting?60:120)

}

type()



const menu=document.querySelector(".menu")
const links=document.querySelector(".links")

menu.addEventListener("click",()=>{
links.classList.toggle("active")
})


const contactForm=document.getElementById("contactForm")
const success=document.getElementById("successMessage")

contactForm.addEventListener("submit",(e)=>{

e.preventDefault()

success.classList.add("show")

contactForm.reset()

setTimeout(()=>{
success.classList.remove("show")
},4000)

})