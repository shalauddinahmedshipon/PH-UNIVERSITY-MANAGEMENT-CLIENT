import { Form, Select } from 'antd';
import { useEffect } from 'react';
import { Controller, useFormContext, useWatch } from 'react-hook-form';

type TPHSelectProps={
  onValueChange:React.Dispatch<React.SetStateAction<string>>;
  label:string;
  name:string;
  disabled?:boolean;
  options:{
    value:string;
    label:string;
    disabled?:boolean
  }[] | undefined;
  mode?:'multiple'|undefined
}
const PHSelectWithWatch = ({label,name,options,disabled,mode,onValueChange}:TPHSelectProps) => {
const {control}=useFormContext();
const inputValue=useWatch({
  control,
  name
});
console.log(inputValue)

useEffect(()=>{
  onValueChange(inputValue);
},[inputValue])
  return (
<Controller
name={name}
render={({field,fieldState:{error}})=>( <Form.Item label={label}>
  <Select
   mode={mode}
   disabled={disabled}
   style={{ width:"100%"}}
   {...field}
   options={options}
 />
 {error&&<small style={{color:"red"}}>{error.message}</small>}
</Form.Item>)}
/>
  );
};

export default PHSelectWithWatch;