# GramJs

Smallest Javascript framework. The only Javascript Framework you can understand.
GramJs only have 100 line code and 4 function.

Check example at folder demo or [watch demo video](https://youtu.be/ZJCYPME4gAE)

[Video when i create](https://youtu.be/ZJCYPME4gAE)

## Usage
- Just copy file gram.js and add to your project 
- import { e, range, ref, g_if } from "gram.js"

## Docs
Gramjs have 4 function

### function e(tag, ops, ...childs) {}
function e create and return new html element.
e just like wrap of document.createElement and add more feature
```javascript
e("div", {},
  e("h1", {text: "Hello World"}),
  e("input", {value: "Alex", placeholder: "Enter name"} ),
)
```

you can add element property in ops

ops:
- text : it will do elm.innerText = value
- html : it will do elm.innerHTML = value
- value : it will do elm.value = value
- show : element will display none or show when value true or false
- default html attribute : like src, href, width, ...

event handle:
add on[event] to ops
```javascript
e("button", {onclick: function(){
  alert("button click")
}})
```

special event: onmounted
onmounted call when element create and return element itself
```javascript
e("div", {onmounted: function(element){
  
}})
```

### function ref(value) {}
ref create reactive value. 

Create value: const myVal = ref("Hello World")

Get value: myVal.value

Change value: myVal.value = "Something"

you bind ref value to html element like this
```javascript
e("h1", {text: title})
e("input", {value: title})
```
when value change html element will update
or when html update value will update

### function range(parentElm, arrItem, render) {}
range to help you map array value to html

range recevive
- parentElm: range need placeholder element for render
- arrItem : array item
- render : function e , logic for render 1 element of array
range return parentElm with childs add

like when you have 
```javascript
const fruits = ref(["apple", "banana", "orange"])
```
display array to html like this
```javascript
range(e("ul") ,fruits, (fruit, index) => {
      return e("li", {text: `${index}: ${fruit}`})
    })
```
When you change array, you need call myArr.markChange() to update html

### function g_if(ctnElm, op, ...render) {}
g_if is condition render

g_if recevive
- ctn: g_if need placeholder element 
- op : is condition reactive value create with ref
- ...render : list render function for render element and return 
element

g_if return ctnElm.

when condition false g_if remove all render, and when true it run render again 

Example:
```javascript
const showMess = ref(true)

g_if(e("div"), showMess, () =>
    () => e("span", {text: "message 1"}),
    () => e("span", {text: "message 2"})
  ),
```
When showMess = false -> message 1 and 2 will be delete

## Note
range and g_if is on dev mode, it not work perfect. It need placeholder Element parent 

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
