// Variables

    let     contactsList            = [], // Contacts list
            newButton               = document.querySelector('#new-button'),
            newContactForm          = document.querySelector('#new-contact-form'),
            closeNewContactForm     = document.querySelector('#new-contact-form .close-button'),
            contactFormID           = contactsList.length,
            contactFormPhoto        = document.querySelector('#contact-form-photo'),
            contactFormName         = document.querySelector('#contact-form-name'),
            contactFormPhone        = document.querySelector('#contact-form-phone'),
            contactFormEmail        = document.querySelector('#contact-form-email'),
            contactFormAddress      = document.querySelector('#contact-form-address'),
            saveButton              = document.querySelector('#new-contact-form #save-button')
            tableBody               = document.querySelector('#contacts tbody'),
            contactRows            = document.querySelectorAll('tbody tr'),
            contactInfo             = document.querySelector('#contact-info'),
            closeContactInfo        = document.querySelector('#contact-info .close-button');



// Functions

    // Reset contact form
    function resetContactForm(){
        return  contactFormPhoto.value      = '',
                contactFormName.value       = '',
                contactFormPhone.value      = '',
                contactFormEmail.value      = '',
                contactFormAddress.value    = '';
    }


    // Toggle show
    function toggleShow(x){
        return x.classList.toggle('show');
    }

    // Add new contact
    function addNewContact(){
        return contactsList.push(
            {
                contactID       : contactFormID += 1,
                contactPhoto    : contactFormPhoto.value,
                contactName     : contactFormName.value,
                contactPhone    : contactFormPhone.value,
                contactEmail    : contactFormEmail.value,
                contactAddress  : contactFormAddress.value
            },

        );
    }


    // Sort contacts from a to z
    function sortContactsNamesATZ(){
        return contactsList.sort((a,b)=> (a.contactName > b.contactName ? 1 : -1));
    }

    // Sort contacts from Z to a
    function sortContactsNamesZTA(){
        return contactsList.sort((a,b)=> (a.contactName > b.contactName ? -1 : 1));
    }


  

    // Create contact info
    function createContactInfo(){

        let infoRow;
        
        for(let i = 0; i<contactsList.length; i++){

            infoRow = document.createElement(`
            <td class="photos">
                <img src="${contactsList[i].contactPhoto}" alt=""/>
            </td>
            <td class="names">${contactsList[i].contactName}</td>
            <td class="phones">${contactsList[i].contactPhone}</td>
            <td class="emails">${contactsList[i].contactEmail}</td>
            <td class="addresses">${contactsList[i].contactEmail}</td>
        `);

        tableBody.innerHTML = infoRow;

        }
    }




// Events

    // Open Contact Form
    newButton.onclick = function(){
        toggleShow(newContactForm);
        contactFormName.focus();
    }

    // Close New Contact Form
    closeNewContactForm.onclick = function(){
        toggleShow(newContactForm);
    }

    // Open contact info
    contactRows.forEach(row => {
        row.addEventListener("click", function(){
            toggleShow(contactInfo);
        })
    });

    // Close contact info
    closeContactInfo.onclick = function(){
        toggleShow(contactInfo);
    }

// Create new contact
    saveButton.addEventListener('click', () =>{

        // If name field is empty
        if (contactFormName.value === ""){

            contactFormName.setAttribute("placeholder", "Requred field");
            contactFormName.classList.add('shake');

        }
        else{

            // Add new contact to contact list
            addNewContact();

            // Reset
            resetContactForm();

            // Close new contact form
            newContactForm.classList.toggle('show');
        }

    });








    