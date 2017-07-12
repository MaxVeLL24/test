$(document).ready(function () {
    var time;
    $('input[name=getHint]').keyup(function (e) {
        clearTimeout(time);
        var getHint = $(this).val();
        time = setTimeout(function () {
            geth(getHint);
        }, 300);
    });
    function geth(getHint) {
        $.ajax({
            url: "getHint.php",
            type: "post",
            data: {'getHint': getHint},
            success: function (response) {
                $('a.hint').remove();
                $('div.hints').append(response);

            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(textStatus, errorThrown);
            }
        });
    }
});