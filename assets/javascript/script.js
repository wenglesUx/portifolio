const myOffcanvas = document.getElementById('myOffcanvas')
// myOffcanvas.addEventListener('hidden.bs.offcanvas', event => {
//     alert('estado do componente')
    
// })
let menuMbAction = document.querySelectorAll('.navbar-nav li')

 
var navbarNav = document.querySelector('.navbar-Nav');
menuMbAction.forEach((item,index) =>{
    var navbarNav = document.querySelector('#offcanvasNavbar');
    item.addEventListener('click', () => {

        if (navbarNav.classList.contains('show')) {
            // Certifique-se de que a barra de menu está aberta antes de tentar fechá-la
           navbarNav.classList.remove('show')
           navbarNav.classList.add('hide')
           if(navbarNav.classList.contains('hide')){
            document.querySelector('body').style = 'none'
            document.querySelector('.navbar').style.paddingRight = 'none'
            document.querySelector('.offcanvas-backdrop').classList.remove('show')
            document.querySelector('.offcanvas-backdrop').classList.add('hide')
           } else(document.querySelector('.offcanvas-backdrop').classList.add('show'))
          

           
            // var offcanvas = new bootstrap.Offcanvas(navbarNav);
            // offcanvas.hide();
        }
    });
})

// Animação da logo
let brand = document.getElementById('brand')
let SubBrand = document.getElementById('sub-brand')
let brBar = document.getElementById('br-bar')

function hiBrand(){
    // brand.style.color ='var(--dark-color)'
    SubBrand.style.opacity ='1'
    brBar.style.width ='100%'

    // Time Transition

    brand.style.transition ='.4s'
    SubBrand.style.transition ='.5s'
    brBar.style.transition ='.7s'
}
function hiBrandReset(){
    brand.style.color =''
    SubBrand.style.opacity =''
    brBar.style.width =''
}

brand.addEventListener('mouseleave',hiBrandReset)
setTimeout(() => {
    hiBrand()
},2000);

// interação de rolagem de paginas com sessão de cards

// let htmlCard = document.getElementById('html')
// let cssCard = document.getElementById('css')
// let jsCard = document.getElementById('js')
// let bootSCard = document.getElementById('bootS')

// // function changeColorsCard(){
  
  
// setTimeout(() => {

//     htmlCard.style.backgroundImage = 'linear-gradient(90deg,#FF7816,#FF4B00)';
//     htmlCard.style.color = 'white';
//     document.querySelector('.ability-area').classList.add('ability-area-hover')
 
// }, 500);


// setTimeout(() => {
//     cssCard.style.backgroundImage = 'linear-gradient(90deg,#2196F3,#066FC2)';
//     document.querySelector('.ability-area').classList.add('ability-area-hover');
//     cssCard.style.color = 'white';
   
// }, 700);
// setTimeout(() => {
//     jsCard.style.backgroundImage = 'linear-gradient(90deg,#FFDF00,#EBCF0C)';
//     document.querySelector('.ability-area').classList.add('ability-area-hover');
//     jsCard.style.color = 'white';
// }, 800);
// setTimeout(() => {
//     bootSCard.style.backgroundImage = 'linear-gradient(90deg,#9770BC,#43087A)'
//     document.querySelector('.ability-area').classList.add('ability-area-hover');
//     bootSCard.style.color = 'white';
// }, 900);
    
   



// function resetChangeColorsCard(){
//     htmlCard.style.backgroundImage = 'linear-gradient(90deg,transparent,transparent)';
//     cssCard.style.backgroundImage = 'linear-gradient(90deg,transparent,transparent)';
//     jsCard.style.backgroundImage = 'linear-gradient(90deg,transparent,transparent)';
//     bootSCard.style.backgroundImage = 'linear-gradient(90deg,transparent,transparent)';
// }
// Interação de rolagem de pagina com menu
function destacarItemMenu(){
    const sections = document.querySelectorAll('.page-mark');
    const menuItems = document.querySelectorAll(".navbar-nav li a");

    sections.forEach((section,index)=>{
        const rect = section.getBoundingClientRect();
        if(rect.top <= 50 && rect.bottom >= 50){
            menuItems.forEach((item)=> item.classList.remove("active"));
            menuItems[index].classList.add("active");
          
            if(index == 1){
              
               
                // changeColorsCard()
            }
           

        else{
            document.querySelector("#habilidades").style.backgroundColor = ''
            // resetChangeColorsCard()
        }
           
            
        }  else{
            menuItems[index].classList.remove("active");
            
        }
      
    })
    


}
window.addEventListener("scroll", destacarItemMenu);


const form       = document.getElementById('form')
const campos     = document.querySelectorAll('.required')
const spans = document.querySelectorAll('.span-required')
const emailRegex =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
form.addEventListener('submit',(event)=>{
    event.preventDefault();
    nameValidate();
    emailValidate();
    textValidate();
    messegeValidate();
})

function setError(index){
    campos[index].style.border = ' 1px solid #e63636 '
    spans[index].style.display ='block'
}
function removeError(index){
    campos[index].style.border = ''
    spans[index].style.display ='none'
}
function nameValidate(){
    if(campos[0].value.length < 4){
        setError(0)
    }else{
       removeError(0)
    }
}
function emailValidate(){
    if(!emailRegex.test(campos[1].value)){
        setError(1)
    }
    else{
      removeError(1)
    }
}
function textValidate(){
    if(campos[2].value.length < 5){
       setError(2)

    }else{
        removeError(2)
    }
}
function messegeValidate(){
    if(campos[3].value.length < 5){
      

    }else{
        
    }
}
class FormSubmit {
    constructor(settings) {
      this.settings = settings;
      this.form = document.querySelector(settings.form);
      this.formButton = document.querySelector(settings.button);
      if (this.form) {
        this.url = this.form.getAttribute("action");
      }
      this.sendForm = this.sendForm.bind(this);
    }
  
    displaySuccess() {
      this.form.innerHTML = this.settings.success;
    }
  
    displayError() {
      this.form.innerHTML = this.settings.error;
    }
  
    getFormObject() {
      const formObject = {};
      const fields = this.form.querySelectorAll("[name]");
      fields.forEach((field) => {
        formObject[field.getAttribute("name")] = field.value;
      });
      return formObject;
    }
  
    onSubmission(event) {
      event.preventDefault();
      event.target.disabled = true;
      event.target.innerText = "Enviando...";
    }
//   metodo de envio
    async sendForm(event) {
      try {
        this.onSubmission(event);
        await fetch(this.url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(this.getFormObject()),
        });
        this.displaySuccess();
      } catch (error) {
        this.displayError();
        throw new Error(error);
      }
    }
  
    init() {
      if (this.form) this.formButton.addEventListener("click", this.sendForm);
      return this;
    }
  }
  
  const formSubmit = new FormSubmit({
    form: "[data-form]",
    button: "[data-button]",
    success: "<h1 class='success'>Mensagem enviada!</h1>",
    error: "<h1 class='error'>Não foi possível enviar sua mensagem.</h1>",
  });
  formSubmit.init();



  // cards action
  const cardsActive =  document.querySelectorAll('.information-card .card-section')
  const infoAreaActived = document.querySelectorAll('.areaSobre .about') 
  
 console.log(infoAreaActived[0])
cardsActive.forEach((item,index)=>{


  

    item.addEventListener("click",()=>{
      cardsActive.forEach((card) => {
        card.classList.remove('card-active');
    });

    // Adiciona a classe 'card-active' apenas ao item clicado
    item.classList.add('card-active');

    console.log(index)
    infoAreaActived.forEach((area, areaIndex) => {
      if (index === areaIndex) {
          area.classList.add('active-about');
          area.classList.remove('desactive-about');
      } else {
          area.classList.remove('active-about');
          area.classList.add('desactive-about');
      }
  });
    // Agora você pode realizar outras ações aqui, se necessário
    // Exemplo: console.log('Item clicado:', item);
});

})
