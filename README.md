# GramJs

Smallest Javascript framework. The only Javascript Framework you can understand.
GramJs only have 100 line code and 3 function.

Check example at folder demo or [watch demo video](https://youtu.be/ZJCYPME4gAE)

[Video when i create](https://youtu.be/ZJCYPME4gAE)

## Usage
- Just copy file gram.js and add to your project 
- import { e, range, ref } from "gram.js"

## Docs
Gramjs have 3 function

### function e(tag, ops, ...childs) {}
function e create and return new html element.
e just like wrap of document.createElement and add more feature

you can add element property in ops 
ops:
- text : it will do elm.innerText = value
- html : it will do elm.innerHTML = value
- value : it will do elm.value = value
- show : element will display none or show when value true or false
- default html attribute : like src, href, width, ...

### function ref(value) {}
ref create reactive value. 

Create value: const myVal = ref("Hello World").

Get value: myVal.value.

Change value: myVal.value = "Something".

you bind ref value to html element like this
```javascript
e("h1", {text: title})
e("input", {value: title})
```
when value change html element will update
or when html update value will update

### function range(arrItem, render) {}
range to help you map array value to html

range recevive
- arrItem : array item
- render : function e , logic for render 1 element of array
range return html element like function e 

like when you have 
```javascript
const fruits = ref(["apple", "banana", "orange"])
```
display array to html like this
```javascript
range(fruits, (fruit, index) => {
      return e("li", {text: `${index}: ${fruit}`})
    })
```
When you change array, you need call myArr.markChange() to update html

## TODO 
I keep Gramjs to a minimum so you can easy to understand.
But if you want use it in real life, some feature need 

What you can add to GramJs:
- The syntax create element
in gramjs we create element use e(), but it look different write in html syntax
some people in react framework create jsx, and then jsx under the hood convert to e function, you can add jsx in your gramjs

- Reactive value 
GramJs can work good at basic data type like string, number, boolean
But in Array and object reactive is hard to detect when value change and update html. I still haven't figured out how to do it effectively.

## Contribute
- fork, update, merge, open issue is happy
- [Subscribe my Youtube](https://www.youtube.com/@WingramOrg)
