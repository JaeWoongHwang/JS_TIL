// try, catch practice
function errfunc(){
  throw "error";
  console.log("this code will not be executed");
}

function func(){
  try{
    console.log("function-1");
    errfunc();
    console.log("function-2");
  }
  // catch(e){
  //   console.log("catch error in function : ", e);
  // }
  finally{
    console.log("finally in function - this code will always be executed");
  }
}

try{
  console.log("try-1");
  errfunc();
  console.log("try-2");
}
catch(e){
  console.log("catch error : ", e);
}
finally{
  console.log("finally - this code will always be executed");
}
