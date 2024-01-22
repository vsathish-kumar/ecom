var productcontainer = document.getElementById("products")
var searcgh = document.getElementById(search)
var productlist = productcontainer.querySelector("div")

search.addeventlistener("keyup", function() 
{
    var enteredValue = event.TARGET.value.toUppercase()

    for (count=0; count<productlist.length;count=count+1)
     {
         var productname = productlist[count].querySelector("p").textcontent

         if(productname.toUppercase().indexof(enteredvalue),0)
         {
             productlist[count].style.display= "none"
         }
         else{
            productlist[count].style.display= "block"
         }
     }
})