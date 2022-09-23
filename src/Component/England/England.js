
import { Space, Switch, Table } from 'antd';
import React, { useState } from 'react';

import 'antd/dist/antd.css';
import './eng.css'

import { Collapse } from 'antd';

import { Col, Divider, Row } from 'antd';

import 'antd/dist/antd.min.css';
import 'antd/dist/antd.variable.min.css';
import { Breadcrumb, Layout, Menu } from 'antd';



const { Panel } = Collapse;

const { Content, Footer } = Layout;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;


export function England() {
  return (
    <>
      <Space
        align="center"

      >
      </Space>
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
              <table class="table">

                <thead>
                  <tr>

                    <td className='d-flex'    >Batting</td>
                    <td  >R</td>
                    <td  >B</td>
                    <td  >4s</td>
                    <td  >6s</td>
                    <td  >S/R</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>

                    <td className='d-flex'>Phil Salt  



                    </td>

                    <td>32</td>
                    <td> 32</td>
                    <td>32</td>
                    <td> 32</td>
                    <td>32</td>
                  </tr>
                  <tr>

                    <td className='d-flex'>Alex Hales  </td>
                    <td>32</td>
                    <td> 32</td>
                    <td>32</td>
                    <td> 32</td>
                    <td>32</td>
                  </tr>
                  <tr>

                    <td className='d-flex'>  Dawid Malan</td>
                    <td>32</td>
                    <td> 32</td>
                    <td>32</td>
                    <td> 32</td>
                    <td>32</td>

                  </tr>

                </tbody>
              </table>
              <div className='d-flex  g-5 justify-content-between'>

                <td className=''>Extras  </td>

                <td>7 (W 5 LB 2)</td>

              </div>
              <hr />
              <div className=' d-flex  g-5 justify-content-between  '>

                <p className='d-flex'>Total runs  </p>

                <p>160 (4wkt 1 2 ov)</p>

              </div>
              <hr />

              <div >
                <h6 className='d-flex'>Yet to bat</h6>
                <p className='d-flex'>Haris Rauf - Shahnawaz</p>
              </div>
              <hr />
              <div>
                <h6 className='d-flex'>Fall of Wickets</h6>
                <p className=' flex'>85/1(B Azam, ,3ov)    85/1(B Azam, ,3ov)   85/1(B Azam, ,3ov)    85/1(B Azam, ,3ov)    85/1(B Azam, ,3ov)
                </p>
                <p className=' d-flex'>   85/1(B Ift, ,3ov)
                  85/1(B Azam, ,3ov)
                  85/1(B Azam, ,3ov)


                </p>
                <hr />
              </div>
              <table class="table">

                <thead>
                  <tr>

                    <td className='d-flex'    >Bowling</td>
                    <td  >O</td>
                    <td  >M</td>
                    <td  >R</td>
                    <td  >W</td>
                    <td  >Econ</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>

                    <td className='d-flex'>Mohammad Rezwan</td>
                    <td>32</td>
                    <td> 32</td>
                    <td>32</td>
                    <td> 32</td>
                    <td>32</td>
                  </tr>
                  <tr>

                    <td className='d-flex'>Mohammad Rezwan</td>
                    <td>32</td>
                    <td> 32</td>
                    <td>32</td>
                    <td> 32</td>
                    <td>32</td>
                  </tr>
                  <tr>

                    <td className='d-flex'>Mohammad Rezwan</td>
                    <td>32</td>
                    <td> 32</td>
                    <td>32</td>
                    <td> 32</td>
                    <td>32</td>
                  </tr>
                </tbody>
              </table>
            </div></div>
        </Content>
      </Layout>

    </>
  );
};
