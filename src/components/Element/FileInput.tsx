import Image from 'next/image';
import React from 'react';
import { CiImageOn } from "react-icons/ci";


interface FileUploaderProps {
  imageFile: File | string | null; // Allow imageFile to be a File, string (URL), or null
  setImageFile: (file: File | null) => void;
}

const FileInput: React.FC<FileUploaderProps> = ({ imageFile, setImageFile }) => {
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0];
        setImageFile(file || null);
    };

    const handleClick = () => {
        const fileInput = document.getElementById('file-input') as HTMLInputElement;
        if (fileInput) fileInput.click();
    };

    const imageSrc = typeof imageFile === 'string' 
        ? imageFile // Treat imageFile as URL
        : imageFile 
        ? URL.createObjectURL(imageFile) // Treat imageFile as a local File
        : null;

    return (
        <div 
            className='h-40 w-full border-dashed border rounded center-flex text-gray-400 cursor-pointer'
            onClick={handleClick}
        >
            {imageSrc ? (
                <Image
                src={imageSrc}
                alt="Selected"
                width={800}
                height={100}
                className="h-full w-full object-contain object-center "
                />
            ) : (
                <CiImageOn className='w-full h-full text-5xl' />
            )}
            <input 
                type="file" 
                id="file-input"
                className='hidden' 
                onChange={handleFileChange}
                accept="image/*"
            />
        </div>
    );
};

export default FileInput;