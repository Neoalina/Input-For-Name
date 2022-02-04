buttonCheck.onclick=function() {
    let fullName=document.getElementById('fullName').value;
    let arr = fullName.split(' ');

    let name=document.getElementById('name');
    let patronymic=document.getElementById('patronymic');
    let surname=document.getElementById('surname');
    
    // for (let i=0; i<3; i++) {
    //     let res = arr[i].substr(0,1).toUpperCase()+arr[i].slice(1).toLowerCase();
    //     return res;
    // }
    
    name.innerHTML=arr[1].substr(0,1).toUpperCase()+arr[1].slice(1).toLowerCase();
    patronymic.innerHTML=arr[2].substr(0,1).toUpperCase()+arr[2].slice(1).toLowerCase();
    surname.innerHTML=arr[0].substr(0,1).toUpperCase()+arr[0].slice(1).toLowerCase();
}