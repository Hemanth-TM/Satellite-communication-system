let imgArray = ["./images/dream2.jpg","./images/dream3.jpg","./images/dream4.jpg","./images/dream5.jpg"];

let imageElem = document.getElementById('imageElem');

let count = 0;

const nxtImg = () =>{

count++;

if(count == 4){

count = 0;
}
console.log(imgArray[count]);
 imageElem.src=imgArray[count];
}

const backImg = () =>{
count--;

if(count == -1){

count = 3;
}
console.log(imgArray[count]);
 imageElem.src=imgArray[count];
}

 function vk(){
    let gok=document.getElementById('vnb').value;
    console.log(gok);
    document.getElementById('uol').innerHTML=gok;
 }


 












 