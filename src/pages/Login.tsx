import { Button } from "antd";
import { FieldValues, useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";


const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {register,handleSubmit}=useForm({
    defaultValues:{
      userId:"A-0001",
      password:"123456"
    }
  });
const [login] = useLoginMutation();


const onSubmit= async(data:FieldValues) =>{
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="id">ID:</label>
        <input type="text"  id="id" {...register('userId')} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="text"  id="password" {...register('password')} />
      </div>
      <Button htmlType="submit">Login</Button>
    </form>
    </div>
  );
};

export default Login;