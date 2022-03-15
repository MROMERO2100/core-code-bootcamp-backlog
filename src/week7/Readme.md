<h1 align="center">Typescript - Week 7</h1>

## Week goal 🏁

<p>Larn more advance configurations in Typescript, along with advance types</p>

## Week challenges (Monday) 💻

1. [TicTacToe](https://github.com/corecodeio/bootcamp-from-scratch/blob/main/src/technologies/2022/week7/Exercices/E0/desc/ED0W7.md) Using `Typescript`

## Week challenges (Tuesday) 💻

1. [Generics](https://github.com/corecodeio/bootcamp-from-scratch/blob/main/src/technologies/2022/week7/Exercices/E1/desc/ED1W7.md) Using `Typescript`  <span>&#10003; Done</span>

2. [Encrypt this!](https://www.codewars.com/kata/5848565e273af816fb000449/train/typescript)<span>&#10003; Done</span>
```ts
export const encryptThis = (str: string): string => {
  // Your code goes here
    if (str.length <= 0) return ""
    return str
    .split(" ")
    .map(e => {
        let begin = e[0].charCodeAt(0).toString();
        let last = e.length > 2 ? e[e.length - 1] : "";
        let second = e.length > 2 ? e[1] : "";
        let rest = e.length > 2 ? e.substring(2,e.length - 1 ) : e.substring(1);
        return begin + last + rest + second; 
    }).join(" ");
}
```

3. [Make the Deadfish Swim](https://www.codewars.com/kata/51e0007c1f9378fa810002a9/train/typescript)  <span>&#10003; Done</span>
```ts
/** return the output array and ignore all non-op characters */
export function parse(data: string): number[] {
let result:number[] = [];
data.split('').reduce((total, current) => {
    if (current === 'i') total++;
    if (current === 'd') total--;
    if (current === 's') total = Math.pow(total, 2);
    if (current === 'o') result.push(total);
    return total;
    }, 0);
return result;
}
```

## Week challenges (Wednesday) 💻

1. [More About Generics](https://docs.microsoft.com/en-us/learn/modules/typescript-generics/)
2. Read and follow [this](https://learntypescript.dev/04/l5-union)
3. Read and follow [this](https://learntypescript.dev/04/l6-intersection)
4. [Dashatize it](https://www.codewars.com/kata/58223370aef9fc03fd000071/train/typescript)
```ts
export const dashatize = (num: number) => {
    return num.toString().
    replace(/([13579])/g,'-$1-').
    replace(/\-+/g,'-'). 
    replace(/^\-/,''). 
    replace(/\-$/,'');
};
```

## Week challenges (Thursday) 💻

1. [Type Predicate](https://typescript-exercises.github.io/#exercise=4)
```ts
/*

Intro:

    As we introduced "type" to both User and Admin
    it's now easier to distinguish between them.
    Once object type checking logic was extracted
    into separate functions isUser and isAdmin -
    logPerson function got new type errors.

Exercise:

    Figure out how to help TypeScript understand types in
    this situation and apply necessary fixes.

*/

interface User {
    type: 'user';
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    type: 'admin';
    name: string;
    age: number;
    role: string;
}

export type Person = User | Admin;

export const persons: Person[] = [
    { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
    { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
    { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' },
    { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' }
];

export function isAdmin(person: Person): person is Admin {
    return person.type === 'admin';
}

export function isUser(person: Person): person is User {
    return person.type === 'user';
}

export function logPerson(person: Person) {
    let additionalInformation: string = '';
    if (isAdmin(person)) {
        additionalInformation = person.role;
    }
    if (isUser(person)) {
        additionalInformation = person.occupation;
    }
    console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

console.log('Admins:');
persons.filter(isAdmin).forEach(logPerson);

console.log();

console.log('Users:');
persons.filter(isUser).forEach(logPerson);

// In case if you are stuck:
// https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates
```
2. [Count the smiley faces!](https://www.codewars.com/kata/583203e6eb35d7980400002a/train/typescript)
```ts
//return the total number of smiling faces in the array
export function countSmileys(arr: string[]) {
 return arr.filter(e => /(:|;){1}(-|~){0,1}(\)|D){1}/.test(e)).length;
}
```

3. [Human Readable Time](https://www.codewars.com/kata/52685f7382004e774f0001f7)
```ts
const formatTime = (sec: number) => (sec > 9 ? `${sec}` : `0${sec}`);
export function humanReadable(seconds:number):string {
  // TODO
  const hh = Math.floor(seconds / 3600);
  const mm = Math.floor(seconds / 60) % 60;
  const ss = seconds % 60;
   return [hh, mm, ss].map(formatTime).join(":");
}
```

4. [Base64 Encoding](https://www.codewars.com/kata/5270f22f862516c686000161)
```ts
export function toBase64(str: string): string {
  // Encode this string to Base64
  return new Buffer(str).toString('base64');
}

export function fromBase64(str: string): string {
  // Decode this string from Base64
   return new Buffer(str, 'base64').toString('ascii');
}
```

5. ✨Complete your 4th Core Challenge, the [Scrum Essentials Certification](https://university.scrumnetwork.com/offers/C5fmudK2/checkout?coupon_code=ESSENTIALS2022).

## Week links 🔗

1. [Exercise 1 - Abstract class](https://github.com/corecodeio/FS0522_Typescript_01/tree/main/src/E0)
2. [Exercise 2 - Generics](https://github.com/corecodeio/FS0522_Typescript_01/tree/main/src/E1)
3. [Exercise 3 - Generics](https://github.com/corecodeio/FS0522_Typescript_01/tree/main/src/E2)
4. [Exercise 4 - Types / Composition](https://github.com/corecodeio/FS0522_Typescript_02)
