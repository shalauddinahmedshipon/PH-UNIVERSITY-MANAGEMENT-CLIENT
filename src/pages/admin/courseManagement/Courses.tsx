import { Button, Modal, Table
} from 'antd';

import { useAddFacultiesMutation, useGetAllCoursesQuery } from '../../../redux/features/admin/courseManagement.Api';
import { useState } from 'react';
import PHSelect from '../../../components/form/PHSelect';
import PHForm from '../../../components/form/PHForm';
import { useGetAllFacultiesQuery } from '../../../redux/features/admin/userManagement.api';

const Courses = () => {
 const {data:courses,isFetching}=useGetAllCoursesQuery(undefined)

const tableData=courses?.data?.map(({_id,title,prefix,code})=>({
 key:_id,
 title,
 code:`${prefix} ${code}`
}))

  const columns = [
    {
      title: 'Title',
      key:'title',
      dataIndex: 'title',
     
    },
    {
      title: 'Code',
      key:'code',
      dataIndex: 'code',
    },
   
    {
      title: 'Action',
      key:'x',
     render:(item)=>{
      return(
        <AddFacultyModal facultyInfo={item}/>
      )
     } 
    },
  ];
  

  return (
    <div>
    <Table
    loading={isFetching}
    columns={columns}
    dataSource={tableData} 
  />
    </div>
  );
};

const AddFacultyModal=({facultyInfo})=>{
  const {data:facultiesData}=useGetAllFacultiesQuery(undefined);
  const [addFaculties]=useAddFacultiesMutation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log(facultiesData);
const facultyOptions = facultiesData?.data?.map((item)=>({
  value:item._id,
  label:item.fullName
}))
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleSubmit =(data)=>{
  const facultyData = {
    courseId:facultyInfo.key,
    data
  }
  console.log(facultyData)
  addFaculties(facultyData);
  }
  return(
    <>
    <Button onClick={showModal}>
      Add Faculty
    </Button>
    <Modal footer={null} title="Basic Modal" open={isModalOpen} onCancel={handleCancel} >
      <PHForm onSubmit={handleSubmit}>
      <PHSelect mode='multiple' options={facultyOptions} name="faculties" label="Faculty" />
      <Button htmlType='submit'>Submit</Button>
      </PHForm>
    </Modal>
  </>
  )
}

export default Courses;

