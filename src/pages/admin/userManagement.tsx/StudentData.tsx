import { Button, Pagination, Space, Table } from 'antd';
import type { TableColumnsType, TableProps } from 'antd';

import { useState } from "react";
import { TQueryParam, TStudent } from "../../../types";
import { useGetAllStudentsQuery } from "../../../redux/features/admin/userManagement.api";


export type TTableData =Pick<TStudent,"name"|"id">;

const StudentData = () => {
  const [params,setParams]= useState<TQueryParam[]>([]);
  const [page,setPage]= useState(3)
  const {data:studentData,isFetching} = useGetAllStudentsQuery([
    {name:"limit",value:3},
    {name:"page",value:page},
    {name:"sort",value:"id"},
    ...params]);
  console.log(studentData);
const metaData =studentData?.meta;
const tableData = studentData?.data?.map(({id,_id,fullName})=>({
 key:_id,
 id,
 fullName
}))

  
  const columns: TableColumnsType<TTableData> = [
    {
      title: 'Full Name',
      key:'fullName',
      dataIndex: 'fullName',

    },
  
    {
      title: 'Roll No.',
      key:'id',
      dataIndex: 'id', 
    },
    {
      title: 'Action',
      key:'x',
     render:()=>{
      return(
        <Space>
          <Button>Update</Button>
          <Button>Details</Button>
          <Button>Block</Button>
        </Space>
        
      )
     }, 
     width:"1%"
    },
  ];
  
  
  const onChange: TableProps<TTableData>['onChange'] = (_pagination, filters, _sorter, extra) => {
    console.log({filters,extra});
   
   if(extra.action==='filter'){
     const queryParams:TQueryParam[] =[];
     filters.name?.forEach((item)=>
      queryParams.push({name:'name',value:item})
    );
     filters.year?.forEach((item)=>
      queryParams.push({name:'year',value:item})
    );
    console.log(queryParams);
    setParams(queryParams);
   }
  };

  return (
    <div>
  
    <Table
    pagination={false}
    loading={isFetching}
    columns={columns}
    dataSource={tableData}
    onChange={onChange}
    showSorterTooltip={{ target: 'sorter-icon' }}
  />

  <Pagination current={page} onChange={(value)=>setPage(value)} pageSize={metaData?.limit} total={metaData?.total}/>
    </div>
  );
};

export default StudentData;
