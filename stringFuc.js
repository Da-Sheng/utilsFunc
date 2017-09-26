
// https 带参的时候，找到参数第一个？替换成／？不然会自动转http
export const addHttpsToQuery = (url) => {
  const _index = url.indexOf('?');
  if (url.charAt(_index-1) === '/' || process.env.NODE_ENV === 'development') {
    return url;
  }
  return url.replace('?', '/?');
}

//隐藏手机号中间四位
export const hiddenPhoneMiddleFour = (telNo) => {
    let mtel = telNo.substr(3, 4);
    const newtel = telNo.replace(mtel, "****");
    return newtel;
}
//隐藏银行卡号，保留前后四位
export const hiddenCardMiddle = (cardNo) => {
  const middleLen = cardNo.length - 8;
  const middle = cardNo.substr(4, middleLen);
  let hiddenStar = '';
  for(let i=0; i < middleLen; i++) {
    hiddenStar += '*';
  }
  const newCardNo = cardNo.replace(middle, hiddenStar);
  return formatCardNo(newCardNo, true);
}
//隐藏银行卡号，保留前后四位
export const formatCardNo = (cardNo, isHidden = false) => {
  let newCardNo = '';
  if(isHidden) {
    const header = cardNo.substr(0, 4);
    const footer = cardNo.substr(-4);
    const middleLen = cardNo.length - 8;
    const middle = cardNo.substr(4, middleLen);
    newCardNo = `${header} ${middle.replace(/\s/g,'').replace(/(.{4})/g,"$1 ")} ${footer}`;
  }else {
    newCardNo=cardNo.replace(/\s/g,'').replace(/(.{4})/g,"$1 ");
  }
  return newCardNo;
}
//分转元，保留两位小数
export const calcMoney = (price) => {
  let mixed = price % 100;
  const int = (price - mixed) / 100;
  mixed = (`0${mixed}`).slice(-2);
	return int + '.' +mixed;
};

/*
* index: 往右移动几位, 保留两位
* price: 传入金额, 入123或者12.3或者12.03
*/
export const moveRightTwoDots = (price) => {
	if(typeof price !== 'string') {
		price = price + '';
	}
	let arr = price.split(".");
	let newPrice = '';
	const len = !!arr[1] ? arr[1].length : 0;
	switch (len) {
		case 0:
			newPrice = arr[0] + '00';
			break;
		case 1:
			newPrice = arr[0] + arr[1] + '0';
			break;
		case 2:
			newPrice = arr[0] + arr[1];
			break;
	
		default:
			break;
	}
	return newPrice;
}

/*
* number: 传入金额
* return: 返回小数点后三位向上取整的金额
*/

export const ceilPointThree = (number) => {
  let newNum = (Math.ceil(parseFloat(number).toFixed(1))/100).toFixed(2);
  return newNum;
}