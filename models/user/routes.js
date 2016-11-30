const mongoose = require('mongoose');
const User = require('.');

var show = {
    method: 'POST',
    path: '/users/{id}',
    handler: function(request, reply) {
        var userId = request.params.id;
        var ObjectId = require('mongoose').Types.ObjectId;
        User.findOne({
            '_id': new ObjectId(userId)
        }, function(err, doc) {

            if (doc) {
                var barcode = request.payload.barcode;
                var date = new Date(request.payload.date);

                var found = false;
                for (var key in doc.serials) {
                    if (doc.serials[key].barcode == barcode) {
                        found = true;
                        doc.serials[key].expiration = date;
                        doc.save();
                        break;
                    }
                }

                if (!found) {
                    var serial = {
                        barcode: barcode,
                        expiration: date
                    };
                    doc.serials.push(serial);
                    doc.save();
                }

                reply(doc);

            } else {
                reply('User not found!');
            }

        });

    }
};

var index = {
    method: 'GET',
    path: '/users',
    handler: function(request, reply) {
        reply(User.find());
    }
};

var register = {
    method: 'POST',
    path: '/users',
    handler: function(request, reply) {
        var username = request.payload.username;
        var user = new User({
            username: username
        });
        user.save();

        reply(user);
    }
};

module.exports = [index, register, show];
