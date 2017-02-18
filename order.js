// create table rows function
$(document).ready(function() {
    let counter = 0

    function createTableRow(tbody, price, itemName) {
        if (counter === 0) {
            let tableRow = $('<tr>')
            let tableData = $('<td>').addClass(itemName + "-data")
            let priceData = $('<td>').addClass(price + '-data')
            tableRow.appendTo('#tbody')
            tableData.appendTo(tableRow)
            priceData.appendTo(tableRow)

            tableData.text(itemName)
            priceData.text(price)
            console.log(tableData[0]);
        } else if (counter >= 1) {
            console.log($('t').children().attr(itemName + "-data"));
            $('tr').children().attr(itemName + "-data").text().replaceWith(itemName + " x" + counter)
            $('tr').children().hasClass(price + "-data").replaceWith("$" + (price.slice(1) * counter))
        }
    }

    // function replaceTableRow(price, item) {
    //   createTableRow()
    //     $(tableData.text()).replaceWith(item)
    //     $(priceData.text()).replaceWith(price)
    // }
    // replaceTableRow(tbody, '$10.99', "Sesame Chicken", 3)
    console.log(counter);

    $('.order-event').on('click', function() {
        if (event.target.className === 'order-link') {
            let price = $(event.target).siblings().text()
            let item = $(event.target).parents().parents().children(".card-image").children('.card-title').text();
            createTableRow(tbody, price, item)
            counter = counter + 1;

            // if (counter <= 1) {
            //     createTableRow(tbody, price, item)
            //
            // } else if (counter > 1) {
            //     price = "$" + (price.slice(1) * counter)
            //     item = item + " x" + counter
            //     replaceTableRow(price, item)
            // }
            console.log("counter = " + counter);
        }


    })








})
