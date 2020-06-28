import React, { useState, useEffect } from 'react';
import { Observer, useLocalStore } from 'mobx-react';
import { Link } from 'react-router-dom';
import stores from '@store/index';

interface IAppProps {
}

const Hook: React.FunctionComponent<IAppProps> = (props) =>{
  const [useName, setUseName] = useState('alala');
  const localStore = useLocalStore(() => stores.Hook);

  useEffect(() => {
    // effect
    return () => {
      // cleanup
    };
  }, []);

  return (
    <Observer>
      {() =>
        <div>
          <h4>函数组建 hook</h4>
          <p>{useName}</p>
          <h3> 我是数据管理里面的 <span style={{color:'red'}}>{localStore.dogName}</span></h3>
          <Link to="/">前往首页</Link> <br />
          <Link to="/test/2">前往测试页</Link>
        </div>

      }
    </Observer>
  );
}

export default Hook;