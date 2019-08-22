function validation()
{
name=document.getElementById("string").value;
var res = name.slice(0, 1);
if(res=="A"||res=="B"||res=="C")
{
document.getElementById("result").innerHTML="IS A CAPITAL";
}
else 
{
document.getElementById("result").innerHTML="IS NOT A CAPITAL";
}
}