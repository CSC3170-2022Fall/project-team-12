var _data;

$(document).ready(function () {
    $.getJSON("chips.json", 
            function (data) {
                _data = data;
        var chips = '';

        $.each(data, function (key, value) {
            chips += '<tr>';

            chips += '<td>' + 
                value.chip_type + '</td>';

            chips += '<td>$' + 
                value.price + '</td>';

            chips += '<td>' +
                "<button onclick=\"add(" + value.id + ")\" id=\"" + value.id + "\">Add</button>" + "</td>";

            chips += '</tr>';
        });
          
        $('#table').append(chips);
    });
});

function search_t() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("inputt");
    filter = input.value.toUpperCase();
    table = document.getElementById("table");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
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
  
    // Loop through all table rows, and hide those who don't match the search query
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

var cart = [];

function add(d) {
    var tmp;
    tmp = _data[d]
    cart.push(tmp);
    updateCart();
    show("cart", "add_chip")
}

function show(shown, hidden) {
    document.getElementById(shown).style.display='block';
    document.getElementById(hidden).style.display='none';
}

function updateCart() {
    var item = "";
    $('#shopping_cart tr').remove()
    var total = 0;
    $.each(cart, function (key, value) {

        var subtotal = 1;

        item += '<tr>';

        item += '<td>' + 
            value.chip_type + '</td>';

        item += '<td>$' + 
            value.price + '</td>';

        item += '<td>' +
            "<button onclick=\"delitem(" + key + ")\">×</button>" + "</td>";

        item += '</tr>';

        total = total + value.price
    });

    $('#shopping_cart').append(item);
    document.getElementById("total").innerHTML = "<strong>$" + total + "</strong>";
}

function delitem(i) {
    cart.splice(i, 1)
    updateCart()
}

function purge() {
    cart = []
    updateCart()
}
