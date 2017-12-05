//Añadir un nuevo tweet...
//La fuente del evento para crear un nuevo tweet, es el botón submit.
var source1 = document.getElementById("submit-tweet");
//console.log(source1);
//Declaramos que estamos "escuchando" en busca de eventos.
source1.addEventListener("click", postTweet);

//Declaramos la función "postTweet"
function postTweet(event) {
  //Creamos un nuevo elemento (div) que contendrá el nuevo tweet.
  var div = document.createElement('div');
  var ref = document.getElementById("tweetpublished");
  var container = document.getElementById("tweetpublished");
  //Colocamos el nuevo div en su lugar en el body.
  container.insertBefore(div, container.childNodes[0]);
  //Le colocamos la clase correspondiente.
  div.classList.add("newTweet");
  //Creamos un p que irá dentro del div.
  var newP = document.createElement("p");
  //Buscamos el mensaje que fue colocado en el input.
  var message = document.getElementById("tweetbox").value;
  //console.log(message);
  //Colocamos el mensaje dentro del p.
  newP.innerText = message;
  //Agregamos el p al div.
  div.appendChild(newP);
  //Añadiendo impresión de hora exacta del tweet en párrafo nuevo
  var newP2 = document.createElement("p");
  //Asignando clase a impresión de horario
  newP2.classList.add("dateClass");
  var d = new Date();
  var x = document.getElementById("submit-tweet");
  //Horas, minutos y segundos
  var h = addZero(d.getHours());
  var m = addZero(d.getMinutes());
  var s = addZero(d.getSeconds());
  //Definiendo sintaxis del núevo párrafo
  var time = x.innerHTML = h + ":" + m + ":" + s;
  newP2.innerText = time;
  //Agregamos nuevo p al div.
  div.appendChild(newP2).appendChild(time);
}

//Añadiendo número "0" en horas de un solo dígito
function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

//Contador de carácteres...
//La fuente del evento para contar los carácteres es el input textarea.
var source2 = document.getElementById("tweetbox");
//Declaramos que estamos "escuchando" en busca de eventos.
source2.addEventListener("input", countCharacters);
//Creamos la función que contará el número de carácteres.
function countCharacters() {
  //Le indicamos que el límite de carácteres es 140.
  var maxLength = 140;
  var howManyCharacters = tweetbox.value.length;
  //Colocamos un if, que busque el length dentro del valor de tweet box si es menor o igual que el límite de carácteres.
  if (howManyCharacters <= maxLength) {
    //Actualizamos el span contador de carácteres con la resta del límite de carácteres menos el valor actual del tweetbox.
    charactercount.innerHTML = (maxLength - howManyCharacters) + " characters remaining";
  }
  //Colocamos otro if, que busque el length dentro del valor de tweet box si es mayor que el límite de carácteres.
  else if (howManyCharacters > maxLength) {
    //Actualizamos el span contador de carácteres con la resta del valor actual menos el límite de carácteres.
    charactercount.innerHTML = -(howManyCharacters - maxLength) + " characters remaining";
  }
}


//Desactivar un botón...
//Valor por default es true.
document.getElementById("submit-tweet").disabled = true;
//La fuente del evento para contar los carácteres es el input textarea.
var source3 = document.getElementById("tweetbox");
//Declaramos que estamos "escuchando" en busca de eventos.
source2.addEventListener("input", enabledisableButton);

//Hacemos la función enabledisableButton
function enabledisableButton() {
  if (tweetbox.value == '') { //Si está vacío, ejecutaremos disableButton
    disableButton();
  }
  if (tweetbox.value !== '') { //Si no está vacío, ejecutaremos enableButton
    enableButton();
  }
}
//Hacemos la función enableButton
function enableButton() {
  //Activamos el botón
  document.getElementById("submit-tweet").disabled = false;
}
//Hacemos la función disableButton
function disableButton() {
  //Desactivamos el botón
  document.getElementById("submit-tweet").disabled = true;
}



//Cambia de clase de acuerdo al número de carácteres...
//La fuente del evento para contar los carácteres es el input textarea.
var source4 =document.getElementById("tweetbox");
//Declaramos que estamos "escuchando" en busca de eventos. 
source4.addEventListener("input", whatClass);
//Creamos la función que contará el número de carácteres.
function whatClass (){
  //Le indicamos que el límite de carácteres es 140.
  var maxLength = 140;
  var howManyCharacters = tweetbox.value.length;
  if (howManyCharacters > maxLength){
    disableButton();
  }else if (howManyCharacters < 120) {
    var counter=  document.getElementById("charactercount");
    //Le colocamos la clase correspondiente.
    counter.classList.add("contador");
    //Quitamos la clase mayor de 120
    counter.classList.remove("contador120");
    //Quitamos la clase mayor de 130
    counter.classList.remove("contador130");
  }else if (howManyCharacters >= 120 && howManyCharacters <=130 ) {
    var counter=  document.getElementById("charactercount");
    console.log(counter);
    //Le colocamos la clase correspondiente.
    counter.classList.add("contador120");
    //Quitamos la clase default
    counter.classList.remove("contador");
    //Quitamos la clase mayor de 130
    counter.classList.remove("contador130");
  }else if (howManyCharacters >= 130) {
    var counter=  document.getElementById("charactercount");
    //Quitamos la clase mayor de 120
    counter.classList.remove("contador120");
    //Le colocamos la clase correspondiente.
    counter.classList.add("contador130");
    }
}


//Funcion auto-grow que toma como parámetro el elemento
function auto_grow(element) {
  //La altura por default del elemento es de 100px
  element.style.height = "100px";
  //La altura de elemento va a ser igual a la altura del scroll, más el scrol más el prefijo px.
  element.style.height = (element.scrollHeight)+"px";
}
