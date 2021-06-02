'use strict';
// const {
//     findUser, 
//     createUser
// } = require('./utils/database');

// module.exports = () => {
//     var io = require('socket.io')(strapi.server, {
//         cors: {
//           origin: "http://localhost:3000",
//           methods: ["GET", "POST"],
//           allowedHeaders: ["my-custom-header"],
//           credentials: true
//         }
//     });
//     io.on('connection', function(socket) {
//         socket.on('join', async({ username, room }, callback) => {
//             try {
//                 const userExists = await strapi.services.users.find(username, room);

//                 if(userExists.length > 0) {
//                     callback(`User ${username} already exists in room no${room}. Please select a different name or room`);
//                 } else {
//                     const user = await createUser({
//                         username: username,
//                         room: room,
//                         status: "ONLINE",
//                         socketId: socket.id
//                     });

//                     if(user) {
//                         socket.join(user.room);
//                         socket.emit('welcome', {
//                             user: 'bot',
//                             text: `${user.username}, Welcome to room ${user.room}.`,
//                             userData: user
//                         }); 
//                         socket.broadcast.to(user.room).emit('message', {
//                             user: 'bot',
//                             text: `${user.username} has joined`,
//                         });

//                     } else {
//                         callback(`user could not be created. Try again!`)
//                     }
//                 }
//                 callback();
//             } catch(err) {
//                 console.log("Err occured, Try again!", err);
//             }
//         })
//     });
// };