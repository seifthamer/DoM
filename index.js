/* declaration du button (+) */
var plus = document.querySelectorAll(".btnplus");

/* declaration du inputs quantité */
var quantite = document.querySelectorAll(".sum");

/* declaration du button (-) */
var moin = document.querySelectorAll(".btnmoin");
console.log(moin)

/* declaration du input total */
var TOT = document.querySelector('.TOT');
console.log(TOT)

/* declaration du input du price  */
var price = document.querySelectorAll('.price');
console.log(price)

/* declaration delete */
var dlt = document.querySelectorAll('.dlt')
 
/*  button (+) */
    for( let i = 0 ; i < plus.length ; i++ ){
    plus[i].addEventListener("click", () => {
    +quantite[i].value++;
    TOT.value = (+TOT.value + (+price[i].value))
    console.log(TOT.value)
});
};
/*  button (-) */
    for (let i = 0 ; i < moin.length ; i++ ){
    moin[i].addEventListener("click" , () => {
        if(+quantite[i].value > 0){
            +quantite[i].value--;
            TOT.value = (+TOT.value - (+price[i].value))
    console.log(TOT.value)
        }  ;  
        
    
});
};

for (let i = 0 ; i < dlt.length ; i++){
    dlt[i].addEventListener('click', ()=>{
        dlt[i].parentElement.parentElement.parentElement.remove()
        TOT.value = +TOT.value - +price[i].value * +quantite[i].value
    })
}


