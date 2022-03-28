export function currency() {
    var mylist = document.getElementById("favourite");
    document.getElementById("favourite").value = mylist.options[mylist.selectedIndex].text;
    }
