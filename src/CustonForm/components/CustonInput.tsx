import { Controller, type Control, type FieldError } from "react-hook-form";
import './CustonInput.css'
import type { FormValues } from "../models/form.model";

interface Props{
    name: keyof FormValues;
    control: Control<FormValues>;
    label:string;
    type?: string;
    // La prop 'error' es opcional y es un objeto FieldError de RHF.
    error?: FieldError;
}

const InputForm = ({name, control, label, type, error}:Props)=>{
    return(
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <Controller
            name={name}
            control={control}
            render={({field})=>
            <input
             id={name}
              type={type}
               {...field}
               className={`form-control ${error ? "is-invalid" : ""}`}
               />
            }
            />
            {/* 💡 SOLUCIÓN: Muestra el mensaje si 'error' existe */}
            {error && <p className="error-message">{error.message}</p>}

        </div>
    )
}

export default InputForm