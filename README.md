
# CIFRADO CAESAR

Se crea la función cipher() con elel fin de contener el mensaje a cifrar para luego decifrar con la  función decipher()

Por medio de un "prompt" se solicita al usuario ingresar el mensaje que desea cifrar por lo que se le condiciona a que el mensaje tenga las siguientes características:

NO espacios
NO debe contener números
NO puede ser un mensaje vacío

Al iniciar un ciclo "FOR" procederá a recorrer por todos los caracteres ingresados en el mensaje para detectar las condiciones antes mencionadas.

De no presentarse lo antes mencionado se procedería a utilizar el método "charCodeAt" con el fin de obtener el código ASCII.

##### Una vez obtenida ésta numeración se procede aplicar la fórmula:
# (x-65 + n) % 26 + 65

De ésta manera al haber obtenido el código ASCII podremos aplicar el método "fromCharCode".

De ésta manera obtendremos el código Ceasar.
