import { useEffect, useRef } from "react";

export default function useTimeout(callback: () => void, delay: number) {
    const savedCallback = useRef(callback);

    // Update the ref to the latest callback on every render
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        const handler = setTimeout(() => {
            savedCallback.current();
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, []); // Only re-run if the delay changes
}