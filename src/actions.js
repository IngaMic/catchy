import axios from "./axios";
//ACTION IS JUST AN OBJECT!!

export async function sayYes(id) {
    console.log("action yes id :", id);
    const { data } = await axios.post(`/api/accept/${id}`);
    console.log("data from yes: ", data);
    return {
        type: "SAY_YES",
        id,
    };
}
export async function sayNo(id) {
    console.log("action no id:", id);
    const { data } = await axios.post(`/api/delete/${id}`);
    console.log("data from no: ", data);
    return {
        type: "SAY_NO",
        id,
    };
}
// export async function chatMessages(msgs) {
//     //console.log("msgs in actions.js that we get from socket.js", msgs)
//     return {
//         type: "RECEIVE_MESSAGES",
//         msgs,
//     };
// }
// export async function chatMessage(msg) {
//     //console.log("msg in actions.js that we get from socket.js", msg)
//     return {
//         type: "ADD_MESSAGE",
//         msg,
//     };
// }
// export async function onlineUsers(onlineUsers) {
//     return {
//         type: "ONLINE_USERS",
//         onlineUsers,
//     };
// }
// export async function userLeft(onlineUsers) {
//     return {
//         type: "USER_LEFT",
//         onlineUsers,
//     };
// }
