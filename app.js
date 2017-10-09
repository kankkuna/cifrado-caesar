function cipher () { 

     var message = prompt("Ingresa el mensaje a cifrar"); {
       var newmessage = [i];
        for ( var i=0; i < message.length; i++ ){

       if (message[i]==="") {
       return prompt("No ingresó mensaje, ingrese nuevamente mensaje a cifrar");
            }
          while (parseInt(message[i]) % 1 === 0) {
      return prompt("El mensaje solo debe contener letras");
          }
          while (message[i]===" "){
        return prompt("El mensaje no debe contener espacios");
     }
          }
   arr = "";
}
for (var j = 0; j < arr.length; j++) {
   if (arr[j] === '') {
   arr += ' ';
   } else
      arr += String.fromCharCode(( arr.charCodeAt(j) - 65 + 33) % 26 + 65);
  }
str = "";
}

cipher();
