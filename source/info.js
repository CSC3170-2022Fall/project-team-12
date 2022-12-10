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
            
            items += '<td>' +
                value.status + "</td>";

            items += '<td>' +
                "<button><a onclick=\"getdetail(" + key +")\">Detail</a></button>" + "</td>";

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
        
        items += '<td>' +
            value.status + "</td>";
        
        items += '<td>' +
            "<button><a onclick=\"getdetail(" + key +")\">Detail</a></button>" + "</td>";

        items += '</tr>';
    });
      
    $('#table').append(items);
}

function getdetail(k) {
    $('#detailT tr').remove()
    $('#details button').remove()
    tmp = _data[k]
    items = [];
    items += '<tr>';

    items += '<td>' +
        tmp.id + "</td>";

    items += '<td>' + 
        tmp.chip_type + '</td>';

    items += '<td>$' + 
        tmp.price + '</td>';

    items += '<td>' +
        tmp.start_time + "</td>";
    
    items += '<td>' +
        tmp.end_time + "</td>";
    
    items += '<td>' +
        tmp.status + "</td>";

    items += '</tr>';
    $('#detailT').append(items);

    btn = "<button onclick=\"cancel(" + k + ")\">Cancel</button>"
    $('#details').append(btn);

    show('detail', 'all')
}

function nodetail() {
    $('#detailT tr').remove()
    show('all', 'detail')
}

function cancel(k) {
    if(_data[k].status == "In-progress") {
        _data[k].status = "Cancelled"
    }
    updateT();
    getdetail(k);
}
