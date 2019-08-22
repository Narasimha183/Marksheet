function myfunction()
{
  var message, x,Z;
  message = document.getElementById("Credit card");
  message.innerHTML = "";
  x=document.getElementById("demo").value
  Z=x.length;
  
  try
	{
	  if(x == "") throw "not a empty";
	  if(isNaN(x)) throw "is not a creditcard number";
          if(x = Number(x) && z=Number(Z))
	  if(Z < 15 || Z >15 ) throw "is not a creditcard number";
	  if(Z==15) throw "is a creditcard Number"; 
	}
  catch(err)
	 {
    	   message.innerHTML = "Input " + err;
  	 }
}