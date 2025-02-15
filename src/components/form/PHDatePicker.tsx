import { DatePicker, Form } from "antd";
import { Controller } from "react-hook-form";


type TDatePickerProps ={
  name:string;
  label?:string;
}

const PHDatePicker = ({name,label}:TDatePickerProps) => {
  return (
    <div style={{"marginBottom":"10px"}}>
    
       <Controller
       name={name}
       render={({field})=>(
        <Form.Item label={label}>
       <DatePicker size="large" {...field} style={{width:'100%'}} />
        </Form.Item>
       
       )}
       />
     
    </div>
  );
};

export default PHDatePicker;