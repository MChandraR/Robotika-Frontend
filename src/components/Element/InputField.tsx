"use client";

interface FieldProps {
    title?: string;
    type?: string;
    value?: string;
    placeholder? : string;
    className ? :string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const InputField = ({
    title,
    type = 'text',
    value,
    onChange,
    className,
    placeholder = ''
}: FieldProps) => {
    return (
        <div className={`flex flex-col gap-1 w-full h-max ${className}`}>
            <p className="text-sm">{title}</p>
            {type === 'textarea' ? (
                <textarea
                    value={value} // Use value for controlled component
                    onChange={onChange} // Handle change event for textarea
                    className="h-28 border w-full focus:outline-none text-sm p-3"
                    placeholder={placeholder}
                />
            ) : (
                <input
                    type={type}
                    value={value} // Use value for controlled component
                    onChange={onChange} // Handle change event for input
                    className="h-12 border w-full focus:outline-none indent-3 text-sm rounded"
                    placeholder={placeholder}
                />
            )}
        </div>
    );
};

export default InputField;