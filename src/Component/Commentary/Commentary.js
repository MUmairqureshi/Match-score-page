import React from "react";
 import './commentary.css'
import 'antd/dist/antd.css';
import { Col, Divider, Row } from 'antd';

import 'antd/dist/antd.min.css';
import 'antd/dist/antd.variable.min.css'; 
import { Breadcrumb, Layout, Menu } from 'antd';

const { Content, Footer } = Layout;

export function Commentary (){
    return (
        <Layout className="layout">
        
          <Content
            style={{
              justifyContent: 'center',
              justifyItems: 'center',
              textAlign: 'center',
            }} className="justify-items-center d-flex"
          >
    
    <div className="layout-design">  
            <div className="site-layout-content     border-bottom-0 shadow-sm   mb-5">
      <div>
               <p className="d-flex">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
               </p>
                
               <p className="d-flex">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
               </p>
               <p className="d-flex">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
               </p>
               <p className=" justify-content-flex">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
               </p>
               </div>
               <div>
<div><span>End of over 20</span>

<span> 4Run 04</span>
</div>



               </div>
            </div>
    
            </div>
    
          </Content>
          
        </Layout>)
}
