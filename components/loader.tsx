"use client";

import { useState, useEffect } from "react";

const loader = () => {
    const [loading, setLoading] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const handleLoad = () => {
            setTimeout(() => setFadeOut(true), 300); // Start fade out
            setTimeout(() => setLoading(false), 800); // Fully remove after fade out
        };

        if (document.readyState === "complete") {
            handleLoad();
        } else {
            window.addEventListener("load", handleLoad);
        }

        return () => {
            window.removeEventListener("load", handleLoad);
        };
    }, []);

    if (!loading) return null;
    return (
        <div className={`loader  ${fadeOut ? "fade-out" : ""}`}>
            <div className="cssload-loader">
                <div className="cssload-inner cssload-one"></div>
                <div className="cssload-inner cssload-two"></div>
                <div className="cssload-inner cssload-three"></div>
            </div>
        </div>
    )
}

export default loader
