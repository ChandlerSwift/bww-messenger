const login = require("facebook-chat-api");

const config = require('./config');

// Create simple echo bot
login({email: config.email, password: config.password}, (err, api) => {
    if(err) return console.error(err);

    api.listen((err, message) => {
        api.sendMessage(message.body, message.threadID);
    });
});
