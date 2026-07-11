const form =document.querySelector("form");
form.addEventListener("submit",function(event){
event.preventDefault();
const fullName =document.querySelector('input[type="text"]').value.trim();
if(fullName === ""){
    alert("please fill out required fields");
    return;
}
alert("Form Submitted Successfully!");
form.reset();
}
);
const clearForm = document.querySelector(".clear-form");
clearForm.addEventListener("click",function(event){
    event.preventDefault();
    if(confirm("clear form?")){
        form.reset();
    }
});
const message = document.getElementById("message");
form.addEventListener("submit",function(event){
    event.preventDefault();
    message.textContent="your response has been recorded.";
    message.style.color="green";
    form.reset();
});

