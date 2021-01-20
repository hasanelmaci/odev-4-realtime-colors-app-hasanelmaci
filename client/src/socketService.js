import io from  "socket.io-client";

let socket;

export const initSocket = () =>{
    socket= io("http://localhost:3000",{
        transports:["websocket"],
    })


    socket.on("connect", ()=> console.log("Connected"))
}

export const disconnectSocket = () => {
	console.log("Disconnecting...");
	if (socket) socket.disconnect();
};

export const sendColor = (color) =>{
    if(socket) socket.emit("send-color",color)

}

export const receiveColor = (cb) =>{
    if(!socket) return true

    socket.on("receive-color",color=>{
        cb(color)
    })

}