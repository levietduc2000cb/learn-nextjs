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
  req.headers.cookie = "";

  proxy.on("proxyRes", function (proxyRes, req, res) {
    var body = "";
    proxyRes.on("data", function (chunk) {
      body += chunk;
    });
    proxyRes.on("end", function () {
      const { token } = JSON.parse(body);
      const cookies = new Cookies(req, res, { secure: false });
      cookies.set("cookies-user", String(token));
      (res as NextApiResponse).status(200).json({ name: "Đức" });
    });
  });

  proxy.web(req, res, {
    target: "http://localhost:5000",
    changeOrigin: true,
    selfHandleResponse: true,
  });
}
