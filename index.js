$(function () {
    getBusinessData(1, 3)
})
function getBusinessData(page, rows) {

    $.ajax({
        type: 'get',
        dataType: 'json',
        url: './test.json',
        data: {
            page: page,
            rows: rows
        },
        beforeSend: function (res) {
            res.setRequestHeader('Content-Type: application/json')
        },
        success: function (res) {
            var str = template('businessList', res)
            $("#adminTbody").html(str)
        }
    })
}