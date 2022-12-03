
          console.log(`******3rd exersis House price****`);
        //1st Way
      /*   function volumeInMetersClac(deep, hight, wide) {
            const volumeInMeters = deep * wide * hight;
            return volumeInMeters
        }
  function housePriceCalc(volumeInMeters, gardenSizeInM2) {
            const housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
            return housePrice
        }
        //peter
        const petervolumeInMeters = volumeInMetersClac(10, 8, 10)
        const peterhousePriceCalc = housePriceCalc(petervolumeInMeters, 100)
        console.log(petervolumeInMeters);
        console.log(peterhousePriceCalc);
        const peterpayment = 2500000
        if (peterhousePriceCalc > peterpayment) {
            console.log(`Peter paied too much  `);
        }else 
          console.log(`Peter paied too little  `);

*/
///////////////////////////////////////////////////////////////////
          //2nd Way with object
          const housePeter ={
            name:"Peter",
            deep:8,
            wide:10,
            hight:10,
            gardenSizeInM2:100,
            housecosts:2500000,
   
            
            housePice:function(){
                    let housevolumes = this.deep * this.wide * this.hight;
                    const housePriceCalc = housevolumes * 2.5 * 1000 + this.gardenSizeInM2 * 300;
                    return housePriceCalc
                 }
            //      housevolumes:function(deep,wide,hight){
            //     let volume = deep * wide * hight;
            //      return volume
            //      },
                
            //  housePice:function(housevolumes,gardenSizeInM2){
            //         const housePiceCalc = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
            //         return housePiceCalc
            //      }
            

          }
          const houseJulia ={
            name:"Julia",
            deep:5,
            wide:11,
            hight:8,
            gardenSizeInM2:70,
            housecosts:1000000,
            housePice:function(){
                    let housevolumes = this.deep * this.wide * this.hight;
                    const housePriceCalc = housevolumes * 2.5 * 1000 + this.gardenSizeInM2 * 300;
                    return housePriceCalc
                 }

                }
    
    //peter

    if (housePeter.housePice()>housePeter.housecosts){
        console.log(`${housePeter.name} is paying too much `);
    }
    else {
        console.log(`${housePeter.name} is paying too little `);
    }
    // print Peter info
    console.log(`My name is ${housePeter.name}  and my house info is ${housePeter.deep} deep${housePeter.wide} wide ,${housePeter.hight} hight and my garden Size is  ${housePeter.gardenSizeInM2} `);

  
  //Julia
  if (houseJulia.housePice()>houseJulia.housecosts){
        console.log(`${houseJulia.name} is paying too much `);
    }
    else {
        console.log(`${houseJulia.name} is paying too little `);
    }

    
    console.log(`My name is ${houseJulia.name}  and my house info is ${houseJulia.deep} deep${houseJulia.wide} wide ,${houseJulia.hight} hight and my garden Size is  ${houseJulia.gardenSizeInM2} `);
   console.log(houseJulia.housePice());



   console.log(`-------------------------------`);

