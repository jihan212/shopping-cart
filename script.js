// Phone adding

const phonePlus = document.getElementById("phone-plus");
    phonePlus.addEventListener("click", function (){
        productHandler(true);
    } )

// function for product handler 
function productHandler (isPlus){
    const current = document.getElementById("phoneQuantity").value;
    const currentNumber = parseInt(current);
    let total = currentNumber;
    if ( isPlus == true ){
        total = currentNumber + 1 ;
    } 
    if ( isPlus == false ){
        total = currentNumber - 1 ;
    }
    document.getElementById("phoneQuantity").value = total;

    let totalPhonePrice = total* 1219 ;
    document.getElementById("phonePrice").innerText = '$'+ totalPhonePrice;
    return totalPhonePrice;
}


// Phone minus

const phoneMinus = document.getElementById("phone-minus");
    phoneMinus.addEventListener("click", function(){
        productHandler(false);
    })

// Cover add

const coverPlus = document.getElementById("cover-plus");
        coverPlus.addEventListener("click", function (){

        const currentCover = document.getElementById("coverQuantity").value;
        const currentCoverNumber = parseFloat(currentCover);
        let coverTotal = currentCoverNumber + 1 ;
        document.getElementById("coverQuantity").value = coverTotal;

        let totalCoverPrice = coverTotal * 59 ;
        document.getElementById("coverPrice").innerText = '$'+ totalCoverPrice;

    } )

// cover minus

const coverMinus = document.getElementById("cover-minus");
    coverMinus.addEventListener("click", function(){

        const currentCover = document.getElementById("coverQuantity").value;
        const currentCoverNumber = parseFloat(currentCover);
        let coverTotal = currentCoverNumber - 1 ;
        document.getElementById("coverQuantity").value = coverTotal;

        let totalCoverPrice = coverTotal * 59 ;
        document.getElementById("coverPrice").innerText = '$'+ totalCoverPrice;

    })



// total price 

const checkOut = document.getElementById("checkOut");
    checkOut.addEventListener("click", function(){
        const mobilePrice = document.getElementById("phoneQuantity").value;
        const mobilePriceNumber = parseInt(mobilePrice);

        const casePrice = document.getElementById("coverQuantity").value;
        const casePriceNumber = parseInt(casePrice);

        let totalPrice = mobilePriceNumber*1219 + casePriceNumber*59;
        document.getElementById("subTotalPrice").innerText = totalPrice;
        document.getElementById("totalPrice").innerText = totalPrice;
    })