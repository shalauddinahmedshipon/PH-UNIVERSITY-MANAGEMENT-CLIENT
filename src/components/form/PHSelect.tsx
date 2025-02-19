import { Form, Select } from 'antd';
import { Controller } from 'react-hook-form';

type TPHSelectProps={
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

const PHSelect = ({label,name,options,disabled,mode}:TPHSelectProps) => {

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

export default PHSelect;