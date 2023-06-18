const search = ()  =>{
    const searchbox =document.getElementById('search_item').value.toUpperCase();
    const storeItems = document.querySelector(".product_list");
    const product =document.querySelectorAll(".product");
    const productName = storeItems.getElementsByTagName("h2");

    for(let i = 0; i < productName.length; i++){
        let match = product[i].getElementsByTagName("h2")[0];

        if(match){
           let textValue = match.textContent || match.innerHTML

            if(textValue.toUpperCase().indexOf(searchbox) > -1) {
                product[i].style.display = "";
            } else {
                product[i].style.display ="none";
            }
        }
    }
}