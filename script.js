"strict mode";
const container = document.querySelector(".container");
const themeDiv = document.querySelector(".theme-btn");
const tp = document.querySelector(".theme-btn p");
const toggle = document.querySelector(".toggle");
const inputs = document.querySelector(".inputs");
const additionBtn = document.querySelector(".addition");
const subtractionBtn = document.querySelector(".subtraction");
const divideBtn = document.querySelector(".divide");
const multiplyBtn = document.querySelector(".multiply");
const pointBtn = document.querySelector(".point");
const numbersOperator = document.querySelector(".numbers-operators");
const body = document.querySelector("body");
const root = document.querySelector(":root");
const RESET = document.querySelector("#RESET");
const del = document.querySelector(".del");
const calcTheme = document.querySelector(".calc-theme");
const equals = document.querySelector("#equals");
const numbs = document.querySelectorAll(".n");
const op = document.querySelectorAll(".o");
const ed = document.querySelectorAll(".ed");
const keys1 = document.querySelectorAll(".keys-1");
const zeroBtn = document.querySelector(".zero");

//////////
let toggleNumber = 0;
let submitted = false;
/////////////
themeDiv.addEventListener("click", function () {
  toggleNumber += 1;

  if (toggleNumber === 1) {
    toggle.style.transform = `translate(${toggleNumber}00%)`;
    body.classList.remove("body-1");
    body.classList.add("body-2");
    calcTheme.classList.remove("calc-theme-1");
    calcTheme.classList.add("calc-theme-2");
    equals.classList.remove("equals-1");
    equals.classList.add("equals-2");
    del.classList.remove("reset-del-1");
    del.classList.add("reset-del-2");
    numbs.forEach((nm) => {
      nm.classList.remove("keys-1");
      nm.classList.add("keys-2");
    });
    op.forEach((o) => {
      o.classList.remove("keys-1");
      o.classList.add("keys-2");
    });
    RESET.classList.remove("reset-del-1");
    RESET.classList.add("reset-del-2");
    inputs.classList.remove("inputs-1");
    inputs.classList.add("inputs-2");
    toggle.classList.remove("toggle-1");
    toggle.classList.add("toggle-2");

    pointBtn.classList.remove("keys-1");
    pointBtn.classList.add("keys-2");
    numbersOperator.classList.remove("numbers-operators-1");
    numbersOperator.classList.add("numbers-operators-2");

    themeDiv.classList.remove("theme-btn-1");
    themeDiv.classList.add("theme-btn-2");
  }

  if (toggleNumber === 2) {
    toggle.style.transform = `translate(${toggleNumber}00%)`;
    body.classList.remove("body-2");
    body.classList.add("body-3");
    calcTheme.classList.remove("calc-theme-2");
    calcTheme.classList.add("calc-theme-3");
    equals.classList.remove("equals-2");
    equals.classList.add("equals-3");
    del.classList.remove("reset-del-2");
    del.classList.add("reset-del-3");
    numbs.forEach((nm) => {
      nm.classList.remove("keys-2");
      nm.classList.add("keys-3");
    });
    op.forEach((o) => {
      o.classList.remove("keys-2");
      o.classList.add("keys-3");
    });
    RESET.classList.remove("reset-del-2");
    RESET.classList.add("reset-del-3");
    inputs.classList.remove("inputs-2");
    inputs.classList.add("inputs-3");
    toggle.classList.remove("toggle-2");
    toggle.classList.add("toggle-3");

    pointBtn.classList.remove("keys-2");
    pointBtn.classList.add("keys-3");

    numbersOperator.classList.remove("numbers-operators-2");
    numbersOperator.classList.add("numbers-operators-3");

    themeDiv.classList.remove("theme-btn-2");
    themeDiv.classList.add("theme-btn-3");
    // e.classList.remove("body-1");
  }

  if (toggleNumber === 3) {
    toggleNumber = 0;
  }
  if (toggleNumber === 0) {
    toggle.style.transform = `translate(${toggleNumber}00%)`;
    body.classList.remove("body-3");
    body.classList.add("body-1");
    calcTheme.classList.remove("calc-theme-3");
    calcTheme.classList.add("calc-theme-1");
    equals.classList.remove("equals-3");
    equals.classList.add("equals-1");
    del.classList.remove("reset-del-3");
    del.classList.add("reset-del-1");
    numbs.forEach((nm) => {
      nm.classList.remove("keys-3");
      nm.classList.add("keys-1");
    });
    op.forEach((o) => {
      o.classList.remove("keys-3");
      o.classList.add("keys-1");
    });
    RESET.classList.remove("reset-del-3");
    RESET.classList.add("reset-del-1");
    inputs.classList.remove("inputs-3");
    inputs.classList.add("inputs-1");
    toggle.classList.remove("toggle-3");
    toggle.classList.add("toggle-1");

    pointBtn.classList.remove("keys-3");
    pointBtn.classList.add("keys-1");

    numbersOperator.classList.remove("numbers-operators-3");
    numbersOperator.classList.add("numbers-operators-1");

    themeDiv.classList.remove("theme-btn-3");
    themeDiv.classList.add("theme-btn-1");
  }
});

const formatted = new Intl.NumberFormat("en-US").format;

let newObj;
let click = 0;
let check = 0;
let answer;
let type;
let inpValue;
//clasess
class Calculator {
  type;
  val1;
  val2;
  ans;

  constructor() {
    // this.val1;
    // this.val2;
  }

  reset() {
    this.val1 = 0;
    this.val2 = 0;
    newObj;
    click = 0;
    check = 0;
    answer;
  }
  del() {
    inputs.textContent = inputs.textContent.slice(
      0,
      inputs.textContent.length - 1
    );
  }

  equalsTo() {}

  sub() {
    return (this.ans = this.val1 - this.val2);
  }

  add() {
    return (this.ans = this.val1 + this.val2);
  }

  mul() {
    return (this.ans = this.val1 * this.val2);
  }

  div() {
    return (this.ans = this.val1 / this.val2);
  }

  updateAdd(inp) {
    return (this.ans = this.ans + inp);
    ///////
  }

  updateSub(inp) {
    return (this.ans = this.ans - inp);
    ///////
  }

  updateMul(inp) {
    return (this.ans = this.ans * inp);
    ///////
  }

  updateDiv(inp) {
    return (this.ans = this.ans / inp);
    ///////
  }
}

function toNumber(n) {
  return +n.split(",").join("");
}

function formatFxn(n) {
  return toNumber(n);
}

numbs.forEach((numbers) => {
  numbers.addEventListener("click", function () {
    // if (inputs.textContent === "0") {
    // inputs.textContent = "";
    //   console.log("issue 1");
    // }

    if (submitted) {
      inputs.textContent = "";
      newObj = undefined;
      submitted = false;
    }
    if (newObj?.ans && click) {
      if (inputs.textContent == "0.") {
        inputs.textContent += numbers.textContent;
        click = 0;

        return;
      } else {
        inputs.textContent = "";
      }
    }

    click = 0;

    if (inputs.textContent === "0") {
      inputs.textContent = "";
    }

    if (inputs.textContent == "0.") {
      inputs.textContent += numbers.textContent;
      return;
    } else {
      inputs.textContent = inputs.textContent;
    }

    if (inputs.textContent.includes(".")) {
      inputs.textContent += this.textContent;
      return;
    }
    inputs.textContent += numbers.textContent;
    // number format
    if (inputs.textContent.length > 3) {
      inputs.textContent = formatted(formatFxn(inputs.textContent));
    }

    // /////////
  });
});

////////////////////submit
equals.addEventListener("click", function () {
  if (newObj) {
    if (newObj?.ans) {
      newObj.val2 = toNumber(inputs.textContent);
      if (newObj.type == "addition") {
        answer = newObj.updateAdd(newObj.val2);
        inputs.textContent = formatted(newObj.ans);
      }
      if (newObj.type == "subtraction") {
        answer = newObj.updateSub(newObj.val2);
        inputs.textContent = formatted(newObj.ans);
      }
      if (newObj.type == "multiply") {
        answer = newObj.updateMul(newObj.val2);
        inputs.textContent = formatted(newObj.ans);
      }
      if (newObj.type == "divide") {
        answer = newObj.updateDiv(newObj.val2);
        inputs.textContent = formatted(newObj.ans);
      }
    } else {
      newObj.val2 = toNumber(inputs.textContent);
      if ((newObj.val1 || newObj.val2) && newObj.type) {
        console.log(newObj);
        if (newObj.type == "addition") {
          answer = newObj.add();
          inputs.textContent = formatted(newObj.ans);
        }
        if (newObj.type == "subtraction") {
          answer = newObj.sub();
          inputs.textContent = formatted(newObj.ans);
        }
        if (newObj.type == "multiply") {
          answer = newObj.mul();
          inputs.textContent = formatted(newObj.ans);
        }
        if (newObj.type == "divide") {
          answer = newObj.div();
          inputs.textContent = formatted(newObj.ans);
        }
      }
    }

    if (click) {
      if (!newObj.ans) return;
      if (newObj.ans) {
        inputs.textContent = formatted(newObj.ans);
        click = 0;
      }
    }

    newObj.ans = answer;
    submitted = true;
    console.log(newObj);
    // newObj.val2 = 0;
    // newObj.val1 = 0;
  }
});

op.forEach((opera) => {
  opera.addEventListener("click", function () {
    // console.log("pressed");
    if (click) {
      newObj.type = opera.dataset.operator;
      return;
    }
    if (!newObj) {
      newObj = new Calculator();
      newObj.val1 = toNumber(inputs.textContent);
      newObj.type = opera.dataset.operator;
      // console.log(newObj);
      inputs.textContent = "0";
    } else if (newObj) {
      if (newObj.val1 && !newObj.val2) {
        newObj.val2 = toNumber(inputs.textContent);
        console.log("otiselse");
        if (newObj.type == "addition") {
          answer = newObj.add();
          inputs.textContent = formatted(newObj.ans);
        }
        if (newObj.type == "subtraction") {
          answer = newObj.sub();
          inputs.textContent = formatted(newObj.ans);
        }
        if (newObj.type == "multiply") {
          answer = newObj.mul();
          inputs.textContent = formatted(newObj.ans);
        }
        if (newObj.type == "divide") {
          answer = newObj.div();
          inputs.textContent = formatted(newObj.ans);
        }
      } else if (newObj.val2 && newObj.ans) {
        if (submitted) {
          // newObj.ans =
          newObj.ans = toNumber(inputs.textContent);
          inputs.textContent = "0";
          submitted = false;
          newObj.type = opera.dataset.operator;
          click++;
          return;
        } else {
          newObj.val2 = toNumber(inputs.textContent);
          if (newObj.type == "addition") {
            answer = newObj.updateAdd(newObj.val2);
            inputs.textContent = formatted(newObj.ans);
          }
          if (newObj.type == "subtraction") {
            answer = newObj.updateSub(newObj.val2);
            inputs.textContent = formatted(newObj.ans);
          }
          if (newObj.type == "multiply") {
            answer = newObj.updateMul(newObj.val2);
            inputs.textContent = formatted(newObj.ans);
          }
          if (newObj.type == "divide") {
            answer = newObj.updateDiv(newObj.val2);
            inputs.textContent = formatted(newObj.ans);
          }
        }
      }

      newObj.type = opera.dataset.operator;
    }

    //
    click++;
    console.log("cl");
    // //////// clear field

    ///
  });
});
let value2;
pointBtn.addEventListener("click", function () {
  // if (click) {
  //   if (inputs.textContent.includes(".")) return;

  //   inputs.textContent += this.textContent;

  //   return;
  // }

  if (click) {
    inputs.textContent = "0";
    console.log("error 1");
  }
  if (newObj && newObj.ans) {
    if (inputs.textContent) {
      if (inputs.textContent.includes(".")) return;

      inputs.textContent += this.textContent;

      return;
    }
    inputs.textContent = "0";
    console.log("error 2");
  }

  // if(click && )

  if (inputs.textContent === "0") {
    inputs.textContent = "0.";
  }
  if (inputs.textContent.includes(".")) return;

  inputs.textContent += this.textContent;
});
RESET.addEventListener("click", function () {
  newObj = undefined;
  inputs.textContent = "0";
});
del.addEventListener("click", function () {
  inpValue = inputs.textContent.split(",").join("").split("");
  value2 = inpValue.pop();
  console.log(value2);
  inpValue = inpValue.join("");
  console.log(inpValue);
  inputs.textContent = formatted(toNumber(inpValue));

  // inpValue = inpValue.slice(inpValue.length - 1, -1);
  // console.log(inpValue);
});
