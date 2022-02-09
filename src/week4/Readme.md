<h1 align="center">npm,npx & Typescript - Week 4</h1>

## Week goal 🏁

<p>Lear about Typescript and Object Oriented Programming introduction</p>

## Week subtopics

- What is npm?
- package.json
- What is npx?
- What is Typescript?
- Relation between Typescript and Javascript
- Typescript Hello World
- Introduction to Object Oriented Programming
  - Abstraction
  - Inheritance
  - Polymorphism
  - Encapsulation

## Week challenges (Monday) 💻

1. Check [this](https://www.youtube.com/watch?v=sXQxhojSdZM) video
2. Follow [this](https://www.youtube.com/watch?v=909NfO1St0A) video
3. Follow [this](https://dev.to/codebubb/javascript-regex-exercises-01-5078) guide
4. Check [this](https://www.youtube.com/watch?v=RvYYCGs45L4) video
5. Follow [this](https://www.youtube.com/watch?v=DHvZLI7Db8E) video
6. Check [this](https://www.youtube.com/watch?v=rKK1q7nFt7M) video

## Week challenges (Tuesday) 💻

1. [This](https://www.typescriptlang.org/docs/handbook/intro.html) link is nice to have and read
2. [Typescript object type](https://typescript-exercises.github.io/#exercise=1) <span>&#10003; Done</span>  [Exercise 1](src/excerciseTS1.ts)
3. Read [this](https://blog.logrocket.com/types-vs-interfaces-in-typescript/)
4. [Typescript union types](https://typescript-exercises.github.io/#exercise=2) <span>&#10003; Done</span>  [Exercise 2](src/excerciseTS2.ts)
5. [Typescript in operator](https://typescript-exercises.github.io/#exercise=3) <span>&#10003; Done</span>  [Exercise 3](src/excerciseTS3.ts)
6. [Find the odd int](https://www.codewars.com/kata/54da5a58ea159efa38000836) <span>&#10003; Done</span>

```js
function findOdd(A) {
  //happy coding!
  var count = 0;
  var aSize = A.length;
  for(var i = 0; i<aSize; i++){
    for(var j = 0; j<aSize; j++){
      if(A[i] == A[j]){
        count++;
      }
    }
    if(count % 2 != 0 ){
      return(A[i]);
    }
  }
}
```

7. [Stop gninnipS My sdroW!](https://www.codewars.com/kata/5264d2b162488dc400000001)  <span>&#10003; Done</span>
```js
function spinWords(string){
  //TODO Have fun :)
  const sentenceArray = string.split(' ');
  let result = '';
  sentenceArray.map((str, i) => {
    if (str.length >= 5){
      sentenceArray[i] = str.split('').reverse().join('');
    } else {
      sentenceArray[i] = str;
    }
  result = sentenceArray.join(' ');
  });
return result;
  
}
```

## Week challenges (Wednesday) 💻

1. [Array.diff](https://www.codewars.com/kata/523f5d21c841566fde000009) <span>&#10003; Done</span>
```js
function arrayDiff(a, b) {
  let NewArray=[];
  let aSize=a.length;

  for(let i=0; i<aSize; i++){
    console.log(a[i]);
    if(!b.includes(a[i])){
      NewArray.push(a[i]);
    }
  }
  return NewArray;
}
```

2. [Create Phone Number](https://www.codewars.com/kata/525f50e3b73515a6db000b83)  <span>&#10003; Done</span>
```js
function createPhoneNumber(numbers){
  let myArray = numbers;
  let begin = myArray.slice(0,3);
  let midle = myArray.slice(3,6);
  let end = myArray.slice(6,10);
  return '('+begin.join('')+') '+midle.join('')+'-'+end.join('');
}
```

3. Watch [this](https://www.youtube.com/watch?v=m_MQYyJpIjg)  <span>&#10003; Done</span>
4. Watch [this](https://www.youtube.com/watch?v=08CWw_VD45w)  <span>&#10003; Done</span>
5. Read [this](https://medium.com/from-the-scratch/oop-everything-you-need-to-know-about-object-oriented-programming-aee3c18e281b)  <span>&#10003; Done</span>
6. Read [this](https://naveenkumarkoppala.medium.com/typescript-oops-c327678744b0)  <span>&#10003; Done</span>
7. Read [this](https://rambabupadimi.medium.com/typescript-object-oriented-programming-7a6fd905d90e)  <span>&#10003; Done</span>

## Week challenges (Thursday) 💻

1. [Detect Pangram](https://www.codewars.com/kata/545cedaa9943f7fe7b000048) <span>&#10003; Done</span>
```js
function isPangram(string){
  let alpha = string.toUpperCase().split("");
  for (let beta = 65; beta < 91; beta++) {
    let gamma = String.fromCharCode(beta);
    if (alpha.includes(gamma)) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}
```
2. [Find the missing letter](https://www.codewars.com/kata/5839edaa6754d6fec10000a2)
```js
function findMissingLetter(array)
{
  //SALTEAMOS LA PRIMERA LETRA
  for (let i = 1; i < array.length; i++) {
    //OBTENEMOS EL CODIGO CHAR DE LA LETRA ANTERIOR
    const prev = array[i - 1].charCodeAt();
    //OBTENEMOS EL CODIGO CHAR DE LA LETRA ACTUAL
    const current = array[i].charCodeAt();
    
    if (current - prev !== 1) { //SI LA DIFERENCIA ENTRE EL ACTUAL Y LA ANTERIOR NO ES 1
      //OBTENEMOS EL CARACTER DESPUES DEL ANTERIOR
      return String.fromCharCode(prev + 1);
    }
  }
  return null; //SI NO ENCONTRAMOS NADA,ENVIAMOS NULL
  }
```
3. [Find the unique number](https://www.codewars.com/kata/585d7d5adb20cf33cb000235)
4. [Reverse or rotate?](https://www.codewars.com/kata/56b5afb4ed1f6d5fb0000991)
5. [What's Your Poison?](https://www.codewars.com/kata/58c47a95e4eb57a5b9000094)
6. ✨Complete your 3rd [**Core Challenge**](https://corecode.notion.site/GitHub-Boost-Guide-167914056cff4522886a78756f659e47). This is one of the requirements for the certification, where you'll boost your dev professional-brand.

## Week links 🔗

1. [TypescriptPlayground](https://www.typescriptlang.org/play)
2. [Example 0 - Typescript](https://github.com/corecodeio/FS0122_Typescript_00)
3. [Example 1 - Typescript](https://github.com/corecodeio/FS0222_Typescript_01)
