<h1 align="center">React & Node - Week 9</h1>

## Week goal 🏁

<p>Learn about React/Node.JS and its capabilities</p>


## Week challenges (Monday)
1. Watch this [video](https://www.youtube.com/watch?v=N3AkSS5hXMA&ab_channel=ProgrammingwithMosh) <span>&#10003; Done</span>
2. Watch this [video](https://www.youtube.com/watch?v=hQAHSlTtcmY&ab_channel=WebDevSimplified)  <span>&#10003; Done</span>
3. [React kata](https://www.codewars.com/kata/5a95947f4a6b342636000173) <span>&#10003; Done</span>
```js
  import React from 'react';

export const EggList = ({eggs}) => {
 return <ul>{eggs.map((_name, _key) => <EasterEgg name={_name} key={_key} />)}</ul>;
};

export const EasterEgg = ({name,key}) => {
  return <li key={key}>{name}</li>;
};
```

## Week challenges (Tuesday) 💻
1. Read the following resources about Node.JS and explain what's Node.JS in your own words:  
   - [Resource 1](https://nodejs.dev/learn)
   - [Resource 2](https://www.freecodecamp.org/news/what-exactly-is-node-js-ae36e97449f5/)
(You can use any other resource of your choice.)
2. Answer the question: What is the V8 Javascript Engine? (Use your own words)
3. Answer the question: What is NVM and Why is it useful for Node.JS developers?
4. Learn about the Node.JS module system, you can start [here](https://nodejs.org/api/modules.html).
5. Read about the different types of Node.JS modules
6. Explain the differences between ESModules and CommonJS modules
7. Create your own Local Node.JS module. The module must contain a function that calculates  
   the sum of two numbers. Use the previously created function in another file in any way.
8. Watch [this](https://www.youtube.com/watch?v=h-n_gyyNly8) video about the Client-Server architecture.
## Week challenges (Wednesday) 💻
1. Watch [this](https://www.youtube.com/watch?v=s7wmiS2mSXY) video about what is an API.
2. Answer the question: Are APIs only available on the Internet?
3. Learn what JSON is, you can start [here](https://www.youtube.com/watch?v=iiADhChRriM&pp=ugMICgJlcxABGAE%3D).
4. Read about HTTP, [here](https://developer.mozilla.org/es/docs/Web/HTTP) you have a good place to start.
5. Read about REST APIs, you can start [here](https://www.redhat.com/es/topics/api/what-is-a-rest-api).
## Week challenges (Thursday) 💻
1. Learn about Express JS, try using the [official documentation](https://expressjs.com/), use any other resource if you like
2. Learn about Postman using [this](https://www.youtube.com/watch?v=VywxIQ2ZXw4) course.
3. List 3 available postman alternatives.
