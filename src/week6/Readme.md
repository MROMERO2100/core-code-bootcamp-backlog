<h1 align="center">Typescript - Week 6</h1>

## Week goal 🏁

<p>Learn about Interface, modifiers and data modeling with Typescript</p>

## Week subtopics

- Interface
- Data Modifiers
  - public
  - private
  - protected
- Abstract class
- Generics
  - types
  - class
  - interface

## Week challenges (Monday) 💻

## 1. Read [this](./Example/Input.md)  <span>&#10003; Done</span>
## 2. [Menu](./Exercices/E0/desc/ED0W6.md) Using `Typescript`  <span>&#10003; Done</span>
- [Menu Project](./Menu/)


## Week challenges (Tuesday) 💻

1. [Movies](./Exercices/E1/desc/ED1W6.md) Using `Typescript`
2. [Readme](./Exercices/E2/desc/ED2W6.md)
3. [Interfaces](https://docs.microsoft.com/en-us/learn/modules/typescript-implement-interfaces/)

## Week challenges (Wednesday) 💻

1. [Build Tower](https://www.codewars.com/kata/576757b1df89ecf5bd00073b/train/typescript) Using `Typescript`  <span>&#10003; Done</span>

```js
export const towerBuilder = (nFloors: number): string[] => {
  // build here
  let tower=[];
  let numSpaces=0;
  for (let i = nFloors; i > 0; i--) {
    tower.push(" ".repeat(numSpaces) + "*".repeat(i) + "*".repeat(i-1)  + " ".repeat(numSpaces));
    numSpaces++;
  }
  return tower.reverse();
}
```

2. [Highest Scoring Word](https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/typescript) Using `Typescript` <span>&#10003; Done</span>

```js
export const high = (str: string): string =>{
  let as = str.split(' ').map(s => [...s].reduce((a, b) => a+b.charCodeAt(0) - 96, 0)
  );
  return str.split(' ')[as.indexOf(Math.max(...as))];
}
```

3. [Equal Sides Of An Array](https://www.codewars.com/kata/5679aa472b8f57fb8c000047/train/typescript) Using `Typescript`  <span>&#10003; Done</span>

```js
export function findEvenIndex(arr: number[]): number
{
  let sum = 0,leftSum = 0;
  let arraySize=arr.length;
  for (var i = 0; i < arraySize; i++) {
    sum += arr[i];
  }
  for (var i = 0; i < arraySize; i++) {
    sum -= arr[i];
    if (leftSum === sum) return i;
    leftSum += arr[i];
  }
  return -1;
}
```

4. [Meeting](https://www.codewars.com/kata/59df2f8f08c6cec835000012/train/typescript) Using `Typescript`  <span>&#10003; Done</span>

```js

```

5. [Street Fighter 2 - Character Selection](https://www.codewars.com/kata/5853213063adbd1b9b0000be/train/typescript) Using `Typescript` <span>&#10003; Done</span>

```js
export function streetFighterSelection(fighters: Array<string[]>, position: number[], moves: string[]) {
    const verLength: number = fighters.length;
    const characters: string[] = [];
    
    moves.forEach(e => {
        switch(e) {
            case "up":       
                if(position[0]-1 >= 0 && fighters[position[0]-1][position[1]] != "") {
                    position[0] = position[0]-1;
                }
            break;
            
            case "down": 
                if(position[0]+1 < verLength && fighters[position[0]+1][position[1]] != "") {
                    position[0] = position[0]+1;
                }
            break;
            
            case "left":
                position[1] = getHorizonIdx(fighters[position[0]], position[1], true);
            break;
            
            case "right":
                position[1] = getHorizonIdx(fighters[position[0]], position[1], false);
            break;
        }
  
        characters.push(fighters[position[0]][position[1]]);
    });  

    return characters;
}
  
const getHorizonIdx = (array: string[], idx: number, isLeft: boolean) => {
    let nextIdx = isLeft ? idx-1 : idx+1;
    if(nextIdx < 0) {
        nextIdx = array.length-1;
    } else if(nextIdx >= array.length) {
        nextIdx = 0;
    }    

    if(array[nextIdx] != "") {
        return nextIdx;
    } else {
        return getHorizonIdx(array, nextIdx, isLeft);  
    }
  };
```

## Week challenges (Thursday) 💻

1. Watch [Object Oriented Programming - The Four Pillars of OOP](https://www.youtube.com/watch?v=1ONhXmQuWP8) <span>&#10003; Done</span>
2. Watch [Abstract Classes vs Interfaces](https://www.youtube.com/watch?v=Lnqmde9LP74)  <span>&#10003; Done</span>
3. Read [Abstract Classes](https://sbcode.net/typescript/abstract_classes/) <span>&#10003; Done</span>

## Week links 🔗

1. [Example 1 - Typescript](https://github.com/corecodeio/FS0422_Typescript_01)
2. [Standup code](./Example/standup.ts)
