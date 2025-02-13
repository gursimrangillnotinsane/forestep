'use client'; // This makes sure the component is client-side only

import { useState } from 'react';
import { RiCloseLargeFill } from "react-icons/ri";
import { IoChatbubblesSharp } from "react-icons/io5";


const ChatbotIframe = () => {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        setIsVisible(false);
    };
    const handleOpen = () => {
        setIsVisible(true);
    }

    return (
        <>
            {isVisible && (
                <div className="fixed bottom-0 right-0 z-50 p-10  w-[300px] h-[80vh] md:w-[350px] lg:w-[400px]  flex flex-col">
                    <button
                        onClick={handleClose}
                        className="text-white bg-red-600 p-2  self-end "
                    >
                        <RiCloseLargeFill />
                    </button>
                    <iframe
                        src="https://app.thinkstack.ai/bot/index.html?chatbot_id=67ad63899e89a6ec0f13c749&type=inline"
                        frameBorder="0"
                        width="100%"
                        height="100%"
                        style={{ minHeight: "500px" }}
                    />

                </div>
            )}
            {!isVisible && (
                <button
                    onClick={handleOpen}
                    className="z-50 fixed bottom-10 right-10 p-5 rounded-full bg-red-600 text-white shadow-lg hover:bg-red-700 transition duration-300 ease-in-out transform hover:scale-105 animate-pulse">
                    <IoChatbubblesSharp size={20} />
                </button>
            )}


        </>
    );
};

export default ChatbotIframe;
