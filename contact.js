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
