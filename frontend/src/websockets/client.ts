import { store } from "../store/store";

export const socket = new WebSocket('wss://localhost:3000/');

socket.addEventListener('open', () => {
  console.log('[WS] Connected');
  socket.send(JSON.stringify({
    type: 'init',
    userId: store.getUser().id,
  }));
});

socket.addEventListener('message', (event) => {
  const data = JSON.parse(event.data);
  console.log('[WS] Message from server:', data);
});

socket.addEventListener('error', (err) => {
  console.error('[WS] Error:', err);
});

socket.addEventListener('close', () => {
  console.log('[WS] Connection end');
});