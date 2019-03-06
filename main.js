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
const init =    () => {
buildDinosaurs();
};
init();
