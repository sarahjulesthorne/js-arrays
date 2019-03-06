console.log(`Hello?`);
const dinosaurs = [
    {
        dinoType: 'long-neck',
        name: 'Fluffy',
    },
{
    dinoType: 'sharp teeth',
    name: 'Goober',
},
{
    dinoType: 'winged',
    name: 'Nice',
}];
const printToDom = (divId, textString) => {
const selectedDiv = document.getElementById(divId);
selectedDiv.innerHTML = textString;
};
const buildDinosaurs = () => {
    let domString = '';
for (let i = 0; i < dinosaurs.length; i++) {
//console.log(dinosaurs[i].dinoType);
domString += `<div class='dinosaur'>`;
domString += `<h3>${dinosaurs[i].dinoType}</h3>`;
domString += `<p>${dinosaurs[i].name}</p>`;
domString += `</div>`;

}
printToDom('dino-barn', domString);
};
const assignments = [
    {
        title: 'product-cards',
        dueDate: '03/05/2019',
        topic: 'html/css',
        notes: 'Use flexbox',
        assignmentURL: 'www.google.com',
    },
    {
        title: 'test-repository',
        dueDate: '03/04/2019',
        topic: 'test github repos',
        notes: 'Create practice repository with boilerplate HTML',
        assignmentURL: 'www.twitter.com',
    },
    {
        title: 'JS-arrays',
        dueDate: '04/07/2019',
        topic: 'JavaScript Arrays',
        notes: 'Create arrays in JavaScript',
        assignmentURL: 'www.facebook.com',
    },
    {
        title: 'js-functions',
        dueDate: '05/09/2019',
        topic: 'JavaScript functions',
        notes: 'Learn about functions in JavaScript',
        assignmentURL: 'www.tumbler.com',
    },
    {
        title: 'Assignment-5',
        dueDate: '05/05/2019',
        topic: 'Anything you like',
        notes: 'Learn about code',
        assignmentURL: 'www.reddit.com',
    },
];
let domString = '';
const buildassignmentCards = () => {
//console.log(assignments[1].topic);
for (let i = 0; i < assignments.length; i++) {
domString += `<div class='card'>`;
domString += `<h1 class='title'>${assignments[i].title}</h1>`;
domString += `<p class='due-date'>${assignments[i].dueDate}</p>`;
domString += `<p>Get the assignment <a href=${assignments[i].assignmentURL}>here</a></p>`;
domString += `<p>Topic: ${assignments[i].topic}</p>`;
domString += `<p>Notes: ${assignments[i].notes}</p>`;domString += `</div>`;
domString += `</div>`;

}
printToDom('assignments', domString);
};
const init =    () => {
buildDinosaurs();
buildassignmentCards(); 
};
init();
