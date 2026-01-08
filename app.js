// The importation array 
import { cards } from "./data.js";
import { property } from "./data.js";


// // The menu toggl

const hidden = document.querySelector('.navigation_links')
hidden.classList.add('navigation_links')
const button = document.getElementById('menuToggle'); 


if(button && hidden) {
 button.addEventListener('click',function (e) {
    e.preventDefault(); 

   hidden.classList.toggle('active')
}); 

}

// 
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

// The property container
const gallery = document.getElementById('gallery')

property.map(card => {
    const propertyContent = document.createElement('div') 
    const propertyWrapper = document.createElement('div')
    const propertyTitle = document.createElement('h2')
    const propertyText = document.createElement('p')

    // propertyTitle.textContent = 
    propertyContent.classList.add('property-card');
    propertyContent.style.backgroundImage =  `url(${card.image})`

    propertyWrapper.classList.add('propertyWrapper')
    propertyTitle.classList.add('titre')

    propertyTitle.textContent = card.titleProperty  

    propertyText.classList.add('text')
    propertyText.textContent = card.description 

    
    propertyWrapper.appendChild(propertyContent)
    propertyWrapper.appendChild(propertyTitle)
    propertyWrapper.appendChild(propertyText)
    gallery.appendChild(propertyWrapper) 
}); 


// The function submit 
// The contact form 
const contactForm = document.getElementById("contact-form");
const formResponse = document.getElementById('formResponse');

// 1. AJOUT de "async" ici
contactForm.addEventListener('submit', async function (e) {
    e.preventDefault(); 
    
    // 2. CORRECTION de "new FormData" (Majuscule)
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData.entries());
    
    // Validation locale
    if(data.message.length < 10) {
        formResponse.textContent = "Le message est trop court.";
        formResponse.style.color = 'red';

        setTimeout(() => {
            formResponse.textContent = ''; 
            formResponse.style.opacity = '1';
        }, 5000) 
        return; 
    }

    try {
        formResponse.textContent = "Envoi en cours...";
        formResponse.style.color = 'orange';

        const response = await fetch('https://getform.io/f/bjjdrpxb', {
            method: 'POST',
            headers: { 
                'Accept': 'application/json', 
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            formResponse.textContent = "Message envoyé avec succès !";
            formResponse.style.color = 'green';

            setTimeout(() => {
                formResponse.textContent = ''; 
                formResponse.style.opacity = '1';
            } , 5000 )

            contactForm.reset(); 
        } else {
            throw new Error("Erreur serveur");
        }
    } catch (error) {
        formResponse.textContent = "Erreur : Impossible d'envoyer le message.";
        formResponse.style.color = 'red';

        setTimeout(() => {
                formResponse.textContent = ''; 
                formResponse.style.opacity = '1';
        } , 5000 )

        console.error(error);
    }
});

