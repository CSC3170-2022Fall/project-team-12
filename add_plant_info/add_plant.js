var _data;

$(document).ready(function () {
    $.getJSON("machine.json", 
            function (data) {
                _data = data;
        var plant = '';

        $.each(data, function (key, value) {
            plant += '<tr>';
            
            plant += '<td>' + 
                key + '</td>';

            plant += '<td>' + 
                value.machine_type + '</td>';
            
            plant += '<td>' + 
                value.name + '</td>';

            plant += '<td>' + 
                value.num_machines + '</td>';
            
            plant += '<td>' +
                "<button onclick=\"delitem(" + key + ")\" id =\""+key + "\">×</button>" + "</td>";

            plant += '</tr>';
        });
          
        $('#table').append(plant);
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

function add(d) {
    var tmp;
    tmp = _data[d]
    _data.push(tmp);
    updateCart();
    show("plant", "add_plant")
}

function show(shown, hidden) {
    document.getElementById(shown).style.display='block';
    document.getElementById(hidden).style.display='none';
}

function add_new() {
  var machineType = document.querySelector('input[name="machine_type"]').value;
  var machineName = document.querySelector('input[name="machine_name"]').value;
  var numMachines = document.querySelector('input[name="num_machines"]').value;
  var new_plant = {
    id: _data.length,
    machine_type: machineType,
    name: machineName,
    num_machines: numMachines
  }
  _data.push(new_plant)
  updateCart()
  show("plant", "add_plant")
}


function updateCart() {
    var item = "";
    $('#table tr').remove()
    $.each(_data, function (key, value) {

        item += '<tr>';

        item += '<td>' + 
            key + '</td>';

        item += '<td>' + 
            value.machine_type + '</td>';

        item += '<td>' + 
            value.name + '</td>';

        item += '<td>' + 
            value.num_machines + '</td>';

        item += '<td>' +
            "<button onclick=\"delitem(" + key + ")\">×</button>" + "</td>";

        item += '</tr>';

    });

    $('#table').append(item);
}


function delitem(i) {
    _data.splice(i, 1)
    updateCart()
}

function purge() {
    _data = []
    updateCart()
}
