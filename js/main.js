// Variables
    let 
    
        // Contacts list
            contactsList                = JSON.parse(localStorage.getItem("contacts") || "[]"),


        // New contact Button
            newContactButton            = document.querySelector('#new-contact-button'),


        // New contact form
        
            // New contact form
            newContactForm              = document.querySelector('#new-contact-form'),

            // New contact form close button
            newContactFormCloseButton   = document.querySelector('#new-contact-form .close-button'),

            // New contact form input fields
            newContactFormID            = contactsList.length,
            newContactFormName          = document.querySelector('#new-contact-form-name'),
            newContactFormPhone         = document.querySelector('#new-contact-form-phone'),
            newContactFormEmail         = document.querySelector('#new-contact-form-email'),
            newContactFormAddress       = document.querySelector('#new-contact-form-address'),

            // New contact form save button
            newContactFormSaveButton    = document.querySelector('#new-contact-form-save-button'),

        // Search bar
            searchBar                   = document.querySelector('#search-bar'),
        // Contacts list table

            // Table Rows
            tBody                       = document.querySelector('#contacts-list tbody'),
            trs                         = document.querySelectorAll('#contacts-list tbody'),

            // Sorting names keys
            nameUp                      = document.querySelector('.names .sorting .up'),
            nameDown                    = document.querySelector('.names .sorting .down'),

            // Sorting Phones keys
            PhoneUp                     = document.querySelector('.phones .sorting .up'),
            PhoneDown                   = document.querySelector('.phones .sorting .down'),
    
            // Sorting emails keys
            emailUp                     = document.querySelector('.emails .sorting .up'),
            emailDown                   = document.querySelector('.emails .sorting .down'),

            // Sorting addresses keys
            addressUp                   = document.querySelector('.addresses .sorting .up'),
            addressDown                 = document.querySelector('.addresses .sorting .down'),
            

        // Contact details
            contactDetails              = document.querySelector('#contact-details'),
            
            // Contact details close button
            contactInfoCloseButton      = document.querySelector('#contact-details .close-button'),

            // Contact info details
            contactDetailsID            = document.querySelector('.contact-details-ID'),
            contactDetailsName          = document.querySelector('.contact-details-name'),
            contactDetailsPhone         = document.querySelector('.contact-details-phone'),
            contactDetailsEmail         = document.querySelector('.contact-details-email'),
            contactDetailsAddress       = document.querySelector('.contact-details-address'),

            // Contact details buttons
            contactDetailsDeleteButton  = document.querySelector('#contact-details-delete-button'),
            contactDetailsEditButton    = document.querySelector('#contact-details-edit-button'),



        // Contact edit form
            contactEditForm             = document.querySelector('#contact-edit-form'),

            // Contact edit form close button
            contactEditFormCloseButton  = document.querySelector('#contact-edit-form .close-button'),

            // Contact edit form input fields
            contactEditFormID           = document.querySelector('#contact-edit-form-ID'),
            contactEditFormName         = document.querySelector('#contact-edit-form-name'),
            contactEditFormPhone        = document.querySelector('#contact-edit-form-phone'),
            contactEditFormEmail        = document.querySelector('#contact-edit-form-email'),
            contactEditFormAddress      = document.querySelector('#contact-edit-form-address'),

            // Contact edit form update button
            contactEditFormUpdateButton = document.querySelector('#contact-edit-form-update-button');



// Functions

    // Reset new contact form
    function resetNewContactForm() {
        return  newContactFormName.value            = '',
                newContactFormPhone.value           = '',
                newContactFormEmail.value           = '',
                newContactFormAddress.value         = ''
    }


    // Toggle show
    function toggleShow(x) {
        return x.classList.toggle('show');
    }


    // Add new contact
    function addNewContact() {

        // Add new contact object to contacts list array
        contactsList.push(
            {
                contactID       : newContactFormID += 1,
                contactName     : newContactFormName.value,
                contactPhone    : newContactFormPhone.value,
                contactEmail    : newContactFormEmail.value,
                contactAddress  : newContactFormAddress.value
            },
        );
    
        // Update local storage
        localStorage.setItem("contacts", JSON.stringify(contactsList));
    }


    // Display contacts
    function displayContacts() {

        // Create tr element
        let rows = '';
        
        // 
        for (let i = 0; i < contactsList.length; i++) {
            
            rows += `
                <tr>
                    <td class="ids">        ${contactsList[i].contactID}        </td>
                    <td class="names">      ${contactsList[i].contactName}      </td>
                    <td class="phones">     ${contactsList[i].contactPhone}     </td>
                    <td class="emails">     ${contactsList[i].contactEmail}     </td>
                    <td class="addresses">  ${contactsList[i].contactAddress}   </td>
                </tr>
                `

                // 
            tBody.innerHTML = rows;
        }

        
    }
    displayContacts();

    // Search function
    function Search() {

        let rows = tBody.children;
        
        // Loop through tbody
        for(let i = 0 ; i < rows.length ; i++){

            if(rows[i].textContent.toLowerCase().indexOf(searchBar.value.toLowerCase()) > -1){
                rows[i].style.display = '';
            }
            else{
                rows[i].style.display = 'none';
            }

        }

    }


    // Sort contacts names
    function sortContactsNames() {
        return contactsList.sort((a, b) => (a.contactName > b.contactName ? 1 : -1));
    }
    // Sort contacts names reversed
    function sortContactsNamesReversed() {
        return contactsList.sort((a, b) => (a.contactName > b.contactName ? -1 : 1));
    }


    // Sort contacts phones
    function sortContactsPhones() {
        return contactsList.sort((a, b) => (a.contactPhone > b.contactPhone ? 1 : -1));
    }
    // Sort contacts phones reversed
    function sortContactsPhonesReversed() {
        return contactsList.sort((a, b) => (a.contactPhone > b.contactPhone ? -1 : 1));
    }


    // Sort contacts emails
    function sortContactsEmails() {
        return contactsList.sort((a, b) => (a.contactEmail > b.contactEmail ? 1 : -1));
    }
    // Sort contacts emails reversed
    function sortContactsEmailsReversed() {
        return contactsList.sort((a, b) => (a.contactEmail > b.contactEmail ? -1 : 1));
    }


    // Sort contacts Addresses
    function sortContactsAddresses() {
        return contactsList.sort((a, b) => (a.contactAddress > b.contactAddress ? 1 : -1));
    }
    // Sort contacts Addresses reversed
    function sortContactsAddressesReversed() {
        return contactsList.sort((a, b) => (a.contactAddress  > b.contactAddress ? -1 : 1));
    }



// Events

    // Open new contact form
    newContactButton.onclick = function () {

        // Show new contact form
        toggleShow(newContactForm);

        // Reset new contact form input fields
        resetNewContactForm();

        // Remove the shake effect
        newContactFormName.classList.remove('shake');
    }

    // Close new contact form
    newContactFormCloseButton.onclick = function () {

        // Hide new contact form
        toggleShow(newContactForm);

    }


    // Save new contact
    newContactFormSaveButton.addEventListener('click', () => {

        // If new contact form name field is empty
        if (newContactFormName.value === "") {

            // Display required field 
            newContactFormName.setAttribute("placeholder", "Requred field");

            // Apply the shake effect
            newContactFormName.classList.add('shake');

        }
        else {

            // Add new contact to contacts list
            addNewContact();

            // Reset new contact form input fields
            resetNewContactForm();

            // Display contacts
            displayContacts();

            // Close new contact form
            newContactForm.classList.toggle('show');
        }
    });

    // Search
    searchBar.addEventListener('keyup', function(){
        Search();
    });

    // Sort by names

        // Sort names
        nameDown.addEventListener('click', function(){
            sortContactsNames();
            displayContacts();
        });

        // Sort names reversed
        nameUp.addEventListener('click', function(){
            sortContactsNamesReversed();
            displayContacts();
        });
    
    // Sort by Phones

        // Sort phones
        PhoneDown.addEventListener('click', function(){
            sortContactsPhones();
            displayContacts();
        });

        // Sort phones reversed
        PhoneUp.addEventListener('click', function(){
            sortContactsPhonesReversed();
            displayContacts();
        });

    // Sort by emails

        // Sort emails
        emailDown.addEventListener('click', function(){
            sortContactsEmails();
            displayContacts();
        });

        // Sort emails reversed
        emailUp .addEventListener('click', function(){
            sortContactsEmailsReversed();
            displayContacts();
        });

    // Sort by addresses

        // Sort addresses
        addressDown.addEventListener('click', function(){
            sortContactsAddresses();
            displayContacts();
        });
    
        // Sort addresses reversed
        addressUp.addEventListener('click', function(){
            sortContactsAddressesReversed();
            displayContacts();
        });


    // Open selected contact details
        trs.forEach(tr => {

            // Add event listener on table rows
            tr.addEventListener("click", function (e) {

                // Show/hide Contact details
                toggleShow(contactDetails);

                // Selected contact
                let selectedContact = e.target.parentElement.children;
                
                // Set selected contact info to contact details 
                contactDetailsID.textContent        = selectedContact[0].textContent;
                contactDetailsName.textContent      = selectedContact[1].textContent;
                contactDetailsPhone.textContent     = selectedContact[2].textContent;
                contactDetailsEmail.textContent     = selectedContact[3].textContent;
                contactDetailsAddress.textContent   = selectedContact[4].textContent;
                

                // Asign selected contact details info as contact edit form input fileds values
                contactEditFormID.value             = selectedContact[0].textContent;
                contactEditFormName.value           = selectedContact[1].textContent;
                contactEditFormPhone.value          = selectedContact[2].textContent;
                contactEditFormEmail.value          = selectedContact[3].textContent;
                contactEditFormAddress.value        = selectedContact[4].textContent;

                
                // Update contact 
                contactEditFormUpdateButton.addEventListener('click', function(){

                });
               





                // Delete Contact
                contactDetailsDeleteButton.addEventListener('click', function(){
                    let contact = e.target.parentElement,
                        id      = contact.children[0].textContent;

                    for(let i = 0; i < contactsList.length; i++){

                    }
                    
                });
                
            });
        });


    // Close contact details
    contactInfoCloseButton.onclick = function (){

        // Close Contact details
        toggleShow(contactDetails);
    }

    // Switch to contact edit form
    contactDetailsEditButton.addEventListener('click', function(){

        // Close contact details
        toggleShow(contactDetails);

        // Open contact edit form
        toggleShow(contactEditForm);

    });

    // 
    contactEditFormCloseButton.addEventListener('click', function(){
    
        // Close contact edit form
        toggleShow(contactEditForm);

    });

    

