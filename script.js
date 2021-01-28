// Phone adding

const phonePlus = document.getElementById("phone-plus");
    phonePlus.addEventListener("click", function (){

        const current = document.getElementById("phoneQuantity").value;
        const currentNumber = parseFloat(current);
        let total = currentNumber + 1 ;
        document.getElementById("phoneQuantity").value = total;
        
        const phonePrice = document.getElementById("phonePrice").innerText;
        const phonePriceNumber = parseFloat(phonePrice);
        let totalPhonePrice = phonePriceNumber + 1219 ;
        document.getElementById("phonePrice").innerText = totalPhonePrice;

    } )

// Phone minus

const phoneMinus = document.getElementById("phone-minus");
    phoneMinus.addEventListener("click", function(){

        const currentMinus = document.getElementById("phoneQuantity").value;
        const currentMinusNumber = parseFloat(currentMinus);
        let totalMinus = currentMinusNumber - 1 ;
        document.getElementById("phoneQuantity").value = totalMinus;

        const phonePriceMinus = document.getElementById("phonePrice").innerText;
        const phonePriceMinusNumber = parseFloat(phonePriceMinus);
        let totalPhoneMinusPrice = phonePriceMinusNumber - 1219 ;
        document.getElementById("phonePrice").innerText = totalPhoneMinusPrice;

    })

// Cover add

const coverPlus = document.getElementById("cover-plus");
        coverPlus.addEventListener("click", function (){

        const currentCover = document.getElementById("coverQuantity").value;
        const currentCoverNumber = parseFloat(currentCover);
        let coverTotal = currentCoverNumber + 1 ;
        document.getElementById("coverQuantity").value = coverTotal;
        
        const coverPrice = document.getElementById("coverPrice").innerText;
        const coverPriceNumber = parseFloat(coverPrice);
        let totalCoverPrice = coverPriceNumber + 59 ;
        document.getElementById("coverPrice").innerText = totalCoverPrice;

    } )

// cover minus

const coverMinus = document.getElementById("cover-minus");
    coverMinus.addEventListener("click", function(){

        const currentCoverMinus = document.getElementById("coverQuantity").value;
        const currentCoverMinusNumber = parseFloat(currentCoverMinus);
        let totalCoverMinus = currentCoverMinusNumber - 1 ;
        document.getElementById("coverQuantity").value = totalCoverMinus;

        const coverPriceMinus = document.getElementById("coverPrice").innerText;
        const coverPriceMinusNumber = parseFloat(coverPriceMinus);
        let totalcoverMinusPrice = coverPriceMinusNumber - 59 ;
        document.getElementById("coverPrice").innerText = totalcoverMinusPrice;

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