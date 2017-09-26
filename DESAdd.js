
export const addEncrypt = (value) => {
  return value.replace(/\+/g, '%2B');
};

export const addDecrypt = (value) => {
  return value.replace(/%2B/g, '+');
  // key = key.replace(/\+/g, '%2B');
};