import React from "react";
import 'antd/dist/antd.css';
import './summary.css';
import 'antd/dist/antd.css';
import { Col, Divider, Row } from 'antd';

import 'antd/dist/antd.min.css';
import 'antd/dist/antd.variable.min.css';
import { Breadcrumb, Layout, Menu } from 'antd';

const { Content, Footer } = Layout;

export function Sumary() {
  return (
    <Layout className=" ">

      <Content
        style={{

          justifyContent: 'center',
          justifyItems: 'center',
          textAlign: 'center',
        }} className="   justify-items-center d-flex"
      >
        <div className="layout-design">
          <div className=" site-layout-content mt-(-49)    mx-auto border-bottom-0 shadow-sm   mb-5">



            <div class="strike">
              <span> <img src="https://ssl.gstatic.com/onebox/media/sports/logos/-I9tpg9uetJjQNCh15jmKw_48x48.png" className="imgp w-0" /> England 158/7 (20)</span>
            </div>






            <div className='d-flex   justify-content-between'>
              <div>
                <h6 className="h7">  Ahmed </h6> <p className="d-flex">31(26)</p>
              </div>
              <div><h6> Luck Wood    </h6><p className="d-flex">3/2(4)</p></div>
            </div>
            <div className='d-flex   justify-content-between'>
              <div>
                <h6> Shazad Ahmed </h6> <p className="d-flex">31(26)</p>
              </div>
              <div><h6> Hassan Ali    </h6><p className="d-flex">3/2(4)</p></div>
            </div>
            <div className='d-flex   justify-content-between'>
              <div>
                <h6>wahab Ahmed </h6> <p className="d-flex">31(26)</p>
              </div>
              <div><h6> Rezwab Ali    </h6><p className="d-flex">3/2(4)</p></div>
            </div>



            <div class="strike">
              <span> <img src="https://ssl.gstatic.com/onebox/media/sports/logos/DTqIL8Ba3KIuxGkpXw5ayA_48x48.png" className="imgp" />  Pakistan 158/7 (20</span>
            </div>



            <div className='d-flex   justify-content-between'>
              <div>
                <h6>Iftekhar Ahmed </h6> <p className="d-flex">31(26)</p>
              </div>
              <div>
                <h6> Moen Ali    </h6><p className="d-flex">3/2(4)</p></div>
            </div>

            <div className='d-flex   justify-content-between'>
              <div>
                <h6>Iftekhar Ahmed </h6> <p className="d-flex">31(26)</p>
              </div>
              <div><h6> Moen Ali    </h6><p className="d-flex">3/2(4)</p></div>
            </div>
            <div className='d-flex   justify-content-between'>
              <div>
                <h6>Iftekhar Ahmed </h6> <p className="d-flex">31(26)</p>
              </div>
              <div><h6> Moen Ali    </h6><p className="d-flex">3/2(4)</p></div>
            </div>







          </div>
        </div>

      </Content>

    </Layout>
  )
}
