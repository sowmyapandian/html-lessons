var rIndex,
 table = document.getElementById("table");

function checkEmptyInput() {
 var isEmpty = false,
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

 if (fname === "") {
 alert("First Name Connot Be Empty");
 isEmpty = true;
 } else if (aadhar === "") {
 alert("Last Name Connot Be Empty");
 isEmpty = true;
} else if (dob === "") {
 alert("DOB Connot Be Empty");
 isEmpty = true;
 } else if (city === "") {
 alert("City Connot Be Empty");
 isEmpty = true;
 } else if (date === "") {
 alert("Date Connot Be Empty");
 isEmpty = true;
 } else if (time === "") {
 alert("Time Connot Be Empty");
 isEmpty = true;
 } else if (gender === "") {
 alert("Gender Connot Be Empty");
 isEmpty = true;
 } else if (lab === "") {
 alert("Lab Connot Be Empty");
 isEmpty = true;
 } else if (report === "") {
 alert("Report Connot Be Empty");
 isEmpty = true;
 } else if (result === "") {
 alert("Result Connot Be Empty");
 isEmpty = true;
 }
 return isEmpty;
}

function addHtmlTableRow() {
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
// display selected row data into input text
function selectedRowToInput() {
 for (var i = 1; i < table.rows.length; i++) {
table.rows[i].onclick = function () {
 // get the seected row index
 rIndex = this.rowIndex;
 document.getElementById("fname").value = this.cells[0].innerHTML;
 document.getElementById("aadhar").value = this.cells[1].innerHTML;
 document.getElementById("dob").value = this.cells[2].innerHTML;
 document.getElementById("city").value = this.cells[3].innerHTML;
 document.getElementById("date").value = this.cells[4].innerHTML;
 document.getElementById("time").value = this.cells[5].innerHTML;
 document.getElementById("gender").value = this.cells[6].innerHTML;
 document.getElementById("lab").value = this.cells[7].innerHTML;
 document.getElementById("report").value = this.cells[8].innerHTML;
 document.getElementById("result").value = this.cells[9].innerHTML;
 };
 }
}
selectedRowToInput();
function myFunction() {
   var input, filter, table, tr, td, i, txtValue;
input = document.getElementById("search");
filter = input.value.toUpperCase();
 table = document.getElementById("table");
tr = table.getElementsByTagName("tr");

for (i = 0; i < tr.length; i++) {
td = tr[i].getElementsByTagName("td")[1];
 if (td) {
 txtValue = td.textContent || td.innerText;
 if (txtValue.toUpperCase().indexOf(filter) > -1) {
tr[i].style.display = "";
 } else {
tr[i].style.display = "none";
}
 }
}
}