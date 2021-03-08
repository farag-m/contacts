


/**
 * New Contact Form
 */


    // Variables
    let     newButton                   = document.querySelector('#new-button'),
            newContactForm              = document.querySelector('#new-contact-form'),
            newContactFormCloseButton   = document.querySelector('#new-contact-form .close-button'),
            saveButton                  = document.querySelector('new-contact-form .save-button');


    // Open New Contact Form
    newButton.addEventListener('click', () => {
        newContactForm.classList.toggle('show')
    });

    // Close New Contact Form
    newContactFormCloseButton.addEventListener('click', () => {
        newContactForm.classList.toggle('show');
    });

// Save New Contact


/**
 * Contact Info
 */

 // Variables

    let     contacts                    = document.querySelectorAll('tbody'),
            contactInfo                 = document.querySelector('#contact-info'),
            contactInfoCloseButton      = document.querySelector('#contact-info .close-button');






    // Show Contact Info
    contacts.forEach(function(contact){
        let selectedContact;
        contact.addEventListener('click', (x) =>{
            selectedContact = x.target;
            console.log(selectedContact)
            contactInfo.classList.toggle('show');

        })
    })

    // Close Contact Info
    contactInfoCloseButton.addEventListener('click', () => {
        contactInfo.classList.toggle('show');
    } );