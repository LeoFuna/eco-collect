'use client'
import { DetailedHTMLProps, HTMLAttributes, InputHTMLAttributes } from "react";

type FormInputProps = {
  label: string;
  inputProps: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
  className?: HTMLAttributes<HTMLInputElement>['className'];
}

export default function FormInput({ label, inputProps, className }: FormInputProps) {
  return (
    <div className={`flex flex-col gap-2 py-3 ${className}`}>
      <label className={`text-sm`} htmlFor={label}>{label}</label>
      <input {...inputProps} className={`h-14 border rounded ${inputProps.className}`} />
    </div>
  )
}