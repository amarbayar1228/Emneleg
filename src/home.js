import logo from './logo.svg';
import React, { Component } from "react";
import { Form, Input, Button, Checkbox, Row, Col, Typography } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';




import '../src/App.css';
export default function Home() {

  const { Title } = Typography;


  const onFinish = (values) => {
    console.log('Success:', values);

  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (



    <Row className="background">
      <Col span={8}>

      </Col>
      <Col span={8} style={{ padding: '24px', textAlign: 'center' }}>

        <Form
          className='login-form'
          name="basic"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}>
          <Title level={3} style={{ color: 'white' }}>Эмнэлгийн тоног төхөөрөмж  </Title>
          <Form.Item >
            <Input prefix={<UserOutlined className="icon" />} placeholder="Нэвтрэх нэр" />
          </Form.Item>
          <Form.Item>
            <Input
              prefix={<LockOutlined className="icon" />}
              type="password"
              placeholder="Нууц үг"
            />
          </Form.Item>
          <Form.Item>

            <Checkbox style={{ color: 'white' }} >Намайг санах</Checkbox>

          </Form.Item>
          <Form.Item>

            <Button >Нэвтрэх</Button>

          </Form.Item>
        </Form>
      </Col>
      <Col span={8} >

      </Col>
      
    </Row>



  );

}
