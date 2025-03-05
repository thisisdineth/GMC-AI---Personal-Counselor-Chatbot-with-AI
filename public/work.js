const API_KEY = "AIzaSyBjJxhiO1xVQ7VfWpKM15adMJDsVVcWCac"; // Replace with your gemini ai api key 
const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");
const chatHeader = document.getElementById("chatHeader");

async function sendMessage() {
    const message = userInput.value.trim();
    if (!message) return;

    hideHeader(); 
    appendMessage(message, "user");
    userInput.value = "";

    const typingIndicator = document.createElement("div");
    typingIndicator.textContent = "GMC.AI is typing...";
    typingIndicator.classList.add("message", "typing");
    chatBox.appendChild(typingIndicator);
    chatBox.scrollTop = chatBox.scrollHeight;

    try {
        const response = await fetch("https://generativelanguage.googleapis.com/v1/models/gemini-2.0-flash:generateContent?key=" + API_KEY, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ 
                contents: [{ 
                    parts: [{ 
                        text: `You are GMC.AI, a helpful and empathetic counselor. Never say you are a large language model or made by Google. Answer in a warm, clear, and supportive tone.\n\nUser: ${message}` 
                    }] 
                }] 
            })
        });
        //this is how developer can train the AI model 

        const data = await response.json();
        let botReply = data.candidates?.[0]?.content?.parts?.[0]?.text || "I'm here to help, but I couldn't understand that.";

        botReply = formatBotResponse(botReply);
        
        
        chatBox.removeChild(typingIndicator);

        appendMessage(botReply, "bot");
    } catch (error) {
        console.error("Error:", error);
        chatBox.removeChild(typingIndicator);
        appendMessage("Error communicating with AI.", "bot");
    }
}

function appendMessage(text, sender) {
    const messageElement = document.createElement("div");
    messageElement.innerHTML = text;
    messageElement.classList.add("message", sender);
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function formatBotResponse(response) {
    return response.replace(/\n/g, "<br><br>");
}

function hideHeader() {
    if (chatHeader && !chatHeader.classList.contains("hidden")) {
        chatHeader.classList.add("hidden");
    }
}


userInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter" && userInput.value.trim() !== "") {
        sendMessage();
    }
});
