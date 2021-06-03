/*var name1 =  prompt("Enter the First Player Name");
// var name2 = prompt("Enter the second Player Name");*/
// document.querySelectorAll("p")[0].innerHTML= "Shersingh";
// document.querySelectorAll("p")[1].innerHTML= "Sherry";


// Number generator
var num1 = Math.random();
var num1 = Math.floor(num1*6)+1;
var num2 = Math.random();
var num2 = Math.floor(num2*6)+1;



// dice portion
var image1 = "dice"+num1+".png";

document.querySelectorAll("img")[0].setAttribute( "src", image1 ); 
var image2 = "dice"+num2+".png";

document.querySelectorAll("img")[1].setAttribute( "src", image2 ); 


//  Flag visiblity for the winner

if (num1>num2)
{
    document.querySelector("h1").innerHTML="🚩 Player1 wins";
    
}
else if(num2>num1) {

    document.querySelector("h1").innerHTML="Player2 wins 🚩";
}
else
{
    document.querySelector("h1").innerHTML="Draw!";

}






