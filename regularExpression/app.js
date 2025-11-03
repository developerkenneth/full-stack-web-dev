const pattern = /[a-z]/;

// /[0-9]/
const string = "hi guys 1";

if(pattern.test(string)){
    alert("passed");
}else{
  alert("did not pass");
}