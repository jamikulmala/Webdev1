/**
 * Sort table rows alphabetically based on the values in a column
 *
 * @param {Number} col column index (zero based)
 * @param {HTMLTableElement} table the table to be sorted
 */

function sortTableByColumn(col, table) {
  var rowdata = table.getElementsByTagName('tr');
  let arr = [];
  // get all table elements to an array
  for(let row = 1;row < rowdata.length; row++){
      elems = (rowdata[row].innerText.split('\t'));
      arr.push(elems);
    }
  // sort the array using the chosen column
  arr = arr.sort(function(a,b) {
    return a[col].localeCompare(b[col]);

  });

  // display the table
  for(let row = 0;row < arr.length; row++){
    var cells = rowdata[row+1].getElementsByTagName('td')
    for(let cell = 0;cell < arr[row].length; cell++){
      cells[cell].innerHTML = arr[row][cell];
    }
  }
}

const table = document.getElementById('sortable');

// attach an event listener to each th element's click event
table.querySelectorAll('thead th').forEach((th, i) =>
  th.addEventListener('click', () => {
    sortTableByColumn(i, table);
  })
);