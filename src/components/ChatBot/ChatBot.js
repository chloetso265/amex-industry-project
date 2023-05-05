import { useEffect, useState } from 'react';
import "./ChatBot.scss";
import send from "../../assets/send_icon.svg";
import info from "../../assets/information_icon.svg";
import close from "../../assets/cross_icon.svg";
import minimize from "../../assets/cross_icon.svg";

function ChatBot() {

    const [showChat, setShowChat] = useState(false)
    const [message, setMessage] = useState('')
    const [response, setReponse] = useState(null)
    const [conversation, setConversation] = useState([])
    const [loading, setLoading] = useState(false)

    // have object for prompts and response
    // value is taken from input and compared to keys of object
    // input is added as text bubble
    // after 2 seconds corresponding response is added as text 
    const promptResponse = {
        "this is a test message": "this is a test reponse",
        'this is another question': 'this is another response'
    }
console.log(response)
    // if prompt hasownproperty(message) setConversation(...conversaition )
    function handleClick(e) {
        e.preventDefault()
        const form = e.target
        if (promptResponse.hasOwnProperty(message)) {
            setConversation([...conversation, message])
            setReponse(promptResponse[message]);
            form.reset()
            setTimeout( ()=> setLoading(true), 500)
        }
    }
    
    useEffect(()=>{
        setTimeout( ()=> setLoading(false), 1800)
        setTimeout( ()=> setConversation([...conversation, response]), 2000)
    }, [response])

    


    return (
        <>
            {!showChat && <div className="chatToggle" onClick={() => setShowChat(true)}>
                <p className='chatToggle__text'>💬 Chat</p>
            </div>}


            {!!showChat && <div className="chatBot">
                <div className='chatBot__nav'>

                    <h1 className='chatBot__title'>Chat</h1>
                    {/* <button className='chatBot__close-button' onClick={() => setShowChat(false)}>🥲</button> */}
                    <img src={close} alt='close icon' className='chatBot__close-button' onClick={() => setShowChat(false)}></img>
                </div>

                <div className='chatBot__privacyStatement'>
                    <img src={info} alt='information icon' className='chatBot__privacyIcon'></img>
                    <p>Conversations are recorded and monitored. Do not leave this window unattended. <a href="" className='chatBot__privacyStatement-link'>View our Privacy Statement</a></p>
                </div>
                
                <div className="chatBot__chat-container">
                    <ul className='chatBot__chatArea'>
                        {conversation.map(m => <li key = {`${Math.random()}`} className="chatBot__text-bubble">{m}</li>)}
                    </ul>
                </div>

                <form onSubmit={handleClick} className="chatBot__input-area">
                    <input className='chatBot__input' type='text' placeholder='Type a message...' onChange={(e) => setMessage(e.target.value)}></input>
                    <button type='submit'><img src={send} alt='send message' className='chatBot__submit'></img></button>
                </form>

            </div>
            }
        </>
    )
}

export default ChatBot;