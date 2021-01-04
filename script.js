document.querySelector(".search-btn").addEventListener('click',searchText);
document.querySelector(".cancel").addEventListener('click',clearText);
document.querySelector('.input').addEventListener('keyup',function(event){
    if (event.keyCode === 13) {
   event.preventDefault();
   document.querySelector(".search-btn").click();
  }
});

function searchText(){
        output=""
        flag=0;
        var search=document.querySelector('.input').value.toUpperCase();
        document.querySelector('.input').value=search;
        if (search=='') {
            output=`<h1 class="nfound">Please enter a valid Register Number<h1>`;
            flag=1;
            }
        
        else {
        if(search=='19MIS0411')
            {
            output+=`
            <div class="container info">      
            <p>
                Congratulations! You have been Shortlisted for Round 2 in the following Domains. 
            </p> 
            </div>
            `
            flag=1;
            }}

        if(flag==0)
        {
            output=`<h1 class="nfound">Sorry you were not Shortlisted. Try again next year !<h1>`;
        }
        document.querySelector('.output').innerHTML=output;
} 
         

function clearText(){
    document.querySelector('.output').innerHTML='';
    document.querySelector('.input').value='';
}