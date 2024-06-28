import { io } from "socket.io-client";

export const socketInit = () => {
  const options = {
    "force new connection": true,
    reconnectionAttempt: "Infinity",
    timeout: 10000,
    transport: ["websocket"],
  };

  return io(import.meta.env.VITE_BACKEND_URL, options);
};
