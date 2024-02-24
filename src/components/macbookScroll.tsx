import React from "react";
import { MacbookScroll } from "../components/ui/macbook-scroll";

import Link from "next/link";

const MacbookScrollDemo = () => {
    return (
        <div className="overflow-hidden dark:bg-[#0B0B0F] bg-white w-full">
            <MacbookScroll
                title={
                    <span>
                        This Macbook is built with Tailwindcss. <br /> No kidding.
                    </span>
                }
           
                src={`/linear.webp`}
                showGradient={false}
            />
        </div>
    );
};


export { MacbookScrollDemo };
