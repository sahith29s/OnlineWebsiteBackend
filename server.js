require("dotenv").config();

// mongodb connect
const connectDB = require("./connectDB/connectDB");
connectDB(process.env.MONGO_URI);

const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();
const http = require("http");
const chatRoutes = require("./routes/chatRoutes");
const { Server } = require("socket.io");
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("api/chat", chatRoutes)

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
})

io.on("connection", (socket) => {
    console.log("user connected", socket.id);
    socket.on("mess", (mes) => console.log(mes));
    socket.on("message", (messObj) => {
        socket.broadcast.emit("messageBackFromServer" , messObj)
    })
    // socket.on("newJoin" , socket.id)
    // socket.emit("messageBackFromServer" )
})

server.listen(PORT, () => console.log("Sever running on port :", PORT));