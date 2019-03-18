/*This project was an in class session about JavaScript arrays and looping over those arrays.
We constructed a basic array, print-to-dom function, and string-builder function set under instruction, using these tools to print information from our dinosaurs array to the DOM.
We then worked on the next array somewhat more by ourselves, although still with access to instructors and classmates for debugging help and review of steps, etc.
We recreated another string-builder function, which looped over the assignments array, and printed cards of fake assignments to the DOM.*/

//Array for practicing looping over arrays
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

//Function which selects div by id from HTML and prints text to it
const printToDom = (divId, textString) => {
const selectedDiv = document.getElementById(divId);
selectedDiv.innerHTML = textString;
};

//function which loops over the dinosaurs array and pulls information from it into a string of HTML, which the function then prints to the DOM using print function above.
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

//Array of fake assignments for practice with looping over arrays
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

//function which loops over the assignments array, pulls information from that array, builds  that information into a string of HTML, and prints that string to the DOM.
const buildassignmentCards = () => {
let domString = '';
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

//Initialize function which calls page load functions
const init =    () => {
buildDinosaurs();
buildassignmentCards(); 
};
init();
