/**
 * Created by work on 2/21/16.
 */
// These are on react compenents that I abstracted from the tutorial code,
// so that we can focus on the react stuff


function loadData(url, onSuccessFunc) {
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

function mapObject(object, callback) {
    if(object === null || typeof object === "undefined")
    {
        console.log("Warning: null/undefined object");
        return([]);
    }
    return Object.keys(object).map(function (key) {
        return callback(key, object[key]);
    });
}