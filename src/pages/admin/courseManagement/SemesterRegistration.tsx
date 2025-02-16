/* eslint-disable @typescript-eslint/no-unused-vars */
import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";
import { Button, Col, Flex } from "antd";
import PHSelect from "../../../components/form/PHSelect";
import { semesterStatusOptions } from "../../../constants/semester";
import { toast } from "sonner";
import { TResponse } from "../../../types/global";
import { useGetAllSemestersQuery } from "../../../redux/features/admin/academicManagement.api";
import PHDatePicker from "../../../components/form/PHDatePicker";
import PHInput from "../../../components/form/PHInput";
import { useAddRegisterSemesterMutation } from "../../../redux/features/admin/courseManagement.Api";



const SemesterRegistration = () => {
  const [addSemester]=useAddRegisterSemesterMutation();
  const {data:academicSemester}= useGetAllSemestersQuery([{"name":"sort","value":"year"}]);
  console.log(academicSemester);

const academicSemesterOptions=academicSemester?.data?.map((item)=>({
  value:item._id,
  label:`${item.name} ${item.year}`
}))

  const onSubmit:SubmitHandler<FieldValues> =async(data)=>{
     const toastId = toast.loading('creating...')

    const semesterData={
     ...data,
     minCredit:Number(data.minCredit),
     maxCredit:Number(data.maxCredit)
    }
    console.log(semesterData);
    try {
      console.log(semesterData);
      const res = await addSemester(semesterData) as TResponse<any>;
      console.log(res);
      if(res.error){
        toast.error(res.error.data.message,{id:toastId});
      }
      toast.success(res.data.message ,{id:toastId})
    } catch (error) {
      toast.error('something went wrong!',{id:toastId})
    }
 
  }

  return (
  <Flex align="center" justify="center" >
     <Col span={10}>
    <PHForm onSubmit={onSubmit}>
    <PHSelect label="Academic Semester" name="academicSemester" options={academicSemesterOptions}/>

    <PHSelect label="Status" name="status" options={semesterStatusOptions}/>
  
   <PHDatePicker name="startDate" label="Start Date"/>
  
   <PHDatePicker name="endDate" label="End Date"/>

   <PHInput type="text" name="minCredit" label="Min Credit"/>
   <PHInput type="text" name="maxCredit" label="Max Credit"/>
   
    <Button htmlType="submit">Submit</Button>
    </PHForm>
   </Col>
  </Flex>
  );
};

export default SemesterRegistration;