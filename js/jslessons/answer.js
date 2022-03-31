const register = function (event) {
    // Receive user input
    let r_name = document.querySelector("#name").value;
    let r_aadhar = document.querySelector("#aadarno").value;
    let r_dob = document.querySelector("#dob").value;
    let r_city = document.querySelector("#city").value;
    let r_time_of_test = document.querySelector("#time_of_test").value;
    let r_result = document.querySelector("#result").value;
    let r_labname = document.querySelector("#labname").value;
    let r_reportno = document.querySelector("#reportno").value;
    let r_gender = document.querySelector("#gender").value;
  
    // Output on page
    display_name.innerHTML = r_name;
    display_aadhar.innerHTML = r_aadhar;
    display_dob.innerHTML = r_dob;
    display_city.innerHTML = r_city;
    display_time_of_test.innerHTML = r_time_of_test;
    display_result.innerHTML = r_result;
    display_labname.innerHTML = r_labname;
    display_reportno.innerHTML = r_reportno;
    display_gender.innerHTML = r_gender;
  
    event.preventDefault();
  }