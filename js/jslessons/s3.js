/* eslint-disable no-const-assign */
/* eslint-disable quotes */
/* eslint-disable semi */
// The ability to access the outer level scoped data from the inner level scoped code even after the function is terminated

function doSomeTask () {
  const x = 100;
  const y = 20;
  console.log("x: " + x + " y: " + y);
}
doSomeTask();
function outer () {
  const outerVar = "Hey I am the outer var!";
  //  console.log(outerVar);
  function inner () {
    const innerVar = "Hey I am an inner var!";
    console.log(innerVar);
    console.log(outerVar);
  }
  //   console.log(innerVar);
  //   inner();
  return inner;
}
// outer();
// outer.inner();
const innerFunc = outer();
innerFunc();
function createGreeting (greeting = "") {
  const myGreet = greeting.toUpperCase();
  return function (name) {
    return `${myGreet} ${name}`;
  };
}
const greeting = createGreeting("Hi");
console.log(greeting("Sowmi"))
function createGame (gameName) {
  let score = 0;
  return function win () {
    score++;
    return `Your gameName ${gameName} score is ${score}`;
  };
}
// const gname = createGame("Shadow Fight");
// console.log(gname("100"));
const hockeyGame = createGame("Hockey");
const soccerGame = createGame("Soccer");
hockeyGame();
hockeyGame();
hockeyGame();
soccerGame();
