// array element ol list push korar function
const arrayName = [];

const olList = document.getElementById('olList');

function displayName(names){
    olList.innerText = '';
    for (let name of names) {
        const element = name;
        const li = document.createElement('li');
            li.innerText = `${element}`;
            olList.appendChild(li);

    }
}

//btn seclect function
function selectBtn(xyz){
    const selectName = xyz.parentNode.parentNode.children[0].innerText;
    if(arrayName.length >= 5){
        alert('Not selected your player')
    }else{
        arrayName.push(selectName);
        xyz.classList.add('disabled');
    }
    displayName(arrayName);
}

//input field value seclect function
function selectIdValue(id){
    const inputField = document.getElementById(id);
    const playerTotal = parseFloat(inputField.value);
    return playerTotal;
}
//output er id seclect function
function outputText(output){
    const playerExpress = document.getElementById(output);
    return playerExpress;
}

//total player seclect function
function totalPlayer(){
    const inputField = selectIdValue('inputField') * arrayName.length;
    return inputField;
}

document.getElementById('calculate').addEventListener('click', function(){
    const inputField = totalPlayer();
    outputText('playerExpress').innerText = `Player Expenses : ${inputField}`;
})

document.getElementById('calculateTotal').addEventListener('click', function(){
    const inputField = totalPlayer();
    const managerPrice = selectIdValue('managerPrice');
    const coachPrice = selectIdValue('coachPrice');
    const calculateTotalPrice = inputField + managerPrice + coachPrice;
    outputText('totalPriceId').innerText = `${calculateTotalPrice}`;

})












