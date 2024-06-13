require("dotenv").config();
const express = require("express");
const cors = require("cors");
const http = require("http");
const socketIo = require("socket.io");
const path = require("path"); // Ensure path is imported
const { softKiller } = require("init");

const app = express();
const port = process.env.PORT || 9000;
const server = http.createServer(app);
const io = socketIo(server);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Serve the index.html file
app.get("/", (req, res) => {
  const options = { root: path.join(__dirname) };
  const fileName = "index.html";
  res.sendFile(fileName, options);
});



// Socket.IO connection and Logging the socket ID
// io.on("connection", (socket) => {
//   console.log(`User Connected: ${socket.id}`);
// });




// Socket.IO connection sending the message to Frontend
// io.on("connection", (socket) => {
//   console.log(`User Connected: ${socket.id}`);
//   socket.emit("myConnection", "HELLLO FROM SERVER");
// });




// Socket.IO connection and getting message from frontend
// io.on("connection", (socket) => {
//   console.log(`User Connected: ${socket.id}`);
//   socket.on("frntMesg", (data) => {
//     console.log(data,);
//   });
// });




// Socket.IO connection broadcasting the message to All connected Users
// var users = 0;

// io.on('connection',(socket)=>{
//     console.log("A user connected");
//     users++;
//     socket.emit('newuserconnected',{message:'HELLLO MY FRIEND WELCOME!'});

//     socket.broadcast.emit('newuserconnected',{message:users + 'users connected!'})

//     socket.on('disconnect',()=>{
//         console.log('A user disconnected');
//         users--;
//         socket.broadcast.emit('newuserconnected',{message:users + 'users connected!'})
//     })
// })




// Socket.IO connection and Namespace

// var cnsp = io.of('/custom-namespace')

// cnsp.on("connection", (socket) => {
//   console.log(`User Connected: ${socket.id}`);
  
//   cnsp.emit('mycustomEvent','Tester event call')

//   socket.on('disconnect',function () {
//     console.log('A user disconnected');
//   })

// });





// Socket.IO connection and creating Room 
// var roomno = 1 ;
// var members = 0 ;

// io.on("connection", (socket) => {
//   console.log(`User Connected: ${socket.id}`);
  
  
//   console.log(`Room Number: ${roomno}`);
  
//   socket.join('room-'+roomno);
//   io.sockets.in('room-'+roomno).emit('connectionRoom',`connection with Room - ${roomno}` )


// // SETTING THE LIMIT(2) OF THE MEMBERS TO JOIN THE ROOM 
// //   members++
// //     if(members>=2){
// //         members=0;
// //         roomno++
// //     }

//   socket.on('disconnect',function () {
//     console.log('A user disconnected');
//   })

// });























// Start the server
server.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
