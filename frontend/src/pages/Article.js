import { useParams } from "react-router";
import articleContente from "./Article-content";

const Article = () => {
  const { name } = useParams();
  const article = articleContente.find((article) => {
    return article.name === name;
  });

  if (!article) return <h1>Article not found</h1>;

  return (
    <div>
      <h1 className="my-6 text-2xl font-bold text-gray-900 sm:text-4xl">
        {article.title}
      </h1>
      {article.content.map((paragraph, index) => (
        <p key={index} className="m-auto mb-4 text-base leading-relaxed">
          {paragraph}
        </p>
      ))}
    </div>
  );
};

export default Article;
