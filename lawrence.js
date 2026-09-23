```javascript
// Mobile menu
function toggleMenu() {

    const navigation = document.getElementById("navigation");

    navigation.classList.toggle("show");

}


// Admission form
function submitAdmission(event) {

    event.preventDefault();

    const name = document.getElementById("studentName").value;

    const message = document.getElementById("formMessage");

    message.textContent =
        "Thank you, " + name +
        ". Your admission enquiry has been received.";

}


// Automatically update copyright year
document.getElementById("year").textContent =
    new Date().getFullYear();
```
