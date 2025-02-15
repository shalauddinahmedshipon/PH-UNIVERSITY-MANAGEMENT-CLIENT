import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";
import PHInput from "../../../components/form/PHInput";
import { Button, Col, Divider, Row } from "antd";
import PHSelect from "../../../components/form/PHSelect";
import { bloodGroupsOptions, genderOptions } from "../../../constants/global";

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
const CreateStudent = () => {
  const onSubmit:SubmitHandler<FieldValues>=(data)=>{
   console.log(data);
  //  const formData = new FormData();
  //  formData.append('data',JSON.stringify(data));
  //  console.log(Object.fromEntries(formData));
  }

  return (
    <Row>
      <Col span={24}>
      <PHForm onSubmit={onSubmit}>
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
          <PHInput type="text" name="dateOfBirth" label="Date Of Birth"/>
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
          <PHInput type="text" name=" fatherName" label="Father Name"/>
          </Col>
          <Col span={24} md={12} lg={8}>
          <PHInput type="text" name="fatherOccupation" label="Father Occupation"/>
          </Col>
          <Col span={24} md={12} lg={8}>
          <PHInput type="text" name=" fatherContactNo" label=" Father Contact No."/>
          </Col>
          <Col span={24} md={12} lg={8}>
          <PHInput type="text" name="motherName" label="Mother Name"/>
          </Col>
          <Col span={24} md={12} lg={8}>
          <PHInput type="text" name="motherOccupation" label="Mother Occupation"/>
          </Col>
          <Col span={24} md={12} lg={8}>
          <PHInput type="text" name="motherContactNo" label="Mother Contact No."/>
          </Col>




          
        </Row>
   
    
    <Button htmlType="submit">Submit</Button>
   </PHForm>
      </Col>
    </Row>
 
  );
};

export default CreateStudent;