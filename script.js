const ChatInput = document.querySelector('.chat-input textarea');
const sendChatBtn = document.querySelector(".chat-input span");
const chatBox = document.querySelector(".chatbox");
let userMessage;
const createChatLi = (messsage, className) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);
    let chatContent = className === "outgoing" ? `<p>${messsage}</p>` : `<span class="material-symbols-outlined">smart_toy</span><p>${messsage}</p>`
    chatLi.innerHTML = chatContent;
    return chatLi;
}

const generateResponse = () =>

const handleChat = () =>{
    userMessage = ChatInput.value.trim();
    if(!userMessage) return;
    chatBox.appendChild(createChatLi(userMessage, 'outgoing'));

    setTimeout(()=>{
        chatBox.appendChild(createChatLi("Thinking...", "incoming"));
        generateResponse();
    }, 600);
}
sendChatBtn.addEventListener("click", handleChat);
