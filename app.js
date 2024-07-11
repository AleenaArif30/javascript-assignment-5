var firstname = prompt("ENTER YOUR FIRST NAME");
var lastname = prompt('ENTER YOUR LAST NAME');
var fullname = firstname + lastname;
alert("  welcome  " + fullname + "  !");

var mobile = prompt("Enter your favorite mobile phone modle");
document.write("Your favorite moblie phone modle is " + mobile + "!");
document.write("<br>");
document.write("Length of string is " + mobile.length);
document.write("<br>");
var city = "Pakistan";
document.write("string: " + city);
document.write("<br>");
var index = city.indexOf("n");
document.write("index of n is " + index);
document.write("<br>");

var word = "Hello world";
var index = word.lastIndexOf("l");
document.write("string; " + word + "<br> " + "last indexof 'l' is  " + index);
document.write("<br>");


var city = "Pakistan";
var char = city.charAt(3);
document.write("string; " + city + "<br> " + "charater at index  '3' is  " + char);
document.write("<br>");


var firstname = prompt("ENTER YOUR FIRST NAME");
var lastname = prompt('ENTER YOUR LAST NAME');

alert("  welcome  " + firstname + lastname + "  !");
document.write("<br>")

var city = "Hyderabad";
var newcity = city.replace("Hyder", "Islam");
document.write("city " + city + "<br> " + "after replacement is  : " + newcity);
document.write("<br>");

var message = "Ali and Sami are best friends. They play cricket and football together;"
var newmessage = message.replace(/and/g, "&");
document.write("message  !   " + message + "<br> " + "after replacement is  : " + newmessage);
document.write("<br>");

var num = 472;
document.write("value:" + num + "<br>" + "Type!  " + typeof (num));
document.write("<br>");
var convert = num.toString();
document.write("value:" + num + "<br>" + "Type!   " + typeof (convert));
document.write("<br>");

var userinput = prompt("Enter any dryfruite name ");
var convertincapital = userinput.toUpperCase();
alert(convertincapital);

var input = prompt("enter your current programming language");
var change = input.slice(0, 1);
var change = change.toUpperCase();
var change1 = input.slice(1);
var change1 = change1.toLowerCase();
var final = change + change1;
document.write(input + "<br> " + final);
document.write("<br>");

var num = 35.67;
var convert = num.toString().replace(".", "");

document.write(num + "! " + "<br>" + "string! " + convert);

document.write("<br>"); document.write("<br>");

var password = prompt("Enter a password:")
if (password.length < 6) {
    alert("Password must be atleast 6 characters long!")
} else {
    if (password.charCodeAt(0) >= 48 && password.charCodeAt(0) <= 57) {
        alert("Password must not start from number")
    } else {
        var hasAlphabet = false;
        var hasNumber = false;
        for (var i = 0; i < password.length; i++) {
            var charCode = password.charCodeAt(i)
            if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
                hasAlphabet = true;
            } else if (charCode >= 48 && charCode <= 57) {
                hasNumber = true;
            }
        }
        if (hasAlphabet && hasNumber) {
            alert("Valid Password")
        } else {
            alert("Password must contain both alphabet and numbers!")
        }
    }
}


var menu = ["cake", "apple pie", "cookies", "chips", "patties"]
var user = prompt("welcome to our bakery . what do you bwant to order sir/mam");
user = user.toLowerCase();
var matchfound = false;
for (i = 0; i < menu.length; i++) {
    if (menu[i] === user) {
        matchfound = true;



        alert(user + "  is availabe at index  " + [i] + " in our bakkery");
        break;
    }
}

if (matchfound == false) {
    alert("we are sorry " + user + " is not avalable in our bakery ");
}

var uni = "university of karachi";
var array = uni.split('');
console.log(array);
for (var i = 0; i < array.length; i++) {
    document.write(array[i] + "<br>");
}

var user = prompt("Enter city name");
var last = user.charAt(user.length - 1);
alert(last);


var sentence = "The quick brown fox jumps over the lazy dog";


var lowerCaseSentence = sentence.toLowerCase();

var searchTerm = "the";


var words = lowerCaseSentence.split(' ');

var count = 0;


for (var i = 0; i < words.length; i++) {
    if (words[i] === searchTerm) {
        count++;
    }
}

document.write(sentence + "<br>" + "the occurance of 'the 'in the sentence is " + count);


var password = prompt("Enter a password");
for (var i = 0 ; i<password.length;i++){
    var asciicode = password.charCodeAt(i);
    if(asciicode===33||asciicode===44||asciicode===46||asciicode===64){
        alert("password does not contain any special character")
        
    }


}