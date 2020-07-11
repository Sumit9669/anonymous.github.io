
const newChat = document.querySelector('.new-chat');
const newName = document.querySelector('.new-name');

const notify = document.querySelector('.update-mssg');

const rooms = document.querySelector('.chat-rooms');






newChat.addEventListener('submit', e => { 
    e.preventDefault();
    const message = newChat.message.value.trim();
    chatRoom.addChat(message).then(()=>newChat.reset()).catch((err)=>console.log(err));
});


newName.addEventListener('submit', (e) => { 
    e.preventDefault();
    const name = newName.name.value.trim();
    chatRoom.updateName(name);


    newName.reset();

    notify.innerHTML = `Hi!! You updated name Successfully`;
    setTimeout(() => notify.innerText = '', 3000);
})

rooms.addEventListener('click', e => { 
    if (e.target.tagName==='BUTTON') { 
        chatUI.clear();
        chatRoom.updateRoom(e.target.getAttribute('id'));
        chatRoom.getChats(chat=>chatUI.render(chat));
    }
});





 


const username = localStorage.username ? localStorage.username : 'joker';




const chatList = document.querySelector('.chat-list');



const chatUI = new ChatUi(chatList);




const chatRoom = new Chatroom('general', username);
console.log("hellp");




chatRoom.getChats((data) => {
   // console.log(data);
    chatUI.render(data);
    

});