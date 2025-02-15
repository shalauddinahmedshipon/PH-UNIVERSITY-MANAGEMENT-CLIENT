import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";
import PHInput from "../../../components/form/PHInput";
import { Button } from "antd";

const studentDummyData={
  "password":"123456",
  "student":{
"name": {
  "firstName": "Shipon",
  "middleName": "Ahmed",
  "lastName": "Shalauddin"
},
 "gender":"male",
"dateOfBirth": "2000-01-01",
"email": "student2@gmail.com",
"contactNo": "1234567890",
"emergencyContactNo": "0987654321",
"presentAddress": "123 Main Street, Springfield",
"permanentAddress": "456 Elm Street, Springfield",

 "isDeleted": false,
 "academicDepartment":"6791121cf75eab611b427559",
 "admissionSemester":"67911392f75eab611b42755f",
"bloodGroup": "O+",
"guardian": {
  "fatherName": "Robert Doe",
  "fatherOccupation": "Engineer",
  "fatherContactNo": "1234567890",
  "motherName": "Jane Doe",
  "motherOccupation": "Doctor",
  "motherContactNo": "0987654321"
},
"localGuardian": {
  "name": "Alice Smith",
  "address": "789 Oak Street, Springfield",
  "contactNo": "1122334455"
 
}

}
}
const CreateStudent = () => {
  const onSubmit:SubmitHandler<FieldValues>=(data)=>{
   // console.log(data);
   const formData = new FormData();
   formData.append('data',JSON.stringify(data));
   console.log(Object.fromEntries(formData));
  }
  return (
   <PHForm onSubmit={onSubmit}>
    <PHInput type="text" name="name" label="Name"/>
    <Button htmlType="submit">Submit</Button>
   </PHForm>
  );
};

export default CreateStudent;