document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var formData = new FormData(document.getElementById("myForm")); 
    
    var name = formData.get("name");
    var email = formData.get("email");

    var paragraph = document.createElement("p");
    paragraph.textContent = "Name: " + name + ", Email: " + email;
    
    document.body.appendChild(paragraph);
});