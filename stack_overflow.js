let counter = 0;
function inception() {
  if (counter > 3) {
    return 'done!';
  }
  counter++;
  return inception();
}

console.log(inception());

// Another Example...
function hello() {
  return 'hello';
}
function test() {
  //   hello();
  return hello();
}

console.log(test());
//Output:   undefined aiga
//Reason: Beacause test() ne hello() ko call kiya,
//lakin hello() ka result apna reslut nhi banaya....
//Result ka lia ya line likhni hogi return hello();
