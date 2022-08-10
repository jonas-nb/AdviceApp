import axios from 'axios';
import React, { useState } from 'react';
import PatternMobile from '../assets/images/pattern-mobile.svg';
import mainIcon from '../assets/images/icon-dice.svg';

const Container = () => {
    const [adviceNumber, setAdviceNumber] = useState(0);
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
        <div className=" m-auto flex flex-col justify-center items-center max-w-[320px] xl:max-w-[500px] h-72 bg-[#313a49] rounded-lg">
            <div className="mt-10 text-[#52ffa8] text-lg tracking-widest">
                <small className="uppercase">
                    Advice <span>#{adviceNumber}</span>
                </small>
            </div>
            <div className="flex flex-col justify-center text-center text-[#fff] h-52">
                <p className="p-3 text-lg xl:text-xl">{advice}</p>
            </div>
            <img
                className="m-auto w-10/12 h-3 xl:h-10 "
                src={PatternMobile}
                alt="divisor meramente ilustrativo"
            />
            <button
                className="bg-[#53ffab] hover:shadow-[0px_0px_25px_2px_#53ffab] duration-300 h-[5rem] xl:h-20 w-[3.6rem] xl:w-[3.4rem] rounded-full flex items-center justify-center relative top-7"
                onClick={adviceGenerator}
            >
                <img src={mainIcon} alt="" />
            </button>
        </div>
    );
};

export default Container;
