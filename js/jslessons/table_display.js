export function selectedRowToInput() {
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
  
  export function myFunction() {
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