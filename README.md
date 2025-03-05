# GMC AI - Personal Counselor Chatbot

GMC AI is a real-time AI-powered counselor chatbot designed to provide empathetic and supportive conversations. It is built using Google Gemini AI and a frontend developed with HTML, CSS, and JavaScript.
 **Demostration:** [Try It now](https://gmc-ai-personal-counselor-chatbot-with-ai.vercel.app/chat.html)
## Features
- AI-powered chatbot using Google Gemini AI
- Real-time chat functionality
- Interactive UI with a typing indicator
- Custom memory text for training AI responses
- Secure and user-friendly design

## How It Works
### 1. **User Interaction**
- The user enters a message into the input field.
- When the user presses 'Enter' or clicks the send button, the message is sent to the AI engine.

### 2. **Data Processing & API Request**
- The input message is formatted and sent to the Google Gemini AI API.
- A `fetch` request is made to:
  ```plaintext
  https://generativelanguage.googleapis.com/v1/models/gemini-2.0-flash:generateContent?key=YOUR_API_KEY
  ```
- The request includes a JSON body containing:
  ```json
  {
    "contents": [{
      "parts": [{
        "text": "You are GMC.AI, a helpful and empathetic counselor. Answer in a warm, clear, and supportive tone.\n\nUser: USER_MESSAGE"
      }]
    }]
  }
  ```
- The API processes the request and returns a response.

### 3. **Displaying AI Response**
- A typing indicator (`GMC.AI is typing...`) appears while waiting for a response.
- Once the response is received, the chatbot displays the message to the user.
- The chatbot formats the response by replacing new lines (`\n`) with HTML `<br><br>` for readability.

### 4. **Frontend & UI Components**
- The chat interface is built with HTML and styled with CSS.
- JavaScript handles user interactions and API communication.
- The UI includes a navigation bar, introduction section, and a chatbot container.

## Technologies Used
- **Google Gemini AI** - Natural Language Processing (NLP) for AI responses.
- **HTML, CSS, JavaScript** - Frontend development.
- **GSAP & AOS.js** - Animations and smooth UI effects.

## Future Improvements
- Implementing **Node.js** backend for API key security.
- Using **PHP/MySQL** to store user data for personalized responses.
- Adding user authentication with account creation.
- Expanding chatbot capabilities with better context memory.

## Setup Guide
### 1. **Clone the Repository**
```sh
 git clone https://github.com/thisisdineth/GMC-AI---Personal-Counselor-Chatbot-with-AI
```
### 2. **Replace API Key**
- Open `script.js` and replace `API_KEY` with your Google Gemini AI API key.

### 3. **Run the Project**
- Open `index.html` in a browser to test the chatbot.
- Ensure an internet connection to access the AI API.

## Developer Information
- **Project Created By:** Dilshan Gunawardana
- **Website:** [dinethdilshan.com](https://dinethdilshan.com)
- **License:** Open-source, feel free to modify and improve!

---
For more details, refer to the full documentation in the PDF guide.

