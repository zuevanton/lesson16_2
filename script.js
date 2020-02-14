'use strict';

class First {
  hello(){
    console.log('hello, this is first metod');
  }
}

class Second extends First {
  hello(){
    super.hello();
    console.log('hello, this is second metod');
  }
}

let test = new Second();
test.hello();