
import { checkEmptyInput } from "./validation.js";
import { addHtmlTableRow } from "./collection.js";
import { selectedRowToInput, myFunction } from "./table_display.js";

var addData = document.getElementById("add-btn");
addData.addEventListener("click", function () {
  addHtmlTableRow();
});

function callSearch() {
  myFunction();
}
window.callSearch = callSearch;