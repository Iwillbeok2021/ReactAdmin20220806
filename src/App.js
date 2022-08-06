/**
 * 根组件
 */
import React ,{Component} from "react";
import { Button } from "antd";
import 'antd/dist/antd.min.css'
//路由器组件和路由组件  映射路由
import {BrowserRouter,Route,Routes} from 'react-router-dom'

import Login from "./pages/login/login";
import Admin from "./pages/admin/admin";

export default class App extends Component{

  render(){

    return(
      <BrowserRouter>
         <Routes>{/*只匹配一个**/}
            <Route path="/login" element={<Login/>}> </Route>
            <Route path="/" element={<Admin/>}> </Route>
         </Routes>
      </BrowserRouter>
    )


  }

}
