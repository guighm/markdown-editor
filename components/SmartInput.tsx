import useInputManager from "@/hooks/useInputManager";
import { validateTitle } from "@/validators/validateTitle";
import { CircleCheck, CircleX, Loader } from "lucide-react";

const SmartInput = ({ id, initialValue }: { id: string, initialValue: string }) => {

    const { inputValue, setInputValue, saveStatus } = useInputManager({
        key: "title",
        id: id,
        initialValue: initialValue,
        validator: validateTitle
    })
    
    return (
        <div className="flex gap-3">
            <div className="flex">
                <input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    style={{
                        width: `${inputValue.length || 1}ch`,
                        maxWidth: "10ch"
                    }}
                />
                <p className="font-bold">.md</p>
            </div>
            {saveStatus === "saving" && <Loader className="text-gray-500" />}
            {saveStatus === "saved" && <CircleCheck className="text-green-600" />}
            {saveStatus === "error" && <CircleX className="text-red-600" />}
        </div>
    )
}

export default SmartInput;