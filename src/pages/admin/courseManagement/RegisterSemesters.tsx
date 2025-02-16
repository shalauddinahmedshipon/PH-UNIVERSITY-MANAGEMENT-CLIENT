
import { Button, Table } from 'antd';
import type { TableColumnsType, TableProps } from 'antd';
import { TAcademicSemester } from "../../../types/academicManagement.type";
import { useGetAllRegisterSemesterQuery } from '../../../redux/features/admin/courseManagement.Api';


export type TTableData =Pick<TAcademicSemester,"name"|"startMonth"|"endMonth"|"year">;

const RegisterSemesters = () => {
 const {data:semesterData,isLoading,isFetching}=useGetAllRegisterSemesterQuery(undefined)
  console.log(semesterData)

const tableData=semesterData?.data?.map(({_id,academicSemester,startDate,endDate,status})=>({
 key:_id,name:`${academicSemester?.name} ${academicSemester?.year}`,startDate,endDate,status
}))

  
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
     render:()=>{
      return(
        <div>
          <Button>Update</Button>
        </div>
      )
     } 
    },
  ];
  
  
  // const onChange: TableProps<TTableData>['onChange'] = (_pagination, filters, _sorter, extra) => {
  //   console.log({filters,extra});
   
  //  if(extra.action==='filter'){
  //    const queryParams:TQueryParam[] =[];
  //    filters.name?.forEach((item)=>
  //     queryParams.push({name:'name',value:item})
  //   );
  //    filters.year?.forEach((item)=>
  //     queryParams.push({name:'year',value:item})
  //   );
  //   console.log(queryParams);
  //   setParams(queryParams);
  //  }
  // };

  return (
    <div>
      This is academic semester
    <Table
    loading={isFetching}
    columns={columns}
    dataSource={tableData}
    // onChange={onChange}
    showSorterTooltip={{ target: 'sorter-icon' }}
  />
    </div>
  );
};

export default RegisterSemesters;
