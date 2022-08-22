

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


function selectIdValue(id){
    const inputField = document.getElementById(id);
    const playerTotal = parseFloat(inputField.value);
    if(isNaN(playerTotal)){
        alert('Please type of number !!');
        return;

    }else{
        return playerTotal;
    }
    
    
}

function outputText(output){
    const playerExpress = document.getElementById(output);
    return playerExpress;
}

document.getElementById('calculate').addEventListener('click', function(){
    const inputField = selectIdValue('inputField') * 5;
    outputText('playerExpress').innerText = `Player Expenses : ${inputField}`;
    // inputField.value = '';
    
})


document.getElementById('calculateTotal').addEventListener('click', function(){
    const inputField = selectIdValue('inputField') * 5;
    const managerPrice = selectIdValue('managerPrice');
    const coachPrice = selectIdValue('coachPrice');
    const calculateTotalPrice = inputField + managerPrice + coachPrice;
    outputText('totalPriceId').innerText = `${calculateTotalPrice}`;

})











