import { setTheme1, setTheme2, setTheme3 } from "./theme.js";

//referencias html
const d = document;

let resultTop = d.querySelector(".result-prev");
let result = d.querySelector(".result");
let id = 1;

d.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("theme") === null) {
    setTheme1();
  } else {
    if (JSON.parse(localStorage.getItem("theme")) === 1) {
      setTheme1();
      id = 1;
    } else if (JSON.parse(localStorage.getItem("theme")) === 2) {
      setTheme2();
      id = 2;
    } else if (JSON.parse(localStorage.getItem("theme")) === 3) {
      id = 3;
      setTheme3();
    }
  }
});
d.addEventListener("click", (e) => {
  if (e.target.matches(".number")) {
    if (result.textContent == "0") {
      if (e.target.textContent === ".") {
        result.textContent = "0" + e.target.textContent;
      } else {
        result.textContent = e.target.textContent;
      }
    } else {
      if (e.target.textContent === ".") {
        if (
          /\./.test(result.textContent) === false &&
          result.textContent[result.textContent.length - 1] !== "-"
        ) {
          result.textContent += e.target.textContent;
        }
      } else {
        result.textContent += e.target.textContent;
      }
    }
  }

  if (e.target.matches(".sign")) {
    if (
      result.textContent === "0" &&
      result.textContent[0] !== "-" &&
      resultTop.textContent[resultTop.textContent.length - 1] !== "-" &&
      resultTop.textContent[resultTop.textContent.length - 1] !== "+" &&
      resultTop.textContent[resultTop.textContent.length - 1] !== "*" &&
      resultTop.textContent[resultTop.textContent.length - 1] !== "/"
    ) {
      result.textContent = e.target.textContent;
    } else if (
      result.textContent !== "0" &&
      result.textContent[result.textContent.length - 1] !== "." &&
      result.textContent[result.textContent.length - 1] !== "-" &&
      result.textContent[result.textContent.length - 1] !== "+" &&
      result.textContent[result.textContent.length - 1] !== "*" &&
      result.textContent[result.textContent.length - 1] !== "/"
    ) {
      resultTop.textContent += result.textContent + e.target.textContent;
      console.log(resultTop.textContent);
      result.textContent = 0;
    }
  }
  if (e.target.matches("#equals-btn")) {
    console.log(resultTop.textContent);
    if (
      resultTop.textContent.charAt(-1) === "*" ||
      resultTop.textContent.charAt(-1) === "/"
    ) {
      resultTop.textContent += "1";
      console.log(resultTop.textContent);
      result.textContent = eval(resultTop.textContent);
      resultTop.textContent = "";
    } else {
      resultTop.textContent += result.textContent;
      result.textContent = eval(resultTop.textContent);
      resultTop.textContent = "";
    }
  }

  if (e.target.matches("#reset-btn")) {
    resultTop.textContent = "";
    result.textContent = "0";
  }
  if (e.target.matches("#del-btn")) {
    if (result.textContent !== "0") {
      if (
        result.textContent.substring(0, result.textContent.length - 1) === ""
      ) {
        result.textContent = "0";
      } else {
        result.textContent = result.textContent.substring(
          0,
          result.textContent.length - 1
        );
      }
    }
  }

  if (e.target.matches(".ball-container") || e.target.matches(".ball")) {
    id++;

    switch (id) {
      case 2:
        setTheme2();
        localStorage.setItem("theme", JSON.stringify(id));

        break;
      case 3:
        setTheme3();
        localStorage.setItem("theme", JSON.stringify(id));

        break;
      case 4:
        id = 1;
        setTheme1();
        localStorage.setItem("theme", JSON.stringify(id));

        break;
    }
  }
});
