//Provide the solution code here

let contacts = [];

// listen to click of addContact button and add maximum of two additional inputs for inputting Contact Nos.

const submitContact = (event) => {
    event.preventDefault();
    let addContactNo = document.getElementById("addContactNo");
    addContactNo.addEventListener('click',() => 
    {
        if(addContactNo.click)
        {
            let divItem1 = document.createElement("div");
            let divItem2 = document.createElement("div");
            let divItem3 = document.createElement("div");
            divItem3.appendChild(divItem1,divItem2);
        }
    })
    //contact object captures all the inputs provided
    let formdata = document.getElementById("feedbackForm");
    let feedback = Object.fromEntries(new FormData(formdata));

    //errors object captures all the validation errors
    let errors = {
        firstNameError: validateFirstName(feedback.firstname),
        lastNameError: validateLastName(feedback.lastname),
        emailError: validateEmail(feedback.email),
        homeNoError: validateHomeNo(feedback.homeNo),
        workNoError: validateWorkNo(feedback.workNo),
        notesError: validateNotes(feedback.notes),
        companyError: validatecompany(feedback.company),
        jobTitleError: validatejobTitle(feedback.jobTitle),
        birthdateError: validateBirthDate(feedback.birthdate)
    }

    //display validation summary with error messages
    let errorMessages = Object.values(errors).filter(e=>e!=='');
    displayIndividualMsg(errors);

    //if no errors, push the contact to contacts array
    if(errorMessages.length===0)
    {
        contacts.push(feedback);
        ContactData(feedback);
    }

    //contacts can be logged on to console, or can even be updated on UI
    console.log(contacts)
}

//function to display error messages alongside the input fields
function displayIndividualMsg(errorMessages)
{
    document.getElementById("firstNameError").innerText=errorMessages.firstNameError;
    document.getElementById("lastNameError").innerText=errorMessages.lastNameError;
    document.getElementById("emailError").innerText=errorMessages.emailError;
    document.getElementById("homeNoError").innerText=errorMessages.homeNoError;
    document.getElementById("workNoError").innerText=errorMessages.workNoError;
    document.getElementById("notesError").innerText=errorMessages.notesError;
    document.getElementById("jobTitleError").innerText=errorMessages.jobTitleError;
    document.getElementById("companyError").innerText=errorMessages.companyError;
    document.getElementById("birthdateError").innerText=errorMessages.birthdateError
}

//function to validate firstName
const validateFirstName = (firstname)=>
{
    if(firstname===''|| firstname===undefined || firstname==null)
    {
         return "FirstName can't be blank";
    }
    else
    {
          return "";
    }
}

//function to validate lastName
const validateLastName = (lastname)=>
{
    if(lastname===''|| lastname===undefined || lastname==null)
    {
         return "lastName can't be blank";
    }
    else
    {
          return "";
    }
}

//function to validate email
const validateEmail = (email) => {
    let emailError = '';
    let validRegex = "^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$";
    if (email === '' || email === undefined || email === null)
        emailError += "Email cannot be left blank";
    else if (!email.match(validRegex))
        emailError += 'Invalid Email';
    return emailError;
}

//function to validate home no 099 999 9999
const validateHomeNo = (contactNo) => {
    let contactNoError = '';
    let validRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (contactNo === '' || contactNo === undefined || contactNo === null)
        contactNoError += "HomeNo cannot be left blank";
    else if (!contactNo.match(validRegex))
        contactNoError += 'Invalid ContactNo';
    return contactNoError;
}

//function to validate work no
const validateWorkNo = (workNo) => {
    let workNoError = '';
    let validRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (workNo === '' || workNo === undefined || workNo === null)
        workNoError += "WorkNo cannot be left blank";
    else if (!workNo.match(validRegex))
        workNoError += 'Invalid workNo';
    return workNoError;
}

//function to validate additional contact no
let addcontactNumber=document.getElementById("addContactNo");
let contactElement=document.getElementById("contactNos");
 addcontactNumber.addEventListener('click',(event)=>
 {
    let divtag=document.createElement("div");
    divtag.innerHTML=' <input class="form-control form-control-sm" name="workNo" id="workNo"placeholder="Enter Contact No - Additional-1">'
    '<small id="firstNameError"></small>';
    contactElement.appendChild(divtag);
 });

//function to validate notes
const validateNotes = (notes) => {
    let notesError = '';
    if (notes === '' || notes === undefined || notes === null)
        notesError += "Notes cannot be left blank";
    else if (notes.length > 200)
        notesError += 'Notes should contain maximum of 200 characters';
    return notesError;
}

//function to validate JobTitle
const validatejobTitle = (jobTitle) => {
    if (jobTitle === '' || jobTitle === undefined || jobTitle === null){
        return "jobTitle cannot be left blank";
    }
    else
        return "";
}

//function to validate Company
const validatecompany = (company) => {
    if (company === '' || company === undefined || company === null){
        return "company cannot be left blank";
    }
    else
        return "";
}

//disable all dates for whom age is less than 18
const validateBirthDate = (birthdate) => {
    let birthdateError = '';
    var birthDate = document.getElementById('birthdate').value;
    var splittedString = birthDate.split("-");
    var date = new Date();
    if(date.getFullYear()-splittedString[0]<18){
        birthdateError = "Your age is less than 18";
    }
    else if (birthdate === '' || birthdate === undefined || birthdate === null){
        birthdateError = "Birthdate cannot be left blank";
    }
    else{
        birthdateError="";
    }
    return birthdateError;
}
