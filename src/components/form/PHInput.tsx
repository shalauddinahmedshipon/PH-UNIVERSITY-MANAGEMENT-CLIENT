import { Input } from "antd";
import { Controller } from "react-hook-form";


type TInputProps ={
  type:string;
  name:string;
  label:string;
}

const PHInput = ({type,name,label}:TInputProps) => {
  return (
    <div style={{"marginBottom":"10px"}}>
       <label htmlFor={name}>{label?label:null}</label>
       <Controller
       name={name}
       render={({field})=>(
        <Input type={type}  id={name} {...field} />
       )}
       />
     
    </div>
  );
};

export default PHInput;