// =======1=================================
function fun1 () {
  for(var i = 0; i <3 ; i++) {
    setTimeout(function log () {
      console.log(i);
    }, i *1000)
  }
}

fun1();

// output => 3 3 3
// ========================================


// =======2=================================
function fun2 () {
  for(let i = 0; i <3 ; i++) {    // use let instead of var 
    setTimeout(function log () {
      console.log(i);
    }, i *1000)
  }
}

fun2();

// output => 0 1 2
// ========================================

// ========3================================

function fun3 () {    
  for(var i = 0; i <3 ; i++) {
    function f () {     //wrap inside fn to create closure and create new lelxcal env
      var x = i;
      setTimeout(function log () {
      console.log(x);
    }, i *1000)
    }
   f();
  }
}

fun3();

// output => 0 1 2

// ========================================