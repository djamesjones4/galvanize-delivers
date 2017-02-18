// create table rows function
$(document).ready(function() {
    function createTableRow(tbody, price, itemName) {
        let tableRow = $('<tr>')
        let tableData = $('<td>')
        let priceData = $('<td>')
        tableRow.appendTo('#tbody')
        tableData.appendTo(tableRow)
        priceData.appendTo(tableRow)
        tableData.text(itemName)
        priceData.text(price)
    }
    $('.order-event').on('click', function() {
        if (event.target.className === 'order-link') {
            console.log("you clicked");

        }


    })




    createTableRow(tbody, 9, "hello");




})
