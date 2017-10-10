function cipher () {
  var message = prompt("Ingresa el mensaje a cifrar");
  var newMessage = '';

  if (message==='') {
       alert("No ingresó mensaje, ingrese nuevamente mensaje a cifrar");
  }
  else{

    for ( var i=0; i < message.length; i++ ){
      if (parseInt(message[i])%1 === 0) {
        alert("El mensaje solo debe contener letras");
        break;
      }
      else{
        newMessage+= String.fromCharCode((message.charCodeAt(i)- 65 + 33)% 26 + 65);
      }
  }
  return newMessage;
}
}
cipher();
