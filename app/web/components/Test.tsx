import * as React from 'react';
import { Button } from 'antd';
import Util from '@/utils/test';

import styles from './Test.less';

const { useState, useEffect } = React;

interface TestProps {

}

const Test: React.SFC<TestProps> = (props) => {
  const [state, setState] = useState<string>('false');
  return (
    <div>
      <p>{state}</p>
      <p>Hello {Util('umijs')}</p>
      <Button className={styles.btn} onClick={() => setState(prev => prev === 'false' ? 'true' : 'false')}>Click</Button>
    </div>
  )
}

export default Test;
