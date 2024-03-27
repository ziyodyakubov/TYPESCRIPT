## Data-Types in TypeScript:

1. Number
2. String
3. Boolean
4. Any
5. Void
6. Object
7. Array
8. Tuple
9. Enum
10. Null & Undefined
11. Never
12. Type assertions

<br>
<br>
<hr>

## Literal types

<quote>Faqatgina o'zgaruvchiga biriktirilgan qiymatlarni yozish mumkin</quote>

<code>let number: 1 | 2 | 3 | 4;<br>
number = 1;</code>

<br>

<br>

<hr>

## Union types

<quote>O'zgaruvchini data-type 2 yoki undan ortiq turda kelib qolishi mumkin bo'lgan holatda ishlatiladi</quote>

<code>let info : string | number;<br>
info = "hello";<br>
info = 23;</code>
<br><br><br>
<hr>

## Tuples

<quote>Faqat arrayga nisbatan qat'iy data-type biriktirish</quote>

<code>let tupleData : [boolean,string,number];<br>
tupleData = [true,"Hello",23];</code>

📌Data-type soni bilan biriktirlgan ma'lumotlar soni ham bir hil bo'lishi kerak
<br><br><br>
<hr>

## void

<quote>Funksiya faqatgina qandaydir ishni bajarsa funksiyaga nisbatan void type ishlatiladi (ya'ni bu funksiya return qilmaydi hech nima)</quote>

<code>function getToken(){<br>
console.log("Hello world");<br>
}

getToken()</code>
<br><br><br>
<hr>

## never

<quote>Bu type funksiyadagi xatolikni ushlab qolish uchun ishlatiladi</quote>

<code>function fetchError(){<br>
   throw this return "This is an Error"<br>
}</code>

<br><br><br>
