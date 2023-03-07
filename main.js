let title = document.getElementById("title")
let price = document.getElementById("price")
let taxes = document.getElementById("taxes")
let ads = document.getElementById("ads")
let discount = document.getElementById("discount")
let total = document.getElementById("total")
let count = document.getElementById("count")
let category = document.getElementById("category")
let submit = document.getElementById("submit")
let mood = 'creat';
let tep;


function gettotal()
{
  if(price.value!=" "){
    let result= +price.value + +taxes.value + +ads.value - +discount.value;
    total.innerHTML=result
    total.style.background="#040";
  }else{
    total.innerHTML=" ";
    total.style.background="#a00d02";
  }


}


let databro;
if(localStorage.product !=null){
}


submit.onclick = function(){

let newpro ={
title:title.value,
price:price.value,
taxes:taxes.value,
ads:ads.value,
discount:discount.value,
total:total.innerHTML,
count:count.value,
category:category.value,
}
if(title.valur!= '' &&price.value !=''&&category.value!=''&&newpro.count<100){
  if(mood==='creat'){
    if(newpro.count > 1){
      for(let i = 0; i < newpro.count;i++){
        datapro.push(newpro);
      }  
  }else{
    datapro[tep]=newpro;
    mood='creat';
    submit.innerHTML ='creat';
    count.style.display ='block';
  }
  
  }
cleardata()
}



localStorage.setItem("proudct",JSON.stringify(datapro))
console.log(datapro)

showdata()
}








let datapro;
if(localStorage.product != null){

datapro = JSON.parse(localStorage.product)

}else{
  datapro = [] ;
}

function showdata()
{
  gettotal()
let table =" ";
for(let i = 0; i < datapro.length;i++){
 table +=`
 
 <tr>
        <td>${i}</td>
        <td>${datapro[i].title}</td>
        <td>${datapro[i].taxes}</td>
        <td>${datapro[i].ads}</td>
        <td>${datapro[i].discount}</td>
        <td>${datapro[i].total}</td>
        <td>${datapro[i].category}</td>
        <td>${datapro[i]}</td>
        <td><button onclick="updateData(${i})" id="update">update</button></td>
        <td><button onclick="deleteData(${i})" id="delete">Delete</button></td>
        </tr>
 
 
 
 ` 

}
document.getElementById('tbody').innerHTML=table;
}


function deleteData(i)
{
datapro.splice(i,1);
localStorage.product = JSON.stringify(datapro)
showdata()
}

function deleteAll(){
  localStorage.clear()
datapro.splice(0)
showdata()
}

function updateData(i){
title.value=datapro[i].title;
price.value=datapro[i].price
taxes.value=datapro[i].taxes
ads.value=datapro[i].ads
discount.value=datapro[i].discount
gettotal()
count.style.display='none'
category.value=datapro[i].category
submit.innerHTML='update'
mood='update';
tmp= i;
scroll({
  top:0,
  behavior:'smooth',
})
}

function cleardata(){
title.value=' ';
price.value=' ';
taxes.value=' ';
ads.value=' ';
discount.value=' ';
total.innerHTML=' ';
count.value=' ';
category.value=' ';
}
    



