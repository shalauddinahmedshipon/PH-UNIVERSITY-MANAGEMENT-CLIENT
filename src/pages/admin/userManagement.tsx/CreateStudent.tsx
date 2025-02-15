import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";
import PHInput from "../../../components/form/PHInput";
import { Button, Col, Divider, Row } from "antd";
import PHSelect from "../../../components/form/PHSelect";
import { bloodGroupsOptions, genderOptions } from "../../../constants/global";
import PHDatePicker from "../../../components/form/PHDatePicker";
import { useGetAllSemestersQuery } from "../../../redux/features/admin/academicManagement.api";

const studentDummyData={
  password: "123456",
  student: {
    name: {
      firstName: "Shipon",
      middleName: "Ahmed",
      lastName: "Shalauddin"
    },
    gender: "male",
    bloodGroup: "O+",
    dateOfBirth: "2000-01-01",

    email: "student2@gmail.com",
    contactNo: "1234567890",
    emergencyContactNo: "0987654321",
    presentAddress: "123 Main Street, Springfield",
    permanentAddress: "456 Elm Street, Springfield",
 
    guardian: {
      fatherName: "Robert Doe",
      fatherOccupation: "Engineer",
      fatherContactNo: "1234567890",
      motherName: "Jane Doe",
      motherOccupation: "Doctor",
      motherContactNo: "0987654321"
    },
    localGuardian: {
      name: "Alice Smith",
      address: "789 Oak Street, Springfield",
      contactNo: "1122334455"
    },

    isDeleted: false,
    academicDepartment: "6791121cf75eab611b427559",
    admissionSemester: "67911392f75eab611b42755f",
  }
}

//! this is only for testing in the development interface 
const studentDefaultValues =  {
  name: {
    firstName: "Shipon",
    middleName: "Ahmed",
    lastName: "Shalauddin"
  },
  gender: "male",
  bloodGroup: "O+",


  email: "student2@gmail.com",
  contactNo: "1234567890",
  emergencyContactNo: "0987654321",
  presentAddress: "123 Main Street, Springfield",
  permanentAddress: "456 Elm Street, Springfield",

  guardian: {
    fatherName: "Robert Doe",
    fatherOccupation: "Engineer",
    fatherContactNo: "1234567890",
    motherName: "Jane Doe",
    motherOccupation: "Doctor",
    motherContactNo: "0987654321"
  },
  localGuardian: {
    name: "Alice Smith",
    address: "789 Oak Street, Springfield",
    contactNo: "1122334455"
  },

  isDeleted: false,
  academicDepartment: "6791121cf75eab611b427559",
  admissionSemester: "67ae23cbb98472db1515fc83",
}
const CreateStudent = () => {
  const {data:sData,isLoading:sIsLoading}= useGetAllSemestersQuery(undefined);
  console.log(sData);
  const semesterOptions =sData?.data?.map((item)=>({
    value:item._id,
    label:`${item.name} ${item.year}`
  }))
  const onSubmit:SubmitHandler<FieldValues>=(data)=>{
   console.log(data);
  
  //  const formData = new FormData();
  //  formData.append('data',JSON.stringify(data));
  //  console.log(Object.fromEntries(formData));
  }

  return (
    <Row>
      <Col span={24}>
      <PHForm onSubmit={onSubmit} defaultValues={studentDefaultValues}>
        <Row gutter={8}>
          <Divider>Personal Info</Divider>
          <Col span={24} md={12} lg={8}>
          <PHInput type="text" name="name.firstName" label="First Name"/>
          </Col>
          <Col span={24} md={12} lg={8}>
          <PHInput type="text" name="name.middleName" label="Middle Name"/>
          </Col>
          <Col span={24} md={12} lg={8}>
          <PHInput type="text" name="name.lastName" label="Last Name"/>
          </Col>
          <Col span={24} md={12} lg={8}>
          <PHSelect options={genderOptions} name="gender" label="Gender"/>
          </Col>
          <Col span={24} md={12} lg={8}>
          <PHDatePicker  name="dateOfBirth" label="Date Of Birth"/>
          </Col>
          <Col span={24} md={12} lg={8}>
          <PHSelect options={bloodGroupsOptions} name="bloodGroup" label="Bloop Group"/>
          </Col>

          <Divider>Contact Info</Divider>
          <Col span={24} md={12} lg={8}>
          <PHInput type="text" name="email" label="Email"/>
          </Col>
          <Col span={24} md={12} lg={8}>
          <PHInput type="text" name="contactNo" label="Contact No."/>
          </Col>
          <Col span={24} md={12} lg={8}>
          <PHInput type="text" name="emergencyContactNo" label="Emergency Contact No."/>
          </Col>
          <Col span={24} md={12} lg={8}>
          <PHInput type="text" name="presentAddress" label="Present Address"/>
          </Col>
          <Col span={24} md={12} lg={8}>
          <PHInput type="text" name="permanentAddress" label="Permanent Address"/>
          </Col>

          <Divider>Guardian Info</Divider>
          <Col span={24} md={12} lg={8}>
          <PHInput type="text" name="guardian.fatherName" label="Father Name"/>
          </Col>
          <Col span={24} md={12} lg={8}>
          <PHInput type="text" name="guardian.fatherOccupation" label="Father Occupation"/>
          </Col>
          <Col span={24} md={12} lg={8}>
          <PHInput type="text" name="guardian.fatherContactNo" label=" Father Contact No."/>
          </Col>
          <Col span={24} md={12} lg={8}>
          <PHInput type="text" name="guardian.motherName" label="Mother Name"/>
          </Col>
          <Col span={24} md={12} lg={8}>
          <PHInput type="text" name="guardian.motherOccupation" label="Mother Occupation"/>
          </Col>
          <Col span={24} md={12} lg={8}>
          <PHInput type="text" name="guardian.motherContactNo" label="Mother Contact No."/>
          </Col>
          
          <Divider>Local Guardian Info</Divider>
          <Col span={24} md={12} lg={8}>
          <PHInput type="text" name="localGuardian.name" label="Name"/>
          </Col>
          <Col span={24} md={12} lg={8}>
          <PHInput type="text" name="localGuardian.address" label="Address"/>
          </Col>
          <Col span={24} md={12} lg={8}>
          <PHInput type="text" name="localGuardian.contactNo" label="Contact No."/>
          </Col>


          <Divider>Academic Info</Divider>
          <Col span={24} md={12} lg={8}>
          <PHSelect disabled={sIsLoading} options={semesterOptions} name="academicSemester" label="AcademicSemester"/>
          </Col>
          {/* <Col span={24} md={12} lg={8}>
          <PHSelect  options={semesterOptions} label="Academic Department"/>
          </Col> */}
         
       
        </Row>
   
    
    <Button htmlType="submit">Submit</Button>
   </PHForm>
      </Col>
    </Row>
 
  );
};

export default CreateStudent;