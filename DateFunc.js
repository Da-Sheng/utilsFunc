// 日期计算
export const DateAddFunc = (interval, number, date) => {
    switch (interval) {
      case "y": {
          date.setFullYear(date.getFullYear() + number);
          return date;
      }
      case "q": {
          date.setMonth(date.getMonth() + number * 3);
          return date;
      }
      case "m": {
          date.setMonth(date.getMonth() + number);
          return date;
      }
      case "w": {
          date.setDate(date.getDate() + number * 7);
          return date;
      }
      case "d": {
          date.setDate(date.getDate() + number);
          return date;
      }
      case "h": {
          date.setHours(date.getHours() + number);
          return date;
      }
      case "s": {
          date.setSeconds(date.getSeconds() + number);
          return date;
      }
      default:
        break;
    }
}