/** @format */

import React, { useContext } from 'react';
import { IoLogoLinkedin, IoLogoGithub } from 'react-icons/io';
import { ContextStyle } from '../contexts/ContextCss';

const Footer = () => {
    const { btnState } = useContext(ContextStyle);
    console.log(btnState);
    return (
        <>
            <div className="flex justify-end pr-3">
                <div
                    className={
                        btnState === true
                            ? 'w-24 lg:w-44 md:w-40 flex justify-around transition duration-500 text-green-300 text-4xl md:text-6xl'
                            : 'w-24 lg:w-44 md:w-40 flex justify-around text-slate-300 text-4xl md:text-6xl'
                    }
                >
                    <a
                        href="https://www.linkedin.com/in/jonas-batista-b77b24137/"
                        target="_blank"
                        className=""
                    >
                        <IoLogoLinkedin
                            className={
                                btnState === true
                                    ? ' transition-all duration-500 rounded text-green-100 bg-green-600 hover:text-green-400 shadow-[0_0px_50px_3px_rgba(0,0,0,0.3)] shadow-green-900'
                                    : 'text-white'
                            }
                        />
                    </a>
                    <a href="https://github.com/jonas-nb" target="_blank">
                        <IoLogoGithub
                            className={
                                btnState === true
                                    ? ' transition-all duration-500 rounded text-green-100 bg-green-600 hover:text-green-400 shadow-[0_0px_50px_3px_rgba(0,0,0,0.3)] shadow-green-900'
                                    : 'text-white'
                            }
                        />
                    </a>
                </div>
            </div>
            <h3
                className={
                    btnState === true
                        ? 'text-white/50 p-1 text-center text-green-400 transition duration-500'
                        : 'text-white/50 p-1 text-center'
                }
            >
                Made with ❤ By Jonas Batista
            </h3>
        </>
    );
};

export default Footer;
