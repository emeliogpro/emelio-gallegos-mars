//get body
const body = document.body;

//Create footer element
const footerElement = document.createElement("footer");
body.appendChild(footerElement)

//Dates
const today = new Date();
const thisYear = today.getFullYear();

///querySelector from DOM
const footer = document.querySelector("footer");

//Paragraph
const copyright = document.createElement("p");
copyright.innerText = `© Emelio Gallegos ${thisYear}`;

//Append <p> to footer
footer.appendChild(copyright);

//-------Skills section-------------

const skills = ["JavaScript", "HTML", "CSS", "GitHub"];
const skillsSection = document.querySelector("#skills");
const skillsList = skillsSection.querySelector("ul");

//Loop
for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement("li");

    skill.innerText = skills[i];

    skillsList.appendChild(skill);
}

//-----Leave a Messages/Messages section----------

const messageForm = document.querySelector('form[name="leave_message"]');

messageForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = event.target.usersName.value;
    const email = event.target.usersEmail.value;
    const message = event.target.usersMessage.value;

    console.log(name, email, message);

    const messageSection = document.querySelector("#messages");
    const messageList = messageSection.querySelector("ul");
    const newMessage = document.createElement("li");
    newMessage.innerHTML = `
        <a href="mailto:${email}">${name}</a>
        <span> ${message}</span>
        `;

    const removeButton = document.createElement("button");
    removeButton.innerText = "remove";
    removeButton.type = "button";

    removeButton.addEventListener("click", function(){
        const entry = removeButton.parentNode;
        entry.remove();
    });

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);

    messageForm.reset();
});