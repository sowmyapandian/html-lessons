export function checkEmptyInput() {
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