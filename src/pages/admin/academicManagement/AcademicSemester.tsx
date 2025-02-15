import { useGetAllSemestersQuery } from "../../../redux/features/admin/academicManagement.api";
import { Button, Table } from 'antd';
import type { TableColumnsType, TableProps } from 'antd';
import { TAcademicSemester } from "../../../types/academicManagement.type";
import { useState } from "react";
import { TQueryParam } from "../../../types";


export type TTableData =Pick<TAcademicSemester,"name"|"startMonth"|"endMonth"|"year">;

const AcademicSemester = () => {
  const [params,setParams]= useState<TQueryParam[]|undefined>(undefined);
  const {data:semesterData,isFetching} = useGetAllSemestersQuery(params);
  console.log(semesterData);

const tableData=semesterData?.data?.map(({_id,name,startMonth,endMonth,year})=>({
 key:_id,name,startMonth,endMonth,year
}))

  
  const columns: TableColumnsType<TTableData> = [
    {
      title: 'Name',
      key:'name',
      dataIndex: 'name',
      showSorterTooltip: { target: 'full-header' },
      filters: [
        {
          text: 'Autumn',
          value: 'Autumn',
        },
        {
          text: 'Fall',
          value: 'Fall',
        },
        {
          text: 'Summer',
          value: 'Summer',
        }
      ],
   
 
    },
    {
      title: 'Year',
      key:'year',
      dataIndex: 'year',
      filters: [
        {
          text: '2025',
          value: '2025',
        },
        {
          text: '2026',
          value: '2026',
        },
        {
          text: '2027',
          value: '2027',
        }
      ],
  
    },
    {
      title: 'Start Month',
      key:'startMonth',
      dataIndex: 'startMonth', 
    },
    {
      title: 'End Month',
      key:'endMonth',
      dataIndex: 'endMonth', 
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
      This is academic semester
    <Table
    loading={isFetching}
    columns={columns}
    dataSource={tableData}
    onChange={onChange}
    showSorterTooltip={{ target: 'sorter-icon' }}
  />
    </div>
  );
};

export default AcademicSemester;
