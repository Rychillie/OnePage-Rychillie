import matter from "gray-matter";

const getPosts = (context) => {
  const keys = context.keys();
  const values = keys.map(context);

  const data = keys.map((key, index) => {
    let slug = key.replace(/^.*[\\\/]/, "").slice(0, -3);
    const value = values[index];
    const document = matter(value.default);

    const title = document.data.title;
    const date = JSON.stringify(document.data.date);
    const category = document.data.category;
    const type = document.data.type;
    const description = document.data.description;

    return {
      frontmatter: { title, date, category, type, description },
      date: JSON.stringify(document.data.date),
      markdownBody: document.content,
      slug,
    };
  });

  return data;
};

export default getPosts;
