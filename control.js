function Books(name, price, auther, email) {
  this.name = name;
  this.price = price;
  this.auther = auther;
  this.email = email;
} //class


let box = document.getElementsByTagName("article")[0];
var repet = 0;
var num = 1;
var bookInfo = [];

document.getElementsByTagName("button")[0].addEventListener(
  "click",
  function () {
    const checkNum = document.getElementsByTagName("input")[0];

    if (checkNum.value < 1 || checkNum.value > 10 || checkNum.value == ""){
      checkNum.value = "";

      box.innerHTML = "the Number should be less than 10";
    } else {
      repet = checkNum.value;
      box.innerHTML = "";
      add();
      checkNum.value = '';
    }
  } //  fun
); //event

function add() {
  document.getElementsByTagName("h3")[0].innerHTML = `the Book number ${num}`; 
  document.getElementsByTagName("main")[0].style.display = "none";
  document.getElementsByTagName("section")[0].style.display = "flex";
} //add

//   slider

let count = 0;
setInterval(() => {
  let photoArr = ["4.jpeg", "2.jpeg", "3.jpeg", "5.jpeg", "6.jpg"];
  let photo = document.getElementById("slider").style;

  if (count == photoArr.length) {
    count = 0;
  }

  photo.backgroundImage = `url(images/${photoArr[count++]})`;
}, 7000);

// form vaildation

document.querySelectorAll("form input[type='button']")[0].addEventListener("click", function(){

  
   

    var data = document.querySelectorAll("form input");
    var place = document.querySelectorAll("form article");
    var ptn = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;
    var open = 0;

    //1
    if (isFinite(data[0].value)) {
      place[0].innerHTML = "you must enter the book name correctly";
    } //if one
    else {
      open++;
      place[0].innerHTML = "";
    }

    //2
    if (data[1].value == "" || isNaN(data[1].value)) {
      place[1].innerHTML = "you must enter the price correctly";
    } //if tow
    else if (data[1].value > 500 || data[1].value < 1) {
      place[1].innerHTML =
        "the price should be less than 500$ and more than 0$";
    } else {
      open++;
      place[1].innerHTML = "";
    } //else 2

    //3
    if (isFinite(data[2].value)) {
      place[2].innerHTML = "you must enter the auther name correctly";
    } //if three
    else {
      open++;
      place[2].innerHTML = "";
    } //else 3

    //4
    if (ptn.test(data[3].value) == false) {
      place[3].innerHTML = "you must enter the auther email correctly";
    } //if three
    else {
      open++;
      place[3].innerHTML = "";
    } //else 4

    var newClass = 0;
    if (open == 4) {
      bookInfo.push( new Books(data[0].value, data[1].value, data[2].value, data[3].value));    
      num++ // the number of created books
      document.getElementsByTagName("h3")[0].innerHTML = `the Book number ${num}`;
      
      for(let i = 0 ; i < 4 ; i++){
        data[i].value = ""; 
      }

      creat();
      if( num > repet ){
        show()
        num = 1 ;     
      }//if

    } // vaildation fun
  }); //event

document.querySelectorAll("form input[type='button']")[1].addEventListener("click",show)



function show(){
  num = 1
  document.getElementsByTagName("section")[0].style.display = "none";
  document.getElementsByTagName("footer")[0].style.display = "flex";
  if ( innerWidth < 600  ){
    alert(' plese make your mobile in landscape position ')
   }

}
  


function creat() {
  var bookTotal = bookInfo.length;
  var list = document.createElement("ul");
  list.innerHTML = `<li> ${bookInfo[bookTotal - 1].name} </li>
                            <li> ${bookInfo[bookTotal - 1].price}</li>
                            <li> ${bookInfo[bookTotal - 1].auther}</li>
                            <li> ${bookInfo[bookTotal - 1].email} </li>
                            <li><button onclick="edit(event)" > Edit </button> </li>
                            <li><button onclick="delet(event)"> delete</button> </li>`;
  document.getElementsByClassName("item")[0].appendChild(list);
} //creat

var icon;
function edit(ev) {
  el = ev.target;
  var ul = el.parentElement.parentElement;
  var row = [...ul.parentElement.children].indexOf(ul) - 1; //3 = 0 in array


  icon = ul.getElementsByTagName("li");

  icon[0].innerHTML = "<input type='text'  value=" + bookInfo[row].name + "> ";
  icon[1].innerHTML = "<input type='text'  value=" + bookInfo[row].price + "> ";
  icon[2].innerHTML = "<input type='text'  value=" + bookInfo[row].auther + "> ";
  icon[3].innerHTML = "<input type='text'  value=" + bookInfo[row].email + "> ";
  icon[4].innerHTML = `<button onclick='save(event)'> save </button>  `;
  icon[5].innerHTML = `<button onclick='cancel(event)'> cancel </button>  `;
} //fun

function save(ev) {
  el = ev.target;
  var ul = el.parentElement.parentElement;
  var row = [...ul.parentElement.children].indexOf(ul) - 1; //
  icon = ul.getElementsByTagName("li");

  bookInfo[row].name = icon[0].getElementsByTagName("input")[0].value;
  bookInfo[row].price = icon[1].getElementsByTagName("input")[0].value;
  bookInfo[row].auther = icon[2].getElementsByTagName("input")[0].value;
  bookInfo[row].email = icon[3].getElementsByTagName("input")[0].value;
  cancel(ev);
} //save

function cancel(ev) {

  row = ev.target;
  var ul = row.parentElement.parentElement;
  var el = [...ul.parentElement.children].indexOf(ul) - 1; //3 = 0 in array



  icon = ul.getElementsByTagName("li");

  icon[0].innerHTML = bookInfo[el].name;
  icon[1].innerHTML = bookInfo[el].price;
  icon[2].innerHTML = bookInfo[el].auther;
  icon[3].innerHTML = bookInfo[el].email;
  icon[4].innerHTML = `<button onclick="edit(event)" > Edit </button>`;
  icon[5].innerHTML = `<button onclick="delet(event)"> delete</button> `;
}

function delet(el) {
  el = el.target;
  var ul = el.parentElement.parentElement;
  var index = [...ul.parentElement.children].indexOf(ul) -1 ; 

  ul.remove();
  bookInfo.splice(index, 1);

}

//event 
document.querySelectorAll("footer button")[0].addEventListener("click",function(){
         document.getElementsByTagName("footer")[0].style.display = "none";
         document.getElementsByTagName("main")[0].style.display = "block";
})



