

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
    console.log(selectNam1);
    const selectName = xyz.parentNode.parentNode.children[0].innerText;
    
    if(arrayName.length >= 5){
        alert('Not selected your player')
    }else{
        arrayName.push(selectName);
        
    }
    displayName(arrayName);
    
}














