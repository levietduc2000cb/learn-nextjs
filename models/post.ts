export interface Author {
  name: string;
  authorTitle: string;
  authorUrl: string;
  authorImageUrl: string;
}

export interface Post {
  id: string;
  slug?: string;
  title: string;
  publishedDate: string;
  tagList: string[];
  description: string;

  imgae?: string;
  author?: Author;
  mdContent?: string;
  htmlContent?: string;
}
