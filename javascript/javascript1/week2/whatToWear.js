//What i have to wear 

function whatToWear(temp) {
     let clothes
    switch (true) {
           case (temp<5):clothes=" a waterproof jacket  and A hat and Sleeves ";
            break;
            case (temp<10):clothes="parka, biker jacket or leather jacket";
            break;
            case (temp<20):clothes="light wool, leather, waterproof fabrics.";
            break;
            case (temp<25):clothes="Slip Skirt + Boots + Suede Jacket";
            break;
    }
    return `You have to wear "${clothes}"`  
}
//with if
function whatToWearWithIf(temp) {
    let clothes
    if (temp <5) {clothes=" a waterproof jacket  and A hat and Sleeves ";
    
    }else if (temp < 10 && temp >=5){ clothes="parka, biker jacket or leather jacket";
    }else if (temp <= 15 && temp >=10){clothes="light wool, leather, waterproof fabrics.";
    }else if (temp >=20 ){clothes="light wool, leather, waterproof fabrics."; 
    }else clothes="Slip Skirt + Boots + Suede Jacket";
    return clothes

}
//Main
const clothesToWear=whatToWear(15)
console.log(clothesToWear);
console.log(whatToWear(7));
console.log(whatToWearWithIf(5));
console.log(whatToWearWithIf(16));

console.log("--------------------------------");
