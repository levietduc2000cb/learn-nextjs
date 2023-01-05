import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Post } from "../models/post";

//process.cwd() là đường dẫn đến thư mục mình đang ở ví dụ ở đây là: D:\NextJS\nextjs-start
/*path.join(process.cwd(), "blog") là đường dẫn đến thư mục mình muốn trỏ đến, ví dụ ở đây là: 
D:NextJS\nextjs-start\blog*/
const BLOG_FOLDER = path.join(process.cwd(), "blog");

export const getPostList = async (): Promise<Post[]> => {
  let postList: Post[] = [];
  const fileNameList = fs.readdirSync(BLOG_FOLDER);
  for (const fileName of fileNameList) {
    const filePath = path.join(BLOG_FOLDER, fileName);
    const fileContents = fs.readFileSync(filePath, "utf-8");
    const { data, content, excerpt } = matter(fileContents, {
      excerpt_separator: "<!---truncate--->",
    });
    postList.push({
      id: data.slug,
      slug: data.slug,
      title: data.title,
      publishedDate: data.publishedDate,
      tagList: data.tags,
      description: excerpt || "",
      author: {
        name: data.author,
        authorTitle: data.author_title,
        authorUrl: data.author_url,
        authorImageUrl: data.author_image_url,
      },
      imgae: data.image,
      mdContent: content,
    });
  }
  return postList;
};
