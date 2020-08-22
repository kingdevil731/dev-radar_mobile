// import o socket.io cliente
import socketio from 'socket.io-client';
// init constante com o valor/var indicando o backend, e tambem valor de autoconnect para falso, sendo que nao queremos ele se auto conectar.
const socket = socketio('https://dev-radar-backend.herokuapp.com',
  {
    autoConnect: false,
  });

//call back function
function subscribeToNewDevs(subscribeFunction){
    socket.on('newDev', subscribeFunction);
};

// funcao para conectar o socket
function connect(latitude, longitude, techs){
    socket.io.opts.query = {
        latitude,
        longitude,
        techs,
    };

    socket.connect();
};
//funcao para disconnectar o socket . somente se estiver conectado
function disconnect(){
    if(socket.connected){
        socket.disconnect();
    }
};

 
export {
    connect,
    disconnect,
    subscribeToNewDevs
};