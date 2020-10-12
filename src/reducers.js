export default function (state = {}, action) {
    console.log("Action :", action);
    if (action.type == "SAY_YES") {
        state = {
            ...state,
            items: state.items.map((item) => {
                console.log("action.id", action.id);
                console.log("item.id", item.id);
                if (action.id == item.id) {
                    return {
                        ...item,
                        reviewone: true,
                    };
                } else {
                    return item;
                }
            }),
        };
    }
    if (action.type == "SAY_NO") {
        state = {
            ...state,
            items: state.items.map((item) => {
                console.log("no action.id", action.id);
                console.log("no item.id", item.id);
                if (action.id == item.id) {
                    return {
                        ...item,
                        reviewone: null,
                    };
                } else {
                    return item;
                }
            }),
        };
    }
    // if (action.type == "RECEIVE_MESSAGES") {
    //     //console.log("action.msgs in reducers ;", action.msgs)
    //     state = Object.assign({}, state, {
    //         chatMessages: action.msgs,
    //     });
    // }
    // if (action.type == "ADD_MESSAGE") {
    //     //console.log("action.msg in reducers ;", action.msg);
    //     state = {
    //         ...state,
    //         chatMessages: state.chatMessages.concat(action.msg),
    //     };
    // }
    // if (action.type == "ONLINE_USERS") {
    //     // console.log("action.onlineUsers in reducers : ", action.onlineUsers)
    //     state = Object.assign({}, state, {
    //         onlineUsers: action.onlineUsers,
    //     });
    // }
    // if (action.type == "USER_LEFT") {
    //     console.log(
    //         "action.onlineUsers in reducers userLeft : ",
    //         action.onlineUsers
    //     );
    //     state = Object.assign({}, state, {
    //         onlineUsers: action.onlineUsers,
    //     });
    // }
    return state;
}
