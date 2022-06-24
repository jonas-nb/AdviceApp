/** @format */

import React, { useContext, useState } from 'react';
import { api } from '../../api';
import { MdShuffle } from 'react-icons/md';
import { ContextStyle } from '../contexts/ContextCss';

const Main = () => {
    //useStates
    let [advice, setAdvice] = useState(
        'Click the button below to receive new advice.'
    );

    //contexts
    const { btnState, setBtnState, adviceState, setAdviceState } =
        useContext(ContextStyle);

    //functions
    let loadAdvice = async () => {
        setAdviceState(false);
        setBtnState(false);
        const newAdvice = await api.json();
        setAdvice(newAdvice.slip.advice);
        setTimeout(() => {
            setBtnState(true);
            setAdviceState(true);
        }, 300);
    };

    return (
        <div className="h-72 flex flex-col w-full justify-around items-center h-2/6 sm:h-4/6 md:h-2/6 lg:h-3/6">
            <div className="flex items-center justify-center flex-col w-64 h-52 p-3 backdrop-blur-3xl bg-white/10 rounded-md shadow-md shadow-blue-500/3 md:w-6/12">
                {adviceState === false ? (
                    <div className="border h-20 w-full flex items-center justify-center text-white text-xl font-semibold">
                        looking for new advice...
                    </div>
                ) : (
                    <p className="text-white  text-lg text-center sm:text-md md:text-2xl w-full">
                        {advice}
                    </p>
                )}
                <button
                    onClick={loadAdvice}
                    className={
                        btnState === true
                            ? 'transition duration-700 ring-offset-2 ring-offset-green-200 ring-1 ring-green-300 bg-green-400  flex justify-center items-center w-16 h-16 fixed top-44 text-4xl  text-white hover:bg-green-500 shadow-[0_0px_50px_15px_rgba(0,0,0,0.3)] shadow-green-900 rounded-full'
                            : 'bg-green-400 flex justify-center items-center w-16 h-16 fixed top-44 text-4xl  text-white hover:bg-green-500  rounded-full'
                    }
                >
                    <MdShuffle />
                </button>
            </div>
        </div>
    );
};

export default Main;
