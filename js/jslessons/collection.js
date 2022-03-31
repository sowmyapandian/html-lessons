import { checkEmptyInput } from "./validation.js";
import { selectedRowToInput } from "./table_display.js";

export function addHtmlTableRow() {
  if (!checkEmptyInput()) {
    var newRow = table.insertRow(table.length),
      cell1 = newRow.insertCell(0),
      cell2 = newRow.insertCell(1),
      cell3 = newRow.insertCell(2),
      cell4 = newRow.insertCell(3),
      cell5 = newRow.insertCell(4),
      cell6 = newRow.insertCell(5),
      cell7 = newRow.insertCell(6),
      cell8 = newRow.insertCell(7),
      cell9 = newRow.insertCell(8),
      cell10 = newRow.insertCell(9),
      fname = document.getElementById("fname").value,
      aadhar = document.getElementById("aadhar").value,
      dob = document.getElementById("dob").value,
      city = document.getElementById("city").value,
      date = document.getElementById("date").value,
      time = document.getElementById("time").value,
      gender = document.getElementById("gender").value,
      lab = document.getElementById("lab").value,
      report = document.getElementById("report").value,
      result = document.getElementById("result").value;

    cell1.innerHTML = fname;
    cell2.innerHTML = aadhar;
    cell3.innerHTML = dob;
    cell4.innerHTML = city;
    cell5.innerHTML = date;
    cell6.innerHTML = time;
    cell7.innerHTML = gender;
    cell8.innerHTML = lab;
    cell9.innerHTML = report;
    cell10.innerHTML = result;
    selectedRowToInput();
  }
}