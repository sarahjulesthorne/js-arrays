console.log(`Hello?`);
const dinosaurs = [
    {
        dinoType: 'long-neck',
    },
{
    dinoType: 'sharp teeth',
},
{
    dinoType: 'winged',
}];
const printToDom = (divId, textString) => {
const selectedDiv = document.getElementById(divId);
selectedDiv.innerHTML = textString;
};
const buildDinosaurs = () => {
    let domString = '';
for (let i = 0; i < dinosaurs.length; i++) {
//console.log(dinosaurs[i].dinoType);
domString += `<h3>${dinosaurs[i].dinoType}</h3>`;

}
printToDom('dino-barn', domString);
};
const init =    () => {
buildDinosaurs();
};
init();
