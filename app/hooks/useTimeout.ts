import { useEffect } from "react";

export default function useTimeout(callback: () => void, delay: number) {
    useEffect(() => {
        const handler = setTimeout(() => {
            callback();
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, []); 
}