

const server = {
    saveSession : function(room) {
       console.log('adding', room)
        var jqxhr = $.post( "api/session", room, function(room) {
            console.log( "success",room );
          })
            .done(function(ret) {
                console.log( "second success" ,ret);
            })
            .fail(function(err) {
                console.log( "error" ,err);
            })
            .always(function() {
                console.log( "finished" );
            });
        
    }
    
}

$(function () {  

    server.init
    console.log('starting main.js')
    /*server.saveSession({
        id: "4444",
        apiKey: "string",
        description: "string",
        name: "string"});
    */
});


