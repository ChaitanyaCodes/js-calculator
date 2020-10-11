function calc() {
  let num1 = parseInt(document.querySelector("#value1").value);
  let num2 = parseInt(document.querySelector("#value2").value);
  let operator = document.querySelector("#operator").value;
  let calculate;

  if (operator == "add") {
    calculate = num1 + num2;
  } else if (operator == "sub") {
    calculate = num1 - num2;
  } else if (operator == "div") {
    calculate = num1 / num2;
  } else if (operator == "mul") {
    calculate = num1 * num2;
  }

  console.log(calculate);
  document.querySelector("#result").innerHTML = "Answer: " + calculate;
}
