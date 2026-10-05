import axios from "axios";

const accessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5vdm9AZ21haWwuY29tIiwicGFzc3dvcmQiOiJzZWNyZXRvIiwiaWF0IjoxNTk2MzA2ODM5LCJleHAiOjE1OTYzMjQ4Mzl9.w131q04YCQvTXd6z_vnbfq8N0frpb82Onaw25yP6WdU";

export default axios.create({
  baseURL: "http://39745090c524.ngrok.io",
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});
