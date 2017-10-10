
# CIFRADO CAESAR

Vamos a proceder a encriptar y descencriptar mensajes, para lo que utilizaremos el *CIFRADO CAESAR*.

###### *Creamos una función denominada function cipher()*

La cual va a contener nuestro procedimiento de la siguiente manera:

Creamos una variable denominada *message* para solicitar al usuario por medio de un *prompt* el mensaje a encriptar condicionando de la siguiente manera:

* NO debe haber espacios en el contenido del mensaje
* NO debe contener números
* NO puede ser un mensaje vacío

Utilizaremos el método *for* para poder identificar las condicines en el mensaje ingresado recorriendo por todos los caracteres ingresados en el mensaje para detectar las condiciones antes mencionadas:

  for ( var i=0; i < message.length; i++ ){

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

De no presentarse lo antes mencionado se procedería a utilizar el método "charCodeAt" con el fin de obtener el código ASCII.

###### Una vez obtenida ésta numeración se procede aplicar la fórmula:
###### (x-65 + n) % 26 + 65

De ésta manera al haber obtenido el código ASCII podremos aplicar el método "fromCharCode".

De ésta manera obtendremos el mesaje decodificado.
