import { useEffect, useState } from 'react';
import "./ChatBot.scss";
import send from "../../assets/send_icon.svg";
import info from "../../assets/information_icon.svg";
import close from "../../assets/cross_icon.svg";
import minimize from "../../assets/arrow.svg";
import dot from "../../assets/typing_icon.svg";
import chat from "../../assets/chat_Icon.svg";

function ChatBot() {

    const [showChat, setShowChat] = useState(false)
    const [message, setMessage] = useState('')
    const [response, setReponse] = useState('Hi, Leah, welcome to American Express chat. How was your Thailand trip?')
    const [conversation, setConversation] = useState([])
    const [loading, setLoading] = useState(false)

    // have object for prompts and response
    // value is taken from input and compared to keys of object
    // input is added as text bubble
    // after 2 seconds corresponding response is added as text 
    const promptResponse = {
        "Not great. It was cancelled. I would like to get a refund for my travel points.": "I am sorry to hear that, Leah. I’ll be happy to assist you with that. Don’t worry I am equipped to handle refund requests like yours. Can you please provide the date of your cancelled trip to Thailand and the reasoning behind that?",

        "I could not board the plane because I did not have an active Thailand Visa. It was cancelled on 4/28/2023.": "I am sorry to hear that. Let me do a brief investigation. Please give me 2 minutes.",

        "Ok": "Thank you for waiting. For your issue, I would need to get in contact with Cathay Pacific. Please give me up to 24 hours to get back to you with a solution. You will receive an email and a text letting you know the problem has been solved.",
        
        "Ok, thank you": "You are very welcome! Is there anything else you would like me to help you today?",

        "No, that’s all. Thank you.": "You’re welcome! If you have time, please take a moment to complete our questionnaire on your experience today. Thank you and have a good day!"
    }
    console.log(response)
    // if prompt hasownproperty(message) setConversation(...conversaition )
    function handleClick(e) {
        e.preventDefault()
        const form = e.target
        if (promptResponse.hasOwnProperty(message)) {
            setConversation([message, ...conversation])
            setReponse(promptResponse[message]);
            form.reset()
            setTimeout(() => setLoading(true), 500)
        }
    }

    useEffect(() => {
        setTimeout(() => setLoading(false), 1800)
        setTimeout(() => setConversation([response, ...conversation]), 2000)
    }, [response])




    return (
        <>
            {!showChat && <div className="chatToggle" onClick={() => setShowChat(true)}>
                <img src={chat} alt="chat icon"  />
                <p className='chatToggle__text'>Chat</p>
            </div>}


            {!!showChat && <div className="chatBot">
                <div className='chatBot__nav'>
                    <img src={minimize} alt='minimize icon' className='chatBot__minimize-button' onClick={() => setShowChat(false)}></img>
                    <h1 className='chatBot__title'>Chat</h1>
                    <img src={close} alt='close icon' className='chatBot__close-button' onClick={() => setShowChat(false)}></img>
                </div>

                <div className='chatBot__privacyStatement'>
                    <img src={info} alt='information icon' className='chatBot__privacyIcon'></img>
                    <p>Conversations are recorded and monitored. Do not leave this window unattended. <a href="" className='chatBot__privacyStatement-link'>View our Privacy Statement</a></p>
                </div>

                <div className="chatBot__chat-container">
                    <ul className='chatBot__chatArea'>
                        {conversation.map(m => <li key={`${Math.random()}`} className="chatBot__text-bubble">{m}</li>)}
                    </ul>
                </div>

                <div className="chatBot__typing">
                    {loading && <div className="chatBot__dots">
                        <img src={dot} alt="typing dot"  className="chatBot__dot"/><img src={dot} alt="typing dot"  className="chatBot__dot"/><img src={dot} alt="typing dot"  className="chatBot__dot"/>
                    </div>}
                    
                <form onSubmit={handleClick} className="chatBot__input-area">
                    <input className='chatBot__input' type='text' placeholder='Type a message...' onChange={(e) => setMessage(e.target.value)}></input>
                    <button type='submit' className='chatBot__submit-container'><img src={send} alt='send message' className='chatBot__submit'></img></button>
                </form>
                
                </div>

            </div>
            }
        </>
    )
}

export default ChatBot;