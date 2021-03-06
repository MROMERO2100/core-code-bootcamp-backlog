<h1 align="center">Introduction to programming & Javascript - Week 1</h1>

<div id="div-week-1">
  <div id="weekChallenges-week-1-Tuesday">
    <h3 id="weekchanllengeTuesday-11-01-2022">Week 1 - Week challenges (Tuesday 11-January-2022)</h3>
    <hr>
    <ol>
    <li>Watch <a href="https://www.youtube.com/watch?v=JNMy969SjyU" rel="nofollow">this</a> video about compilation and interpretation <span>&#10003; Done</span></li> 
    <li>Search and answer the question: Java language is compiled or interpreted? <span>&#10003; Done</span></li>
      <ul>
        <li><span><strong>Answer:</strong></span> Java is both Interpreted and compiled. The Java source code first compiled into a binary byte code using Java compiler, then this byte code runs on the JVM (Java Virtual Machine), which is a software based interpreter. So Java is considered as both interpreted and compiled.</li> 
      </ul> 
    <li>Create an algorithm to calculate the equivalent of your local currencty to USD <span>&#10003; Done</span></li>
      <img src="https://user-images.githubusercontent.com/40069878/149054583-32469914-1191-4c2e-9bde-1c173e2c5a27.png" alt="Algorithm From Local to USD Currency">
    <li>Read about Pseudocode <a href="https://www.freecodecamp.org/news/what-is-pseudocode-in-programming/" rel="nofollow">here</a>, you can also find some examples <a href="/corecodeio/bootcamp-from-scratch/blob/main/resources/PSEUDOCODE.md">here</a> <span>&#10003; Done</span></li>
    <li>Anwser to the question: Why is pseudocode helpful? <span>&#10003; Done</span></li>
      <ul>
        <li><span><strong>Answer:</strong></span> I think that writing pseudocode before coding is certainly better than just coding without planning, but it's far from being a best practice. Test-driven development is an improvement.</li> 
      </ul>  
    <li>Create a pseudocode to calculate the aproximated age of a user base on the year they born, (you can define a variable with the actual year if you need it, like for example i could define Y <-- 2022) <span>&#10003; Done</span></li>
      <ul><li><span><strong>Answer:</strong></span></li></ul>
    <pre><code>
      function calculateAge(yearborn)
        yearActural=2022
        if yearborn = yearActural then
            return 0
        else
            return yearActural -yearborn
        end if
      end function
      input yearborn
      output "You Born in :"+str(yearborn)+ ", And Your Age Is: ", calculateAge(yearborn)
    </code></pre>
    <li>Read about flowcharts <a href="https://www.lucidchart.com/pages/es/que-es-un-diagrama-de-flujo" rel="nofollow">here</a> <span>&#10003; Done</span></li>
    <li>Answer to the question: Why are flowcharts important to us as developers? <span>&#10003; Done</span></li>
      <ul>
        <li><span><strong>Answer:</strong></span> Because flow charts help programmers develop the most efficient coding because they can clearly see where the data is going to end up. Flow charts help programmers figure out where a potential problem area is and helps them with debugging or cleaning up code that is not working.</li> 
      </ul>  
    <li>Search about High-level languages and Low-level languages, you can start with <a href="https://www.youtube.com/watch?v=1vRPOp5p-qs" rel="nofollow">this</a> video. <span>&#10003; Done</span></li>
<span><strong>Some about High-level languages: </strong></span><p>Most programming languages that you will have heard of are high-level languages. Python and C# are examples of high-level languages that are widely used in education and in the workplace. A high-level language is one that is user-oriented in that it has been designed to make it straightforward for a programmer to convert an algorithm into program code.</p>
<span><strong>Some about low-level languages: </strong></span><p>A low-level language is machine-oriented. Low-level programs are expressed in terms of the machine operations that must be performed to carry out a task. This makes writing programs more difficult, as the algorithm must be specified in terms of the capabilities and specifications of the processor. Low-level languages are named for the processor (or processor family) that they are designed for, and are often referred to as assembly language or machine code.</p>
    <ol>
  </div>
  
  [FIN DE DIV WEEK 1 - Tuesday 11-JANUARY-2022]: # 
  
  <div id="weekChallenges-week-1-Wednesday">
    <h3 id="weekchanllengeWednesday-12-01-2022">Week 1 - Week challenges (Wednesday 12-January-2022)</h3>
    <hr>
    <ol>
      <li>Learn about binary, decimal and hexadecimal numbers</li>
          <span><strong>A Binary Number </strong></span><p>is a number expressed in the base-2 numeral system or binary numeral system, a method of mathematical expression which uses only two symbols: typically "0" (zero) and "1" (one).</p>
      <span><strong>A Decimal Number </strong></span><p>can be defined as a number whose whole number part and the fractional part is separated by a decimal point. The dot in a decimal number is called a decimal point. The digits following the decimal point show a value smaller than one. </p>   
      <span><strong>A Hexadecimal Number </strong></span><p>The word hexadecimal can be divided into 'Hexa' and 'deci', where 'Hexa' means 6 and 'deci' means 10. The hexadecimal number system is described as a 16 digit number representation of numbers from 0 - 9 and digits from A - F. In other words, the first 9 numbers or digits are represented as numbers while the next 6 digits are represented as symbols from A - F. Hexadecimal is very similar to the decimal number system that has a base number of 9. Therefore, after 9 digits, the 10th digit is represented as a symbol - 10 as A, 11 as B, 12 as C, 13 as D, 14 as E, and 15 as F. Hence, the 16 digits are 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F. For example: 7B316, 6F16,4B2A16 are hexadecimal numbers.</p>   
      <li>Translate the year you where born to binary, decimal and hexadecimal</li>
      <ul>
          <li><span><strong>HEX: 7C8</strong></span></li>
          <li><span><strong>DEC: 1992</strong></span></li>
          <li><span><strong>OCT: 3710</strong></span></li>
          <li><span><strong>BIN: 011111001000</strong></span></li>
       </ul> 
      <li>Translate 51966 into hexadecimal and binary</li>
        <ul>
          <li><span><strong>HEX: CAFE</strong></span></li>
          <li><span><strong>DEC: 51996</strong></span></li>
          <li><span><strong>OCT: 145376</strong></span></li>
          <li><span><strong>BIN: 1100101011111110</strong></span></li>
       </ul>     
      <li>Use a Low-level language, for example MIPS aseembler, to do so, you will need to follow <a href="/corecodeio/bootcamp-from-scratch/blob/main/src/technologies/2022/week1/resources/MIPS.md">this</a> guide. We recomend to check the guide first but also <a href="https://courses.cs.vt.edu/cs2506/Fall2014/Notes/L04.MIPSAssemblyOverview.pdf" rel="nofollow">this</a> presentation could be helpful.</li>
      <li>Base on the examples and the guide of the low-level language:</li>
        <ul>
		<li>5.1 Create a program to add two numbers given by the user. <span>&#10003; Done</span>
		<img src="https://user-images.githubusercontent.com/40069878/149668554-e4ba5b5e-d08d-4f68-962a-057d91b2fe1c.png" alt="Add Two number given by the user.">
		</li>
		<li>5.2 Create a program that display your name. <span>&#10003; Done</span> </li>
		<img src="https://user-images.githubusercontent.com/40069878/149668785-8137e560-c1f6-4c07-a391-618623ef5f0a.png" alt="Program that display your name">
		<img src="https://user-images.githubusercontent.com/40069878/149668821-c367892f-5b0c-4b8b-868b-7492485daca6.png" alt="Result of program that display your name">
        </ul>
    </ol>    
  </div>  
  
  [FIN DE DIV WEEK 1 - Wednesday 12-JANUARY-2022]: # 
  
  <div id="weekChallenges-week-1-Thursday">
    <h3 id="weekchanllengeThursday-13-01-2022">Week 1 - Week challenges (Thursday 13-January-2022)</h3>
    <hr>
    <ol dir="auto">
      <li>Search for real word applications of Javascript <span>&#10003; Done</span></li>
		<ul>
			<li>Web Applications</li>
			<li>Server Applications</li>
			<li>Mobile Applications</li>
			<li>Video-Games</li>
		</ul>
      <li>(optional but great) Watch <a href="https://www.youtube.com/watch?v=LW6vQNE2jgc&amp;t=1962s" rel="nofollow">this</a> video <span>&#10003; Done</span></li>
      <li>(optional but great) Watch <a href="https://www.youtube.com/watch?v=KXkQJBASUOg" rel="nofollow">this</a> video <span>&#10003; Done</span></li>
      <li>Follow the github course, you can find it <a href="/corecodeio/bootcamp-from-scratch/blob/main/src/recommended">here</a> <span>&#10003; Done</span></li>
    </ol>    
  </div>
  
  [FIN DE DIV WEEK 1 - Thursday 12-JANUARY-2022]: #
  
</div>
<hr>

[FIN DE DIV WEEK 1]: # 

[HOME](https://github.com/MROMERO2100/core-code-bootcamp-backlog)
