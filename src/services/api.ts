import axios from "axios";
import md5 from "md5";

const timestamp = String(new Date().getTime());

const hash = md5(
  `${timestamp}${process.env.REACT_APP_PUBLIC_PRIVATE}${process.env.REACT_APP_PUBLIC_KEY}`
);

export const api = axios.create({
  baseURL: process.env.REACT_APP_LINK_API,
  params: {
    ts: timestamp,
    apikey: process.env.REACT_APP_PUBLIC_KEY,
    hash,
    format: "comic",
  },
});
