/* eslint-disable @typescript-eslint/no-unused-vars */
import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";
import { Button, Col, Flex } from "antd";
import PHSelect from "../../../components/form/PHSelect";
import { semesterOptions } from "../../../constants/semester";
import { monthOptions } from "../../../constants/global";
import { zodResolver } from "@hookform/resolvers/zod";
import { academicSemesterSchema } from "../../../schema/AcademicManagement.schema";
import { useAddAcademicSemesterMutation } from "../../../redux/features/admin/academicManagement.api";
import { toast } from "sonner";
import { TResponse } from "../../../types/global";

const currentYear= new Date().getFullYear();
const yearOptions =[0,1,2,3,4].map((number)=>({
  value:String(currentYear+number),
  label:String(currentYear+number)
}))

const CreateAcademicSemester = () => {
  const [addAcademicSemester]=useAddAcademicSemesterMutation();
  const onSubmit:SubmitHandler<FieldValues> =async(data)=>{
     const toastId = toast.loading('creating...')
    const name= semesterOptions[Number(data?.name)-1]?.label
    const semesterData={
      name,
      code:data.name,
      year:data.year,
      startMonth:data.startMonth,
      endMonth:data.endMonth
    }
    try {
      console.log(semesterData);
      const res = await addAcademicSemester(semesterData) as TResponse<any>;
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
    <PHForm resolver={zodResolver(academicSemesterSchema)} onSubmit={onSubmit}>
    <PHSelect label="name" name="name" options={semesterOptions}/>
    <PHSelect label="Year" name="year" options={yearOptions}/>
    <PHSelect label="Start Month" name="startMonth" options={monthOptions}/>
    <PHSelect label="End Month" name="endMonth" options={monthOptions}/>
   
    <Button htmlType="submit">Submit</Button>
    </PHForm>
   </Col>
  </Flex>
  );
};

export default CreateAcademicSemester;