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
copyright.innerHTML = `Emelio Gallegos © ${thisYear}`;

//Append <p> to footer
footer.appendChild(copyright);

//-------Skills section-------------

const skills = ["JavaScript", "HTML", "CSS", "GitHub"];
const skillsSection = document.querySelector("#Skills");
const skillsList = skillsSection.querySelector("ul");

//Loop
for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement("li");

    skill.innerText = skills[i];

    skillsList.appendChild(skill);
}