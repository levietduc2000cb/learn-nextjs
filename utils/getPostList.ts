import fs from "fs";
import path from "path";
import * as matter from "gray-matter";
import { Post } from "../models/post";

//process.cwd() là đường dẫn đến thư mục mình đang ở ví dụ ở đây là: D:\NextJS\nextjs-start
//path.join(process.cwd(), "blog") là đường dẫn đến thư mục mình muốn trỏ đến, ví dụ ở đây là: D:\NextJS\nextjs-start\blog
const BLOG_FOLDER = path.join(process.cwd(), "blog");

export const getPostList = async (): Promise<Post[]> => {
  const fileNameList = fs.readdirSync(BLOG_FOLDER);
  for (const fileName of fileNameList) {
    const filePath = path.join(BLOG_FOLDER, fileName);
    const fileContents = fs.readFileSync(filePath, "utf-8");
    console.log(fileContents);
  }
  return [];
};
