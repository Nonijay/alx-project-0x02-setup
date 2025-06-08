import Header from "@/components/layout/Header";
import Link from "next/link";
import React from "react";
import { HeaderProps } from "@/interfaces";

const About: React.FC = () => {
    return (
        <div
            className="bg-amber-100">
            <Header />
            <main className="">
                <h1 className="text-2x1 bg-amber-100">
                    About Page
                </h1>
            </main>
        </div>
    )
};

export default About;