export function e(tag, ops, ...childs) {
  const elm = document.createElement(tag);

  if (ops) {
    for (const [key, op] of Object.entries(ops)) {
      if (key.startsWith("on")) {
        const event = key.slice(2);
        elm.addEventListener(event, op);
        continue;
      }
      if (op.isRef) {
        switch (key) {
          case "text":
            elm.innerText = op.value;
            op.subscribe(() => {
              elm.innerText = op.value;
            });
            break;
          case "html":
            elm.innerHTML = op.value;
            op.subscribe(() => {
              elm.innerHTML = op.value;
            });
            break;
          case "value":
            elm.value = op.value;
            elm.addEventListener("input", () => {
              op.value = elm.value;
            });
            op.subscribe(() => {
              elm.value = op.value;
            });
            break;
          case "show":
            elm.style.display = op.value ? "" : "none"
            op.subscribe(() => {
              elm.style.display = op.value ? "" : "none"
            });
            break;
          default:
            op.subscribe(() => {
              elm[key] = op.value;
            });
        }
        continue;
      }

      switch (key) {
        case "text":
          elm.innerText = op;
          continue;
        case "html":
          elm.innerHTML = op;
          continue;
        default:
          elm[key] = op;
          continue;
      }
    }
  }

  if (childs) {
    for (let i = 0; i < childs.length; i++) {
      if (Array.isArray(childs[i])) {
        for (const child of childs[i]) {
          elm.appendChild(child);
        }
      } else {
        elm.appendChild(childs[i]);
      }
    }
  }

  return elm;
}

export function ref(value) {
  const subscribes = [];
  const refObject = {
    isRef: true,
  
    get value() {
      return value;
    },
    set value(newValue) {
      value = newValue;
      this.callSubscribe()
    },


    subscribe(func) {
      subscribes.push(func);
    },
    callSubscribe(){
      for (const func of subscribes) {
        func();
      }
    },
    markChange(){
      this.callSubscribe();
    }
  };
  return refObject;
}

export function range(arrItem, render) {
    const ctn = e("div");
    
    function callRender(){
      const arrItemWrap = arrItem.value ? arrItem.value : arrItem
      for(let i = 0; i < arrItemWrap.length; i++){
        const itemElm = render(arrItemWrap[i], i);

        ctn.appendChild(itemElm)
      }

      return ctn
    }

    if(arrItem.isRef){
      arrItem.subscribe(()=> {
        ctn.innerHTML = "";
        callRender()
      })
    }

    return callRender()
}