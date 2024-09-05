import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import { WebSocketServer } from "ws";
import { logoutAuth, userLoginAuth, userRegisterAuth } from "./controllers/userController.js";

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/i_m_s_DB');

// Authentication Apis Starts Here //
app.post('/api/create_user', userRegisterAuth);
app.post('/api/login_user', userLoginAuth);
app.post('/api/logout_user', logoutAuth);
// Authentication Apis Ends Here //

const server = app.listen(3000, () => {
    console.log('Server is running on port 3000');
});


// const wss = new WebSocketServer({ server });

// wss.on("connection", (ws) => {
//   ws.on('message', (msg) => {
//     console.log(`Received message: ${msg}`);
//     ws.send('Thanks for your message');
//   });
// });