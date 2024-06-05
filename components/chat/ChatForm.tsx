'use client';
import { ArrowUpCircleIcon } from '@heroicons/react/24/solid';
import { useCallback, useRef, useState} from 'react';


export default function ChatForm() { 
  const inputRef = useRef<HTMLInputElement>(null);
  const [showButton, setShowButton] = useState<boolean>(false);
  const onInput = useCallback(() => { 
    setShowButton(!!inputRef.current?.value);
  }, [
    showButton
  ]);

  return (
    <form className="w-full flex flex-row items-center justify-center">
      <input
        ref={inputRef}
        type="text"
        placeholder="Type a message..."
        className="w-3/4 p-2 mr-2 border border-gray-300 rounded text-gray-800"
        onInput={onInput}
      />
      {showButton && (
        <div className='w-1/6'>
          <button
            type="submit"
            className=" p-2 rounded-full h-9 w-9"
          >
            <ArrowUpCircleIcon
              scale={1.5}
              className='size-12 text-gray-100'
            />
          </button>
        </div>
      
      )}
     
    </form>
  );
}


