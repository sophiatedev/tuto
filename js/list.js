 let entrenom = document.getElementById('entrenom');
 let btn = document.getElementById('btn');
 let liste = document.querySelector('.liste');
 let error = document.querySelector('.error')
 btn.addEventListener('click',function (e) {
    e.preventDefault();
    if (entrenom.value.trim()=== '') {
    error.textContent ='veilleur remplir le champ';
        
    } else {
      let divs = document.createElement('div');
      divs.classList.add('divli');
      liste.appendChild(divs)
        let li = document.createElement('li');
       li.style.listStyleType = 'none';
       li.classList.add('lis');
      let checkbox = document.createElement('input');
     checkbox.type ='checkbox';

     divs.appendChild(checkbox);
   
   

 li.appendChild(document.createTextNode(entrenom.value));


 divs.appendChild(li);
 
 


 let span = document.createElement('span');
 span.textContent='Modifier';
span.classList='modifier';

 let spans = document.createElement('span');
 spans.textContent='Supprimer';
 spans.classList='supprimer';

 divs.appendChild(span);
 divs.appendChild(spans);

 spans.addEventListener('click',function () {
    liste.removeChild(divs);
 });
 
 
 span.addEventListener('click',function () {
   entrenom.value = li.textContent.trim();
   liste.removeChild(divs);
 if (ajouter!== null && ajouter.trim()!== '') {

    li.textContent = ajouter.trim();
    divs.appendChild(checkbox);
    divs.appendChild(li);
    divs.appendChild(span);
    divs.appendChild(spans);
    liste.appendChild(divs);
 
 } 
 });

 checkbox.addEventListener('click', function () {
    if(checkbox.checked){
       divs.style.border = "1px solid green";
       divs.style.backgroundColor = " rgb(178, 250, 178)";
      
     
        
     }else{
        divs.style.border = "1px solid orange"; 
        divs.style.backgroundColor = " transparent";
      

     }
    
 })
 

 entrenom.value='';
error.textContent = '';
    }
 

 
    
 })
