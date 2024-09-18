import { e, range, ref, g_if } from "/gram.js";

const app = document.getElementById("app");

const title = ref("Fruits Manager");

const fruits = ref(["apple", "banana", "orange"]);
const fruitInp = ref("");
function addFruit() {
  fruits.value.push(fruitInp.value);
  fruits.markChange();
  fruitInp.value = "";
}
function removeFruit(index) {
  fruits.value.splice(index, 1);
  fruits.markChange();
}

const showFruit = ref(true);
const toggleShowFruit = () => (showFruit.value = !showFruit.value);

const showIfFruit = ref(true);
const toggleShowIfFruit = () => (showIfFruit.value = !showIfFruit.value);

const ctn = e(
  "div",
  {},
  e("h1", { text: title }),
  e("input", { value: title }),
  e("hr"),

  e("input", { type: "text", value: fruitInp, placeholder: "Enter fruit" }),
  e("button", { text: "add fruit", onclick: addFruit }),
  g_if(e("div"), showIfFruit, () =>
    range(e("ul", { show: showFruit }), fruits, (fruit, index) => {
      return e(
        "li",
        { text: `${index}: ${fruit} - ` },
        e("button", {
          text: "x",
          onclick: () => {
            removeFruit(index);
          },
        })
      );
    }),
    () => e("span", {text: "this message will delete when toggle show if"})
  ),
  e("hr"),
  e(
    "div",
    {},
    e("button", { text: "toggle show fruits", onclick: toggleShowFruit }),
    e("span", { text: showFruit })
  ),
  e(
    "div",
    {},
    e("button", { text: "toggle show If fruits", onclick: toggleShowIfFruit }),
    e("span", { text: showIfFruit })
  )
);

app.appendChild(ctn);
