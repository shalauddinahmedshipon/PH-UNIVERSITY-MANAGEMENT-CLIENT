
import { Button, Dropdown, Table, Tag } from 'antd';
import type { TableColumnsType} from 'antd';
import { useGetAllRegisterSemesterQuery } from '../../../redux/features/admin/courseManagement.Api';
import moment from 'moment';
import { TSemester } from '../../../types';


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
 const {data:semesterData,isFetching}=useGetAllRegisterSemesterQuery(undefined)
  console.log(semesterData)

const tableData=semesterData?.data?.map(({_id,academicSemester,startDate,endDate,status})=>({
 key:_id,name:`${academicSemester?.name} ${academicSemester?.year}`,
 startDate:moment(new Date(startDate)).format('MMMM'),
 endDate:moment(new Date(endDate)).format('MMMM'),
 status
}))
const handleStatusDropdown=(data)=>{
  console.log(data)
}
const menuProps ={
  items,
  onClick:handleStatusDropdown,
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
     render:()=>{
      return(
        <Dropdown menu={menuProps}>
          <Button>Update</Button>
        </Dropdown>
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
