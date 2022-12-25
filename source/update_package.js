var _data;

$(document).ready(function () {
    $.getJSON("packages.json", 
            function (data) {
                _data = data;
        var items = '';

        $.each(data, function (key, value) {
            items += '<tr>';

            items += '<td>' +
                value.id + "</td>";

            items += '<td>' + 
                value.chip_type + '</td>';

            items += '<td>$' + 
                value.price + '</td>';
            
            items += '<td>' +
                value.status + "</td>";

            items += '<td>' +
                "<button><a onclick=\"change_status(" + key +")\">Update</a></button>" + "</td>";

            items += '</tr>';
        });
          
        $('#table').append(items);
    });
});


function search() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("input");
    filter = input.value.toUpperCase();
    table = document.getElementById("table");
    tr = table.getElementsByTagName("tr");
  
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
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

function search_p() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("inputp");
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

function show(shown, hidden) {
    document.getElementById(shown).style.display='block';
    document.getElementById(hidden).style.display='none';
}

function updateT() {
    var item = "";
    $('#table tr').remove()
    var total = 0;
    items = [];
    $.each(_data, function (key, value) {
        items += '<tr>';

        items += '<td>' +
            value.id + "</td>";

        items += '<td>' + 
            value.chip_type + '</td>';

        items += '<td>$' + 
            value.price + '</td>';
        
        items += '<td>' +
            value.status + "</td>";
        
        items += '<td>' +
            "<button><a onclick=\"change_status(" + key +")\">Update</a></button>" + "</td>";

        items += '</tr>';
    });
      
    $('#table').append(items);
}

// function nodetail() {
//     $('#detailT tr').remove()
//     show('all', 'detail')
// }

function change_status(k) {
    if(_data[k].status == "In-progress") {
        _data[k].status = "Finished"
    }
    updateT();
}