
import {browserHistory} from 'react-router';
import {addHttpsToQuery} from './stringFuc';

// 跳转
browserHistory.push = (url) => {
  addUrlHistoryToLocalData();
  const jumpUrl = getJumpUrl(url);
  const realUrl = addHttpsToQuery(jumpUrl);
  window.location.replace(realUrl);
}

// 返回
browserHistory.pop = (index) => {
  const jumpUrl = getPopUrl(index);
  const realUrl = addHttpsToQuery(jumpUrl);
  window.location.replace(realUrl);
}

const getJumpUrl = (url) => {
  const host = window.Taowan.config.baseWebUrl;
  if(url[0] === '/') {
    url = url.slice(1);
  }
  const _index = url.indexOf("?");
  let jumpUrl = '';
  if(url[url.length-1] === '/') {
    jumpUrl = host + url;
  } else {
    if (url === '' || _index !== -1 || process.env.NODE_ENV === 'development') {
      jumpUrl = host + url;
    }else {
      jumpUrl = host + url + '/';
    }
  }

  return jumpUrl;
}

const getPopUrl = (index) => {
  let history = window.Taowan.getLocalData('urlHistory');
  let url = '/';
  if (window.Taowan.objUtil.isNotEmpty(history)) {
    history = JSON.parse(history);
    if ((history instanceof Array) && index < 0 && history.length >= -index) {
      const count = history.length;
      for (let i = count-1; i >= 0; i--) {
        if (i == count+index) {
          url = history[i];
          history.pop();
          break;
        } 
        history.pop();
      }
      let history_json = JSON.stringify(history);
      window.Taowan.setLocalData('urlHistory', history_json);
    }
  } 
  // url = window.Taowan.config.baseWebUrl + url;
  return url;
}

const addUrlHistoryToLocalData = () => {
  /* 截取url*/
  let url = window.location.href;
  // const host = window.Taowan.config.baseWebUrl;
  // if (url && url.indexOf(host) == 0) {
  //   url = url.substr(host.length, url.length-host.length) ;
  // }
  // if (url == '') {
  //   url = '/';
  // }

  let history = window.Taowan.getLocalData('urlHistory');
  if (window.Taowan.objUtil.isNotEmpty(history)) {
    history = JSON.parse(history);
    if ((history instanceof Array) == false) {
      history = [];
    }
  } else {
    history = [];
  }

  history.push(url);
  let history_json = JSON.stringify(history);
  window.Taowan.setLocalData('urlHistory', history_json);
}
