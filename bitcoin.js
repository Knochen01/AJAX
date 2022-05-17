let btn = document.querySelector('.btn')
let span = document.querySelector('#price')
let currency = "USD"


    btn.addEventListener('click', function () {
        let Bitcoin = new XMLHttpRequest();

        Bitcoin.onreadystatechange = function() {
            if ( Bitcoin.readyState == 4 && Bitcoin.status == 200) {
                let price = JSON.parse(Bitcoin.responseText)
                let GBPprice = price.bpi[currency].rate
                span.textContent = GBPprice + " " + currency

            }
        }
        Bitcoin.open("GET", 'https://api.coindesk.com/v1/bpi/currentprice.json' )
        Bitcoin.send()
    })

