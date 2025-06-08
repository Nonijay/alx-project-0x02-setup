import Header from "@/components/layout/Header";
import Link from "next/link";
import React from "react";
import { HeaderProps } from "@/interfaces";

const About: React.FC = () => {
    return (
        <div
            className="flex justify-between gap-4">
            <Header />

        </div>
    )
};

export default About;