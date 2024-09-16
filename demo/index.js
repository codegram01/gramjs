import { e, range, ref } from "/gram.js"

const app = document.getElementById("app")

const title = ref("Fruits Manager")

const fruits = ref(["apple", "banana", "orange"])
const fruitInp = ref("")
function addFruit(){
  fruits.value.push(fruitInp.value);
  fruits.markChange();
  fruitInp.value = "";
}
function removeFruit(index) {
  fruits.value.splice(index, 1);
  fruits.markChange();
}

const showFruit = ref(true)
function toggleShowFruit() {
  showFruit.value = !showFruit.value
}

const ctn = e("div", {},
  e("h1", {text: title}),
  e("input", {value: title}),
  e("hr"),

  e("input", {type: "text", value: fruitInp, placeholder: "Enter fruit"}),
  e("button", {text: "add fruit", onclick: addFruit}),
  e("ul", { show: showFruit }, 
    range(fruits, (fruit, index) => {
      return e("li", {text: `${index}: ${fruit} - `}, 
        e("button", {text: "x", onclick: ()=>{removeFruit(index)}})
      )
    })
  ),
  e("hr"),

  e("div", {}, 
    e("button", {text: "toggle show fruits", onclick: toggleShowFruit}),
    e("span", {text: showFruit})
  ),
)

app.appendChild(ctn);
