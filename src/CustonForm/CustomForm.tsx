import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import InputForm from "./components/CustonInput";
import { schema, type FormValues } from "./models/form.model";



 const CustomForm = ()=> {
    const {control, handleSubmit, formState:{errors}} = useForm<FormValues>({
        resolver:zodResolver(schema),
        mode:"onBlur" // O "onChange", dependiendo de cuándo quieras que se valide
    })


 const onSubmit: SubmitHandler<FormValues> = (data) =>{
    console.log(data)

}

return(
<form onSubmit={handleSubmit(onSubmit)}>
<InputForm name="name" control={control} label="Name" type="text" error={errors.name}/>
<InputForm name="email" control={control} label="Email" type="email" error={errors.email}/>
<InputForm name="password" control={control} label="Password" type="password" error={errors.password}/>
<InputForm name="confirmPassword" control={control} label="ConfirmPassword" type="password" error={errors.confirmPassword}/>
<button type="submit">Submit</button>

</form>

    ) 
}

export default CustomForm