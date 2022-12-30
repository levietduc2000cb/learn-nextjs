// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import httpProxy from "http-proxy";
import Cookies from "cookies";

const proxy = httpProxy.createProxyServer({});

export const config = {
  api: {
    externalResolver: true,
    bodyParser: false,
  },
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const cookies = new Cookies(req, res, { secure: false });
  const cookieUser = cookies.get("cookies-user");

  if (!cookieUser) {
    return res.status(400).json({ message: "Request is not accept" });
  }

  req.headers.authorization = `Bearer ${cookieUser}`;

  req.headers.cookie = "";

  proxy.web(req, res, {
    target: "http://localhost:5000",
    changeOrigin: true,
    selfHandleResponse: false,
  });
}
