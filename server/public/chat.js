const socket = io();

// DOM elements
let message = document.getElementById('message');
let username = document.getElementById('username');
let btn = document.getElementById('send');
let output = document.getElementById('output');
let actions = document.getElementById('actions');

btn.addEventListener('click', function () {
  socket.emit('chat:message', {
    message: message.value,
    username: username.value,
  });
});

message.addEventListener('keypress', ()=> {
    socket.emit('chat:typing', username.value)
});

socket.on('chat:message', function (data) {
    actions.innerHTML = '';
  output.innerHTML += `<p>
      <strong>${data.username}</strong>: ${data.message}
    </p>`;
});

socket.on('chat:typing', (data) =>{
    actions.innerHTML = `<p><em>${data} is typing at this moment....</em></p>`
});

/* const form = document.getElementById('form');
const input = document.getElementById('input');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    if(input.value){
        socket.emit('chat message', input.value);
        input.value = '';
    }
});

socket.on('chat message', (msg)=> {
    const item = document.createElement('li');
    item.textContent = msg;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
}); */
