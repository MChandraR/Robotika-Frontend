import React, { useMemo } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill-new/dist/quill.snow.css';
// Dynamically import ReactQuill component
const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false });

const TextEditor = ({
  value,
  onChange,
  placeholder,
  height = "h-1/2",
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  height? : string|null
}) => {
  // Configuring the toolbar
  const modules = useMemo(
    () => ({
      toolbar: [
        [{ header: '1' }, { header: '2' }, { font: [] }],
        [{ size: [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
        ['link', 'image', 'video'],
        ['clean'],
      ],
    }),
    [] // Memoize the modules so it doesn't get recalculated unnecessarily
  );

  return (
    <div className={`flex flex-col gap-2 w-full ${height} mb-24 text-black`}>
      <p className="text-sm">{placeholder}</p>
      <div className="w-full h-full lg:h-full">
        <ReactQuill
          value={value}
          onChange={onChange}
          theme="snow"
          modules={modules}
          className="h-full w-full bg-white rounded-lg"
        />
      </div>
    </div>
  );
};

export default TextEditor;