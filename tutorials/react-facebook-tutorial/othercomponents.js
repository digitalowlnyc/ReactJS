/**
 * Created by work on 2/21/16.
 */
// These are on react compenents that I abstracted from the tutorial code,
// so that we can focus on the react stuff


function loadServerData(url, onSuccessFunc) {
    $.ajax({
        url: url,
        dataType: 'json',
        cache: false,
        success: onSuccessFunc,
        error: function(xhr, status, err) {
            console.error(url, status, err.toString());
        }.bind(this)
    });
}

function saveDataOnServer(comment, url, onSuccessFunc) {
    $.ajax({
        type: 'POST',
        url: url,
        dataType: 'json',
        success: onSuccessFunc,
        error: function(xhr, status, err) {
            console.error(url, status, err.toString());
        }.bind(this)
    });
}