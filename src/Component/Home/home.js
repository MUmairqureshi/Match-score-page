import React from 'react';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import './home.css';
import { Pakistan } from '../Pakistan/Pakistan'
import { Link } from 'react-router-dom'
import 'antd/dist/antd.css';
import { Col, Divider, Row } from 'antd';
import { England } from '../England/England'
import 'antd/dist/antd.min.css';
import 'antd/dist/antd.variable.min.css';
import { Navigate } from '../header/header'
import { Breadcrumb, Layout, Menu } from 'antd';
import { Sumary } from '../Summary/summary'
import { Commentary } from '../Commentary/Commentary'
const { Content, Footer } = Layout;

export function Home() {
  return (

    <Layout className="layout">

      <Content
        style={{
          justifyContent: 'center',
          justifyItems: 'center',
          textAlign: 'center',
        }} className="justify-items-center d-flex"
      >
        
        <div className="site-layout-content   mx-auto  border-bottom-0 shadow-sm   mb-5">
          <p className='d-flex' >Tue, 20 Sept</p>
          <div class="d-flex row-sm p-4 justify-content-between">
            <div class="d-flex">
              <div class="mr-auto p-2"><img src='https://ssl.gstatic.com/onebox/media/sports/logos/-I9tpg9uetJjQNCh15jmKw_96x96.png' className='w-50' />
                <p>Pakistan</p>

              </div>

              <div class="p-2"><h6>158/7 </h6>
                <p>(20) </p>

              </div>
            </div>
            <div class="d-flex">
              <div class="p-2"><h6>160/4 </h6>
                <p>(19.2) </p>

              </div>
              <div class="mr-auto p-2"><img src='https://ssl.gstatic.com/onebox/media/sports/logos/DTqIL8Ba3KIuxGkpXw5ayA_96x96.png' className='w-50' />
                <p>Pakistan</p>

              </div>
            </div>

          </div>
          <div className='row-sm'>
            <h7>ENG won by 6 wickets(4 balls left)</h7>
            <p>T20 1 of 7 (ENG leads 1-0)</p>
          </div>
          <hr className='row-sm' />

          <div className=" Link d-flex row-sm text-color-black justify-content-between">
            <Link to='/' className="Link p-2 hover-overlay">SUMMARY</Link>
            <Link to='/pakistan' className="Link p-2 hover-overlay">PAKISTAN</Link>
            <Link to='/england' className="Link p-2 hover-overlay">ENGLAND</Link>
            <Link to='/commentary' className="Link p-2 hover-overlay ripple ">COMMENTARY</Link>
          </div>
          <hr className='row-sm' />
          <div className='text p-3 mb-2  rounded text-white '>
            <h6 className='d-flex text-white'>Player of the Match</h6>
            <h6 className='d-flex text-white'>Player of the Match Luke Wood(ENG) - 3/24(4)</h6>
          </div>
        </div>

        
      </Content>
    </Layout>)
};
 