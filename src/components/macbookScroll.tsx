import React from "react";
import { MacbookScroll } from "../components/ui/macbook-scroll";
import Link from "next/link";
const MacbookScrollDemo = () => {
    return (
        <div className="overflow-hidden dark:bg-black bg-white w-full">
            <MacbookScroll
                title={
                    <span>
                        Maneja todo tu negocio desde una sola App
                    </span>
                }
        
            />
        
        </div>
    );
};


export { MacbookScrollDemo };
