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

1. [Build Tower](https://www.codewars.com/kata/576757b1df89ecf5bd00073b/train/typescript) Using `Typescript`

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

2. [Highest Scoring Word](https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/typescript) Using `Typescript`
3. [Equal Sides Of An Array](https://www.codewars.com/kata/5679aa472b8f57fb8c000047/train/typescript) Using `Typescript`
4. [Meeting](https://www.codewars.com/kata/59df2f8f08c6cec835000012/train/typescript) Using `Typescript`
5. [Street Fighter 2 - Character Selection](https://www.codewars.com/kata/5853213063adbd1b9b0000be/train/typescript) Using `Typescript`

## Week challenges (Thursday) 💻

1. Watch [Object Oriented Programming - The Four Pillars of OOP](https://www.youtube.com/watch?v=1ONhXmQuWP8)
2. Watch [Abstract Classes vs Interfaces](https://www.youtube.com/watch?v=Lnqmde9LP74)
3. Read [Abstract Classes](https://sbcode.net/typescript/abstract_classes/)

## Week links 🔗

1. [Example 1 - Typescript](https://github.com/corecodeio/FS0422_Typescript_01)
2. [Standup code](./Example/standup.ts)
