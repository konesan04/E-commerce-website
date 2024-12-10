var productContainer = document.getElementById("products")
var search = document.getElementById("search")
var productlist = productContainer.querySelectorAll("div")

search.addEventListener("keyup",function(event){
    var enteredValue = event.target.value.toUpperCase()

    for(count=0;count<productlist.length;count=count+1)
    {
        var productname=productlist[count].querySelector("P").textContent

        if(productname.toUpperCase().indexOf(enteredValue)<0)
        {
            productlist[count].style.display="none"
    
        }
        else{
           productlist[count].style.display="block"
        }
    } 
})