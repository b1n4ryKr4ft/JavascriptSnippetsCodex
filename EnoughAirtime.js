function enoughAirtime(myUsage, myAirtime) {
    const callCharge = 1.88;
    const dataCharge = 12;
    const smsCharge = 0.75;
  
    var callCounter = 1;
    var dataCounter = 1;
    var smsCounter = 1;
  
    var usageArray = myUsage.split(",");
    for (var i = 0; i < usageArray.length; i++) {
  
      switch (usageArray[i]) {
        case "call":
  
          if (myAirtime >= callCharge) {
            myAirtime -= callCharge;
          } else {
            console.log(`Your airtime of R ${myAirtime.toFixed(2)} is insufficient to make call number ${callCounter}.`)
          }
  
          callCounter++;
  
          break;
        case "data":
  
          if (myAirtime >= dataCharge) {
            myAirtime -= dataCharge;
          } else {
            console.log(`Your airtime of R ${myAirtime.toFixed(2)} is insufficient to buy data number ${dataCounter}.`)
          }
          dataCounter++;
  
          break;
        case "sms":
  
          if (myAirtime >= smsCharge) {
            myAirtime -= smsCharge;
          } else {
            console.log(`Your airtime of R ${myAirtime.toFixed(2)} is insufficient to send sms number ${smsCounter}.`)
          }
  
          dataCounter++;
  
          break;
      }
    }
    
    return (`R ${myAirtime.toFixed(2)}`);
  }
  
  
  console.log(enoughAirtime("call,call,data,call,sms", 10))
  