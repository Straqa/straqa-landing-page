export default function Button({text, arrow}:{text: string, arrow?: boolean}){
    return(
        <div className="h-[55px] w-fit px-7 bg-[#020C14] rounded-md text-base md:text-lg text-white font-medium flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed">
            <p>{text}</p>
            {/* {arrow && (<)} */}
        </div>
    )
}