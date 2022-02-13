<h1 align="center">Typescript - Week 5</h1>

## Week goal 🏁

<p>Learn about classes, instances, inheritance and data type with Typescript</p>

## Week subtopics

- Concept of class
  - Attributes
  - Methods
  - Constructor
- Classes with Typescript
- Concept of instance
- Instances with Typescript
- Typescript types
  - number
  - string
  - boolean
  - object
- What is a data type?
- Inferred & Declared types
- Use of Inheritance with typescript

## Week challenges (Monday) 💻

1. Read [this](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html) from `The primitives: string, number and boolean` to `Differences Between Type Aliases and Interfaces` section <span>&#10003; Done</span>
2. [Square(n) Sum](https://www.codewars.com/kata/515e271a311df0350d00000f/train/typescript) Using `Typescript`  <span>&#10003; Done</span>
```js
export function squareSum(numbers: number[]): number {
  let sum=0;
  for (const num of numbers){
    sum += num*num;
  }
  return sum;
}
```

3. [Growth of a Population](https://www.codewars.com/kata/563b662a59afc2b5120000c6/train/typescript) Using `Typescript` <span>&#10003; Done</span>
```js
export class G964 {
    public static nbYear = (p0, percent, aug, p) => {
    //P0 POBLACION INICIAL,//percent PORCENTAJE DE CRECIMIENTO AL AÑO
    //aug, NUEVOS HABITANTES, POR AÑO //p, CANTIDAD DE HABITANTES A ALCANZAR
      //formula = totalp + (totalp*percent) + aug;
      let years=0, totalP=p0;
      let porcentaje=(percent/100);
      while(totalP<p){
          totalP = (totalP+(totalP*porcentaje)+aug);
          years = years+1;
      }
      return years;
    }
}
```

4. [Mumbling](https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/typescript) Using `Typescript` <span>&#10003; Done</span>
```js
export function accum(s: string): string {
  var letters = s.split(''), words = [];

  for(var i = 0; i < letters.length; i++) {
    words.push(letters[i].toUpperCase() + Array(i + 1).join(letters[i].toLowerCase()));
  }

  return words.join('-');
  
}
```

5. [A wolf in sheep's clothing](https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15/train/typescript) Using `Typescript` <span>&#10003; Done</span>
```js
export function warnTheSheep(queue: string[]): string {
  const index=queue.indexOf("wolf");
  return index===queue.length-1 ? "Pls go away and stop eating my sheep":
  `Oi! Sheep number ${queue.length-1-index}! You are about to be eaten by a wolf!`;
}
```

## Week challenges (Tuesday) 💻

1. [A Rule of Divisibility by 13](https://www.codewars.com/kata/564057bc348c7200bd0000ff) Using `Typescript`
```js

```

2. [Playing with digits](https://www.codewars.com/kata/5552101f47fc5178b1000050) Using `Typescript`
```js
export class G964 {
    public static digPow = (n: number, p: number) => {
        var digits, result, i, num;
        digits = Math.floor(Math.log10(n)) + p;
        result = 0;
        num = n;                                 
        while(digits >= p){                      
            result += Math.pow((num % 10),digits--);
            num = Math.floor(num / 10);
        }
        if(result % n === 0){  // vet result
            return result / n;
        }
        return -1;
    }
}
```

3. [Valid Braces](https://www.codewars.com/kata/5277c8a221e209d3f6000b56) Using `Typescript`
```js
export function validBraces(braces: string): boolean {
    let opening = [ '(', '[', '{']
    let closing = [ ')', ']', '}']
    let arr = []
    for (let i = 0; i < braces.length; i++) {
        if (opening.includes(braces[i])) {
            arr.push(braces[i])
        } else
        if (closing.indexOf(braces[i]) === opening.indexOf(arr[arr.length - 1])) {
            arr.pop()
        } else return false
    } 
  return arr.length === 0;
}
```

4. [Tic-Tac-Toe](https://www.codewars.com/kata/5216a87cbf53a9c30f0000dc) Using `Javascript`
```js

```

5. [Tic-Tac-Toe-like table Generator](https://www.codewars.com/kata/5b817c2a0ce070ace8002be0) Using `Javascript`

## Week challenges (Wednesday) 💻

1. [Duplicate Encoder](https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/typescript) Using `Typescript`
```js

```

2. [Find the odd int](https://www.codewars.com/kata/54da5a58ea159efa38000836/train/typescript) Using `Typescript`
```js
export const findOdd = (xs: number[]): number => {
    let result = 0;
    for(let i=0; i<xs.length; i++){
        result = result^xs[i];
     }
    return result;
};
```

3. [Which are in?](https://www.codewars.com/kata/550554fd08b86f84fe000a58/train/typescript) Using `Typescript`
```js

```

4. [Sums of Parts](https://www.codewars.com/kata/5ce399e0047a45001c853c2b/train/typescript) Using `Typescript`
```js

```

5. [Consecutive strings](https://www.codewars.com/kata/56a5d994ac971f1ac500003e) Using `Typescript`
```js

```

## Week challenges (Thursday) 💻

1. [Tile](./Exercices/E0/desc/ED0W5.md) Using `Typescript`
2. [Time](./Exercices/E1/desc/ED1W5.md) Using `Typescript`
3. [Rational](./Exercices/E2/desc/ED2W5.md) Using `Typescript`
4. [Movies](./Exercices/E3/desc/ED3W5.md) Using `Typescript`
5. ✨Complete your 4th [**Core Challenge**](https://corecode.notion.site/Earn-your-SCRUM-certificate-8d9d0d40abaa4ee18c77c5a2cc1929b8). This is one of the requirements for the certification, where you'll boost your dev professional-brand.

## Week links 🔗
