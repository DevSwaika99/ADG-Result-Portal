document.querySelector("#search").addEventListener('click',searchText);
document.querySelector(".cancel").addEventListener('click',clearText);
document.querySelector('.input').addEventListener('keyup',function(event){
    if (event.keyCode === 13) {
   event.preventDefault();
   document.querySelector("#search").click();
  }
});

function searchText(){
    document.querySelector("#search").disabled =true;
    output=""
    var search=document.querySelector('.input').value.toUpperCase();
    const adg = `http://adgrecruitments.herokuapp.com/user/getResult?regno=${search}`;
    fetch(adg)
    .then(function(res){
      return res.json();
    })
    .then(function(data){
        if (data.message=='User does Not Exist'){
            if (search==''){
                output+=`<h1 class="nfound">Please enter a Registration number<h1>`;
            }
            else{
                output+=`<h1 class="nfound">${data.message}<h1>`;
            }
        }
        else if (data.message=='Hey, you missed it by a narrow margin. All the best for future endeavours!'){
            output+=`<h1 class="found_1">${data.message}<h1>`;
        }
        else if (data.message=='Hey, you missed it by a narrow margin. See you next year. Till then keep hustling.'){
            output+=`<h1 class="found_1">${data.message}<h1>`;
        }
        else {
            output+=`<div class="container info">      
            <p>
                ${data.message}
            </p> 
            </div>`;
        }
        document.querySelector('.output').innerHTML=output;
        document.querySelector("#search").disabled=false;

    });
}

function clearText(){
    document.querySelector('.output').innerHTML='';
    document.querySelector('.input').value='';
}