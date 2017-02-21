// create table rows function
$(document).ready(function() {

    function createTableRow(tbody, price, itemName) {
        let tableRow = $('<tr>')
        let tableData = $('<td>')
        let priceData = $('<td>').addClass("price-data")
        tableRow.appendTo('#tbody')
        tableData.appendTo(tableRow)
        priceData.appendTo(tableRow)
        tableData.text(itemName)
        priceData.text(price)
    }

    function createSubtotal() {
        let price = $('table').find(".price-data")
        let priceArr = price.toArray()
        let subTotal = 0
        // console.log(priceArr);
        for (i = 0; i < priceArr.length; i++) {
            let itemPrice = $(priceArr[i]).text()
            itemPrice = itemPrice.substring(1)
            subTotal += parseFloat(itemPrice)

        }
        return subTotal
    }

    function doTax(subTotal) {
        let tax = +(subTotal * 0.08).toFixed(2)
        return tax
    }
    $('.order-event').on('click', function() {
        if (event.target.className === 'order-link') {
            let price = $(event.target).siblings().text()
            let item = $(event.target).parents().parents().children(".card-image").children('.card-title').text();
            createTableRow(tbody, price, item)
            let subTotal = createSubtotal()
            subTotal = +(subTotal.toFixed(2))
            let subtotalAmount = $('table').find("#subtotal-amount")
            $(subtotalAmount).text("$" + subTotal)
            let salesTax = doTax(subTotal)
            let taxAmount = $('table').find('#tax')
            $(taxAmount).text("$" + salesTax)
            let total = +(subTotal + salesTax).toFixed(2)
            $('table').find('#total').text("$" + total)
            console.log(typeof total);


        }

    })








})
