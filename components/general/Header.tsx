import { paths } from "@/constants/paths";
import Button from "./Button";

export default function Header(){
    return(
        <div className="flex items-center justify-between px-[20px] max-w-[1200px] mx-auto py-10">
            <a href={paths.home}>
                <img
                    src="/straqa-logo.svg"
                    alt=""
                    className="h-[20px] md:h-[28px]"
                />
            </a>
            <div className="flex items-center justify-end text-[#222D39] text-lg font-medium gap-10">
                <a href={paths.home}>Payments</a>
                <a href={paths.home}>Events</a>
                <a href={paths.home}>eCommerce</a>
                <a href={paths.home}>Contact</a>
                <Button text="Sign up" />
            </div>
        </div>
    )
}