var check = {
    method: 'POST',
    path: '/serial',
    handler: function (request, reply) {
        var barcode = request.payload.barcode;

        var responded = false;

        User.find(function(err, users) {
            for(var user in users) {
                for(var serial in users[user].serials) {
                    var dbSerial = users[user].serials[serial];

                    if(dbSerial.barcode == barcode) {
                        var epochSerial = dbSerial.expiration.getTime();
                        var epoch = (new Date).getTime();
                        var valid = epochSerial > epoch ? true : false;
                        var message = {valid: valid, expiration:
                            dbSerial.expiration};
                        responded = true;
                        reply(message);
                    }
                }
            }

            if (!responded) {
                var err = {valid: false, message: 'Barcode not found'};
                reply(err);
            }
        });

    }
};

var Serial = {
    routes: [check]
};

module.exports = Serial;
