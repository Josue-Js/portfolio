'use client';
import { InputHTMLAttributes } from "react";


type Props = {
  error?: { message: string } 
} & InputHTMLAttributes<HTMLInputElement>



export function Input({ error, name, ...rest }: Props) {

  return (
    <div className="flex flex-col gap-2">
      {error && (
        <span className="text-rosso-corsa capitalize text-sm font-medium">
          {error.message}
        </span>
      )}

      <label
        className="font-medium  text-independence"
        htmlFor={name}
      >
        {name}
      </label>
      <input
        {...rest}
        className="bg-[transparent] outline-none border-b-[1px] border-bright-gray px-3 py-2  focus:border-independence"
        id={name}
        name={name}
        type="text"
      />
    </div>
  );
}