# Core Code BootCamp, Software Development from scratch, By Moises Romero.

![Core-Code-Logo-Editado](https://user-images.githubusercontent.com/40069878/148991261-6cc704fc-dd51-45fa-818b-b13aa87a0be5.png)

Core Code BootCamp Backlog for track the development
<hr>
<ol>
  <li><a href="#week1" title="Goto Week 1">Week 1 : Introduction to programming & Javascript</a></li>
    <ul>
      <li><a href="#weekchanllengeTuesday-11-01-2022" title="Goto Week 1 - Challenge Tuesday">Week 1 - Challenges (Tuesday 11-January-2022)</a></li>
      <li><a href="#weekchanllengeWednesday-12-01-2022" title="Goto Week 1 - Challenge Wednesday">Week 1 - Challenges (Wednesday 12-January-2022)</a></li>
      <li><a href="#weekchanllengeThursday-13-01-2022" title="Goto Week 1 - Challenge Thursday">Week 1 - Challenges (Thursday 13-January-2022)</a></li>
    </ul>
</ol>
<li><a href="#week2" title="Goto Week 2">Week 2 : Javascript</a></li>
<li><a href="#week3" title="Goto Week 3">Week 3 : Javascript</a></li>
<li><a href="#week4" title="Goto Week 4">Week 4 : npm,npx & Typescript</a></li>
<li><a href="#week5" title="Goto Week 5">Week 5 : Typescript</a></li>
<li><a href="#week6" title="Goto Week 6">Week 6 : Typescript</a></li>
<li><a href="#week7" title="Goto Week 7">Week 7 : Typescript</a></li>
<li><a href="#week8" title="Goto Week 8">Week 8 : HTML & CSS</a></li>
<li><a href="#week9" title="Goto Week 9">Week 9 : React & Node</a></li>
<li><a href="#week10" title="Goto Week 10">Week 10 : Node & Database</a></li>
<li><a href="#week11" title="Goto Week 11">Week 11 : S.O.L.I.D & Final presentations</a></li>
<li><a href="#week12" title="Goto Week 12">Week 12 : Final presentations</a></li>
<hr>

<div id="div-week-1">
  <h1 id="week1"><strong>Week 1 : Introduction to programming & Javascript</strong></h1>
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
    <ol dir="auto">
      <li>Learn about binary, decimal and hexadecimal numbers</li>
      <li>Translate the year you where born to binary, decimal and hexadecimal</li>
      <li>Translate 51966 into hexadecimal and binary</li>
      <li>Use a Low-level language, for example MIPS aseembler, to do so, you will need to follow <a href="/corecodeio/bootcamp-from-scratch/blob/main/src/technologies/2022/week1/resources/MIPS.md">this</a> guide. We recomend to check the guide first but also <a href="https://courses.cs.vt.edu/cs2506/Fall2014/Notes/L04.MIPSAssemblyOverview.pdf" rel="nofollow">this</a> presentation could be helpful.</li>
      <li>Base on the examples and the guide of the low-level language:
        <ul>
            <li>5.1 Create a program to add two numbers given by the user. </li>
            <li>5.2 Create a program that display your name. </li>
        </ul>
      </li>
    </ol>    
  </div>  
  
  [FIN DE DIV WEEK 1 - Wednesday 12-JANUARY-2022]: # 
  
  <div id="weekChallenges-week-1-Thursday">
    <h3 id="weekchanllengeThursday-13-01-2022">Week 1 - Week challenges (Thursday 13-January-2022)</h3>
    <hr>
    <ol dir="auto">
      <li>Search for real word applications of Javascript</li>
      <li>(optional but great) Watch <a href="https://www.youtube.com/watch?v=LW6vQNE2jgc&amp;t=1962s" rel="nofollow">this</a> video</li>
      <li>(optional but great) Watch <a href="https://www.youtube.com/watch?v=KXkQJBASUOg" rel="nofollow">this</a> video</li>
      <li>Follow the github course, you can find it <a href="/corecodeio/bootcamp-from-scratch/blob/main/src/recommended">here</a></li>
    </ol>    
  </div>
  
  [FIN DE DIV WEEK 1 - Thursday 12-JANUARY-2022]: #
  
</div>
<hr>

[FIN DE DIV WEEK 1]: # 




