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
        return newContactForm.classList.toggle('show');
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
    newButton.addEventListener('click', toggleShow);

    // Close New Contact Form
    closeNewContactForm.addEventListener('click', toggleShow);

    // Open contact info
    contactRows.forEach(row => {
        row.addEventListener("click", () =>{
            contactInfo.classList.toggle('show')
        })
    });

    // Close contact info
    closeContactInfo.addEventListener('click', () => {
        contactInfo.classList.toggle('show');
    } );

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








    