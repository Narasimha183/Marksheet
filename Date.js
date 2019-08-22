function myfunction()
{
var d = new Date();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
document.getElementById("result").innerHTML = days[d.getDay()];
}