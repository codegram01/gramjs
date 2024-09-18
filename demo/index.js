import { e, range, ref, g_if } from "/gram.js";

const app = document.getElementById("app");

function FruitsComp(){
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

  return e("div", {},
    e("input", { type: "text", value: fruitInp, placeholder: "Enter fruit" }),
    e("button", { text: "add fruit", onclick: addFruit }),
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
    e(
      "div",
      {},
      e("button", { text: "toggle show fruits", onclick: toggleShowFruit }),
      e("span", { text: showFruit })
    ),
  )
}


function MessageComp(){
  const showMessage = ref(true);
  const toggleShowMessage = () => (showMessage.value = !showMessage.value);
  return [
    g_if(e("div"), showMessage, () => [
      e("span", { text: "this message will delete when toggle show" }),
    ]),
    e(
      "div",
      {},
      e("button", { text: "toggle show Message", onclick: toggleShowMessage }),
      e("span", { text: showMessage })
    )
  ]
}

const title = ref("Fruits Manager");
const ctn = e("div", {},
  e("h1", { text: title }),
  e("input", { value: title }),
  e("hr"),
  FruitsComp(),

  e("hr"),
  MessageComp()
);

app.appendChild(ctn);
