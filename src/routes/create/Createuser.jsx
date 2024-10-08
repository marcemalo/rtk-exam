import { Button, Form, Input, Typography, notification } from "antd";
import {  useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useCreateUsersMutation } from "../../redux/api/createuserApi";
const {Title, Text} = Typography;

const Createuser = () => {


    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
      };
      const onFinish = (values) => {
        createUsers(values);
      };
      
      const navigate = useNavigate();
      const [createUsers, {data, isSuccess}] = useCreateUsersMutation();
    
      useEffect(() => {
        if(isSuccess){  
          
          notification.success({
            message: "Successfully logged in! Go ahed 😊"
          })
          navigate("/")
        }
      }, [isSuccess])
    
  return (
    <>
   <Form
      className="p-4 w-full "
      name="basic"
      layout="vertical"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Title level={2} className="text-center">Craete User</Title>
      <Form.Item
        label="Name"
        name="name"
        rules={[
          {
            required: true,
            message: "Please input your name!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Job"
        name="job"
        rules={[
          {
            required: true,
            message: "Please input your job!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button className="w-full" type="primary" htmlType="submit">
          Create User
        </Button>
      </Form.Item>
        
    </Form>
    </>
  )
}

export default Createuser