

import React, { useState, useEffect } from 'react';
// @ts-ignore
export const logEvent = (name) => (event) => {
};
export const Result = ({ children }) => <div className="result">{children}</div>;
export const ErrorResult = ({ children }) => (
    <div className="error">{children}</div>
);
export const useDynamicFontSize = () => {
    const [fontSize, setFontSize] = useState(
        window.innerWidth < 450 ? '14px' : '18px'
    );
    useEffect(() => {
        const onResize = () => {
            setFontSize(window.innerWidth < 450 ? '14px' : '18px');
        };
        window.addEventListener('resize', onResize);
        return () => {
            window.removeEventListener('resize', onResize);
        };
    }, []);

    return fontSize;
};