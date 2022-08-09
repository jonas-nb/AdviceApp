import axios from 'axios';
import React, { useState } from 'react';
import PatternMobile from '../assets/images/pattern-mobile.svg';
import PatternDesktop from '../assets/images/pattern-desktop.svg';
import mainIcon from '../assets/images/icon-dice.svg';

const Container = () => {
    const [adviceNumber, setAdviceNumber] = useState();
    const [advice, setAdvice] = useState(
        'Click the button below to generate an advice'
    );

    const adviceGenerator = async () => {
        try {
            setAdvice('Updating...');
            const response = await axios.get(
                'https://api.adviceslip.com/advice'
            );
            setAdviceNumber(response.data.slip.id);
            setAdvice(response.data.slip.advice);
        } catch (error) {
            setAdvice('advice not found, please check internet connection');
        }
    };

    return (
        <div className=" m-auto flex flex-col justify-around items-center max-w-[320px] h-72 bg-[#4e5d73] rounded-lg">
            <div className="text-[#52ffa8] text-lg tracking-wider">
                <small>
                    Advice <span>#{adviceNumber}</span>
                </small>
            </div>
            <div className="border border-red-500 flex flex-col justify-between text-center text-[#fff]">
                <p className="p-5 text-xl">{advice}</p>
                <img src={PatternMobile} alt="divisor meramente ilustrativo" />
            </div>
            <button onClick={adviceGenerator}>
                <img src={mainIcon} alt="" />
            </button>
        </div>
    );
};

export default Container;
