/* eslint-disable @typescript-eslint/no-unused-vars */
import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";
import { Button, Col, Flex } from "antd";
import { toast } from "sonner";
import { TResponse } from "../../../types/global";
import { useGetAllSemestersQuery } from "../../../redux/features/admin/academicManagement.api";
import PHInput from "../../../components/form/PHInput";
import { useAddCourseMutation, useGetAllCoursesQuery } from "../../../redux/features/admin/courseManagement.Api";
import PHSelect from "../../../components/form/PHSelect";


const CreateCourse = () => {
  const [addCourse]=useAddCourseMutation();
  const {data:courses}=useGetAllCoursesQuery(undefined)
  const {data:academicSemester}= useGetAllSemestersQuery([{"name":"sort","value":"year"}]);
  console.log(academicSemester);

const preRequisiteCourseOptions=courses?.data?.map((item)=>({
  value:item._id,
  label:item.title
}))

  const onSubmit:SubmitHandler<FieldValues> =async(data)=>{
     const toastId = toast.loading('creating...')

    const coursesData ={...data,
      code:Number(data.code),
      credits:Number(data.credits),
      isDeleted:false,
    preRequisiteCourses:data?.preRequisiteCourses? data?.preRequisiteCourses?.map(item=>({course:item,isDeleted:false})):[]
    }
    console.log(coursesData);
    try {
   
      const res = await addCourse(coursesData) as TResponse<any>;
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
   <PHInput type="text" name="title" label="Title"/>  
   <PHInput type="text" name="prefix" label="Prefix"/>  
   <PHInput type="text" name="code" label="Code"/>  
   <PHInput type="text" name="credits" label="Credits"/> 
   <PHSelect mode="multiple" options={preRequisiteCourseOptions} 
   name="preRequisiteCourses" label="Prerequisite Courses"/> 
    <Button htmlType="submit">Submit</Button>
    </PHForm>
   </Col>
  </Flex>
  );
};

export default CreateCourse;