  /* // window.onclick=(e)=>{alert(e.target.className)}
  var container = document.querySelector(".container");
  var result = document.querySelector(".result"); 
  var size   = document.querySelectorAll(".size [type=radio]");
  size.forEach((r)=>{
    r.onclick=()=>{  
      if(r.checked==true){
        var rsz = Number(r.value);
        iframe.style.width=rsz+'px';
        container.style.width=rsz+'px';
        
        if(Number(r.value) < 400){
          rsz += 66;
          document.querySelector(".sizes").style.height='100px';      
          iframe.style.width=rsz-7+'px';
          result.style.top = '170px';  
        }else{
          rsz = r.value;
          result.style.top = '120px';
          document.querySelector(".sizes").style.height='60px';
          iframe.style.width=rsz+'px';
        }
        
        document.querySelector(".sizes").style.width=rsz+'px';
        document.querySelector(".search").style.width=rsz+'px';       
         
        // alert(window.innerWidth)     
        alert(container.style.width)    
      }
    }
  });
  // alert(window.innerWidth)
  */
  iframe.src='responsive.html';
  btn.onclick=()=>{iframe.src=input.value;}