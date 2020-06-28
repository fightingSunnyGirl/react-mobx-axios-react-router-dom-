// 底部
import * as React from 'react';
import './index.less'

interface IAppProps {
}

const Header: React.FunctionComponent<IAppProps> = (props) => {
  return <div className="footer_box">
    <div className="footer_main_body container1200">
      <div className="footer_box_item">
        <img src="" alt="" className="item_img" />
        <div className="footer_box_item_desc">
          <p>降低成本</p>
          <p>帮你降低50%发货成本</p>
        </div>
      </div>
      <div className="footer_box_item">
        <img src="" alt="" className="item_img" />
        <div className="footer_box_item_desc">
          <p>去除库存</p>
          <p>回收库存、去礼品库</p>
        </div>
      </div>
      <div className="footer_box_item">
        <img src="" alt="" className="item_img" />
        <div className="footer_box_item_desc">
          <p>保证品质</p>
          <p>注重品质，物廉价美</p>
        </div>
      </div>
      <div className="footer_box_item">
        <img src="" alt="" className="item_img" />
        <div className="footer_box_item_desc">
          <p>多种选择</p>
          <p>低价礼品、配重礼品、高端礼品</p>
        </div>
      </div>
    </div>
    <p className="copyright">Copyright © 2017-2020 XXXX.com All Rights Reservedm 版权所有XXX，礼品代发
</p>
<div className="internet_content">
<img src="" alt=""/>
浙ICP备20XXXXXXX号-1 版权所有 XXXXX科技有限公司  
</div>
  </div>;
};

export default Header;
