import CryptoJS from "crypto-js";

export const Encrypt = (text: string) => {
  return CryptoJS.AES.encrypt(text, `${process.env.SECRET_KEY}`).toString();
};

export const Decrypt = (text: string) => {
  return CryptoJS.AES.decrypt(text, `${process.env.SECRET_KEY}`).toString(
    CryptoJS.enc.Utf8
  );
};

export const Hash = (text: string) => {
  return CryptoJS.SHA256(text).toString(CryptoJS.enc.Hex);
};
