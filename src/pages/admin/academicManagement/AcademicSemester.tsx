import { useGetAllSemestersQuery } from "../../../redux/features/admin/academicManagement.api";



const AcademicSemester = () => {
  const {data} = useGetAllSemestersQuery(undefined);
  console.log(data);
  return (
    <div>
      This is academic semester
    </div>
  );
};

export default AcademicSemester;
