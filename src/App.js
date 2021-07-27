import logo from './logo.svg';
import React, { Component } from "react";
import { Form, Input, Button, Checkbox, Row, Col, Typography } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import User from './user'
import Home from './home'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
export default function App() {


  return (
    <div>
      <Button>
        <Link to="/">Нүүр</Link>
      </Button>
      <Button>
        <Link to="/user">Тоног төхөөрөмж</Link>
      </Button>
      <Button>
        <Link to="/">Нэвтрэх</Link>
      </Button>


      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/user"><User /></Route>
      </Switch>

    </div>
  );

}
