import { useParams } from "react-router-dom";


const StudentDetails = () => {
  const {studentId}=useParams();
  return (
    <div>
      student details page of {studentId}
    </div>
  );
};

export default StudentDetails;