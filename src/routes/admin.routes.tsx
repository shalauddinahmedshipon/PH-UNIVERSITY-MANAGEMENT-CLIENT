import AcademicDepartment from "../pages/admin/academicManagement/AcademicDepartment";
import AcademicFaculty from "../pages/admin/academicManagement/AcademicFaculty";
import AcademicSemester from "../pages/admin/academicManagement/AcademicSemester";
import CreateAcademicDepartment from "../pages/admin/academicManagement/CreateAcademicDepartment";
import CreateAcademicFaculty from "../pages/admin/academicManagement/CreateAcademicFaculty";
import CreateAcademicSemester from "../pages/admin/academicManagement/CreateAcademicSemester";
import AdminDashboard from "../pages/admin/AdminDashboard";
import Courses from "../pages/admin/courseManagement/Courses";
import CreateCourse from "../pages/admin/courseManagement/CreateCourse";
import OfferCourse from "../pages/admin/courseManagement/OfferCourse";
import OfferedCourses from "../pages/admin/courseManagement/OfferedCourses";
import RegisterSemesters from "../pages/admin/courseManagement/RegisterSemesters";
import SemesterRegistration from "../pages/admin/courseManagement/SemesterRegistration";
import CreateAdmin from "../pages/admin/userManagement.tsx/CreateAdmin";
import CreateFaculty from "../pages/admin/userManagement.tsx/CreateFaculty";
import CreateStudent from "../pages/admin/userManagement.tsx/CreateStudent";
import StudentData from "../pages/admin/userManagement.tsx/StudentData";
import StudentDetails from "../pages/admin/userManagement.tsx/StudentDetails";


export const adminPaths =[
  {
    name:'Dashboard',
    path:"dashboard",
    element:<AdminDashboard/>
  },
  {
    name:'Academic Management',
    children:[
      {
        name:'Create Academic Semester',
        path:"create-academic-semester",
        element:<CreateAcademicSemester/>
      },
      {
        name:'Academic Semester',
        path:"academic-semester",
        element:<AcademicSemester/>
      },
      {
        name:'Create Academic Faculty',
        path:"create-academic-faculty",
        element:<CreateAcademicFaculty/>
      },
      {
        name:'Academic Faculty',
        path:"academic-faculty",
        element:<AcademicFaculty/>
      },
      {
        name:'Create Academic Department',
        path:"create-academic-department",
        element:<CreateAcademicDepartment/>
      },
      {
        name:'Academic Department',
        path:"create-academic-faculty",
        element:<AcademicDepartment/>
      },
     
    ]
  },
  {
    name:'User Management',
    children:[
      {
        name:'Create Admin',
        path:"create-admin",
        element:<CreateAdmin/>
      },
      {
        name:'Create Faculty',
        path:"create-faculty",
        element:<CreateFaculty/>
      },
      {
        name:'Create Student',
        path:"create-student",
        element:<CreateStudent/>
      },
      {
        name:'Students',
        path:"student-data",
        element:<StudentData/>
      },
      {
        path:"student-data/:studentId",
        element:<StudentDetails/>
      },
     
    ]
  },
  {
    name:'Course Management',
    children:[
      {
        name:'Semester Registration',
        path:"semester-registration",
        element:<SemesterRegistration/>
      },
      {
        name:'Registered Semesters',
        path:"registered-semesters",
        element:<RegisterSemesters/>
      },
      {
        name:'Create Course',
        path:"create-course",
        element:<CreateCourse/>
      },
      {
        name:'Courses',
        path:"courses",
        element:<Courses/>
      },
      {
        name:'Offer Course',
        path:"offer-course",
        element:<OfferCourse/>
      },
      {
        name:'Offered Courses',
        path:"offers-courses",
        element:<OfferedCourses/>
      },
     
     
    ]
  },
]




