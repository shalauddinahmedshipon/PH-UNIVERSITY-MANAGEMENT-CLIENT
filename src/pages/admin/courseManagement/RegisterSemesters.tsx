import { Button, Dropdown, Table, Tag } from 'antd';
import type { TableColumnsType} from 'antd';
import { useGetAllRegisterSemesterQuery, useUpdateRegisterSemesterMutation } from '../../../redux/features/admin/courseManagement.Api';
import moment from 'moment';
import { TSemester } from '../../../types';
import { useState } from 'react';

export type TTableData =Pick<TSemester,"startDate"|"endDate"|"status">
const items=[
  {
    label:"UPCOMING",
    key:"UPCOMING",
  },
  {
    label:"ONGOING",
    key:"ONGOING",
  },
  {
    label:"ENDED",
    key:"ENDED",
  },
]
const RegisterSemesters = () => {
 const [semesterId,setSemesterId]=useState('');
 const {data:semesterData,isFetching}=useGetAllRegisterSemesterQuery(undefined)
  console.log(semesterId)
const [updateSemesterStatus]=useUpdateRegisterSemesterMutation();

const tableData=semesterData?.data?.map(({_id,academicSemester,startDate,endDate,status})=>({
 key:_id,name:`${academicSemester?.name} ${academicSemester?.year}`,
 startDate:moment(new Date(startDate)).format('MMMM'),
 endDate:moment(new Date(endDate)).format('MMMM'),
 status
}))
const handleStatusUpdate=(data)=>{
  console.log('semester',semesterId)
  console.log('newStatus',data.key)
  const updatedData={
    id:semesterId,
    data:{
      status:data.key
    }
  }
  updateSemesterStatus(updatedData);
}
const menuProps ={
  items,
  onClick:handleStatusUpdate,
}  
  const columns: TableColumnsType<TTableData> = [
    {
      title: 'Name',
      key:'name',
      dataIndex: 'name',
     
    },
    {
      title: 'Status',
      key:'status',
      dataIndex: 'status',
      render:(item)=>{
        let color;
        if(item==='UPCOMING'){color='blue'}
        if(item==='ONGOING'){color='green'}
        if(item==='ENDED'){color='red'}
        return <Tag color={color}>{item}</Tag>
      }
    
    },
    {
      title: 'Start Date',
      key:'startDate',
      dataIndex: 'startDate', 
    },
    {
      title: 'End Date',
      key:'endDate',
      dataIndex: 'endDate', 
    },
    {
      title: 'Action',
      key:'x',
     render:(item)=>{
      return(
        <Dropdown menu={menuProps} trigger={['click']}>
          <Button onClick={()=>setSemesterId(item.key)}>Update</Button>
        </Dropdown>
      )
     } 
    },
  ];
  

  return (
    <div>
      This is academic semester
    <Table
    loading={isFetching}
    columns={columns}
    dataSource={tableData}
    showSorterTooltip={{ target: 'sorter-icon' }}
  />
    </div>
  );
};

export default RegisterSemesters;
