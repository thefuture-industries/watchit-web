import { useEffect, useRef } from "react";

const InputSuggest = () => {
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);

    const resize = () => {
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
            textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
        }
    };

    useEffect(() => {
        resize();
    }, []);

    return (
        <div className="fixed bottom-0 w-screen bg-[#212121] flex justify-center">
            <div className="flex w-[90%] lg:w-[60%] p-2">
                <textarea
                    ref={textareaRef}
                    onInput={resize}
                    placeholder="What do you want to see..."
                    className={`w-full resize-none min-h-[20px] outline-none py-3 px-5 rounded-[13px] bg-[#303030] overflow-hidden transition-all duration-150 ease-in-out`}
                />
            </div>
        </div>
    )
}

export default InputSuggest
