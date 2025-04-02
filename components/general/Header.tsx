import { paths } from "@/constants/paths";
import Button from "./Button";
import { FiMenu } from "react-icons/fi";
import SideDrawer from "./SideDrawer";
import { useState } from "react";

export default function Header(){
    const [showDrawer, setShowDrawer] = useState(false);

    return(
        <>
            <div className="flex items-center justify-between px-[20px] max-w-[1200px] mx-auto py-5 md:py-10">
                <a href={paths.home}>
                    <img
                        src="/straqa-logo.svg"
                        alt=""
                        className="h-[28px]"
                    />
                </a>
                <div className="flex md:hidden items-center justify-end">
                    <div className="h-[50px] w-[50px] bg-[#020C14] rounded-full text-white cursor-pointer flex items-center justify-center" onClick={() => setShowDrawer(true)}>
                        <FiMenu size={18} />
                    </div>
                </div>
                <div className="hidden md:flex items-center justify-end text-[#222D39] text-lg font-medium gap-10">
                    {/* <a href={paths.home}>Payments</a>
                    <a href={paths.home}>Events</a>
                    <a href={paths.home}>eCommerce</a> */}
                    <a href={paths.home}>Contact us</a>
                    <Button text="Sign up" arrow />
                </div>
            </div>
            {showDrawer && <SideDrawer showDrawer={showDrawer} handleClose={() => setShowDrawer(false)} />}
        </>
    )
}