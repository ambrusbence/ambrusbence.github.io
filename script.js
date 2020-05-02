function insertrow(tableid, c1, c2, c3) { 
    var mytable = document.getElementById(tableid);
    var cell1 = mytable.getElementsByClassName(c1);
    cell1 = cell1[0].value;
    var cell2 = mytable.getElementsByClassName(c2);
    cell2 = cell2[0].value;
    var cell3 = mytable.getElementsByClassName(c3);
    cell3 = cell3[0].value;
    // console.log(cell1, cell2, cell3);

    if (cell1 !== "" && cell2 !== "" && cell3 !== "") {
    var tablelength = mytable.rows.length-1;
    console.log(tablelength);
    var newrow = mytable.insertRow(mytable.rows.length - 1);
    var newrow_cell1 = newrow.insertCell(0);
    newrow_cell1.innerHTML = cell1;
    var newrow_cell2 = newrow.insertCell(1);
    newrow_cell2.innerHTML = cell2;
    var newrow_cell3 = newrow.insertCell(2);
    newrow_cell3.innerHTML = cell3;
    }
}