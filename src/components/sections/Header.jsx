import { useState } from "react";
import { LuMenu } from "react-icons/lu";
import { Button } from "../common/Button";

export function Header () {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="fixed top-0 bg-[#121212] text-lg w-full text-primary  lg:px-40 py-3 border-b border-gray-700 flex flex-col lg:flex-row lg:justify-between">
            <div className="text-xl lg:text-4xl font-bold px-5 flex justify-between items-center uppercase font-rubik">
                <a href={"#"}>
                    Hoshikira<span className="text-sm lg:text-base text-yellow-700">.18</span>
                </a>
                <div className="lg:hidden flex border rounded py-1 px-2" onClick={() => setMenuOpen(!menuOpen)}>
                    <LuMenu className="h-7 w-7" />
                </div>
            </div>
           
            <div className={`${
                menuOpen ? 'flex' : 'hidden'
            } lg:flex flex-col px-5 lg:flex-row lg:items-center text-lg lg:text-xl lg:px-5 text-blue-300 items-center lg:space-x-5 space-y-2 lg:space-y-0 pt-2 lg:pt-0 font-rubik`}>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
                <a href="#">Home</a>
                <Button value={"Github"} href={"https://github.com/hoshikira18"} />
            </div>
        </div>
    )
}