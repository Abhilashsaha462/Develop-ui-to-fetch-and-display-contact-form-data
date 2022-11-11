// put the solution code to persist and fetch data here
function ContactData(feedback) {
  console.log("ContactData method is invoked.");
  let xhr1 = new XMLHttpRequest();
  xhr1.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200)
          console.log("connection success");
  }
  
  xhr1.open("POST", "http://localhost:8080/posts");
  xhr1.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhr1.send(JSON.stringify(feedback));
  
}

// method to persist data
getData();

// method to fetch all contacts
function getData() {
  let xhr1 = new XMLHttpRequest();
  xhr1.open('GET', "http://localhost:8080/posts");
  xhr1.send();
  xhr1.onreadystatechange = function () {
      console.log("data saved.");
      if (this.readyState == 4 && this.status == 200) {
          console.log(xhr1.response);
          var showData = document.getElementById("tableData");
          let objData = JSON.parse(xhr1.response);
          objData.forEach(element => {
              if(element.id>1) {
              showData.innerHTML += `<tr>
              <td> ${element.firstname} </td>
              <td> ${element.lastname} </td>
              <td> ${element.email} </td>
              <td> ${element.homeNo} </td>
              <td> <button class="button2" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="return showData(${element.id})"> + </button> </td>
              </tr>`
          }});
      }
  }
}

// method to fetch all contacts by id
function showData(id) {
  let xhr = new XMLHttpRequest();
  xhr.open('get', `http://localhost:8080/posts/${id}`);
  xhr.send();
  xhr.onreadystatechange = function () {
      console.log("data retrieved.");
      if (this.readyState == 4 && this.status == 200) {
          let showModal = document.getElementById("contact-data");
          let objData = JSON.parse(xhr.response);
          console.log(objData);
          console.log(id);
          showModal.innerHTML = `<b>${objData.firstname} ${objData.lastname}</b><br>
              Email :- ${objData.email}<br>
              Home No. :- ${objData.homeNo}<br>
              Work No. :- ${objData.workNo}<br>    
              Birthday :- ${objData.birthdate}<br>
              Company :- ${objData.company}<br>
              Job Title:- ${objData.jobTitle}<br>
              Notes :-  ${objData.notes}  `
      };
  }
}
