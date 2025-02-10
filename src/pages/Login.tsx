import { Button, Row } from "antd";
import { FieldValues} from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PHForm from "../components/form/PHForm";
import PHInput from "../components/form/PHInput";


const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  // const {register,handleSubmit}=useForm({
  //   defaultValues:{
  //     userId:"A-0001",
  //     password:"123456"
  //   }
  // });

 const  defaultValues = {
      userId:"A-0001",
      password:"123456"
    }

const [login] = useLoginMutation();


const onSubmit= async(data:FieldValues) =>{
  console.log(data);
 const toastId= toast.loading("Logging In")
try {
  const userInfo={
    id:data.userId,
    password:data.password
   }
   const res = await login(userInfo).unwrap();
   const user = verifyToken(res.data.accessToken) as TUser
   dispatch(setUser({user:user,token:res.data.accessToken}))
   toast.success("Login Successfully",{id:toastId,duration:2000})
   navigate(`/${user.role}/dashboard`)
   console.log(user);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
} catch (err) {
  toast.error("something went wrong!",{id:toastId,duration:2000})
}
  }


  return (
    <div>
   <Row justify={"center"} align={"middle"} style={{height:"100vh"}}>
   <PHForm onSubmit={onSubmit} defaultValues={defaultValues}>
    
    <PHInput type={"text"} name={"userId"} label={"userId"}/>
    <PHInput type={"password"} name={"password"} label={"Password"}/>
    <Button htmlType="submit">Login</Button>
</PHForm>
   </Row>
    </div>
  );
};

export default Login;