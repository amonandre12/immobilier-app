import { cards } from "./data.js";


const hidden = document.querySelector('.navigation_links')
hidden.classList.add('navigation_links')
const button = document.getElementById('menuToggle'); 


if(button && hidden) {
 button.addEventListener('click',function (e) {
    e.preventDefault(); 

   hidden.classList.toggle('active')
}); 

}


const services = document.getElementById('servicesContent')

for(let i = 0 ; i < cards.length ; i ++) {
   const card = cards[i]           
   const wrapper = document.createElement('div')
         wrapper.classList.add('wrapper')
   const icon = document.createElement('i')

   icon.classList.add('icons')

   const titleElement = document.createElement('h3')
   const description = document.createElement('p')
   const link = document.createElement('a')
            
    link.href = "#"
    link.textContent = card.link 
    link.classList.add("liens") 
       
    icon.className = card.icon 
        
    titleElement.classList.add('title') 
    titleElement.textContent = card.title

    description.classList.add('description')
    description.textContent = card.paragraph 


    wrapper.append(icon , titleElement , description , link)
         
    // Injection des elements dans le DOM 

    if(services) {
       services.appendChild(wrapper)
    }        
}; 
