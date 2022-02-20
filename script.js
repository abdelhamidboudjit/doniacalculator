console.log("hello world");
let screen = document.getElementById("screen");
let buttons = Array.from(document.getElementsByClassName("button-6"));
buttons.map((button) => {
  button.addEventListener("click", (e) => {
    if (screen.innerText === "0") {
      screen.innerText = "";
    }

    switch (e.target.innerText) {
      case "C":
        screen.innerText = "0";
        break;
      case "←":
        screen.innerText = screen.innerText.slice(0, -1);
        if (screen.innerText === "") {
          screen.innerText = "0";
        }

        break;
      case "=":
        try {
          screen.innerText = eval(screen.innerText);
        } catch {
          screen.innerText = "Error";
        }
        break;

      default:
        screen.innerText += e.target.innerText;
    }
  });
});
