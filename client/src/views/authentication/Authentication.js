import React, { useState } from 'react';
import './Authentication.css';

import Login from './login/Login';
import Registration from './registration/Registration';

const Authentication = () => {
  const [activeTabType, setActiveTabType] = useState('login');
  const [loaderStatus, setLoaderStatus] = useState(false);

  const changeTabType = (tabType) => {
    setActiveTabType(tabType);
  };

  const getActiveClass = (tabType) => {
    return tabType === activeTabType ? 'active' : '';
  };

  const displayPageLoader = (shouldDisplay) => {
    setLoaderStatus(shouldDisplay);
  };

  return (
    <>
      <div className={`app__loader ${loaderStatus ? 'active' : ''}`}>
        <img alt='Loader' src='/loader.gif' />
      </div>
      <div className='app__authentication-container'>
        <div className='authentication__tab-switcher'>
          <button
            className={`${getActiveClass('login')} authentication__tab-button`}
            onClick={() => changeTabType('login')}
          >
            Login
          </button>
          <button
            className={`${getActiveClass(
              'registration'
            )} authentication__tab-button`}
            onClick={() => changeTabType('registration')}
          >
            Registration
          </button>
        </div>
        <div className='authentication__tab-viewer'>
          {activeTabType === 'login' ? (
            <Login displayPageLoader={displayPageLoader} />
          ) : (
            <Registration displayPageLoader={displayPageLoader} />
          )}
        </div>
      </div>
    </>
  );
};

export default Authentication;
