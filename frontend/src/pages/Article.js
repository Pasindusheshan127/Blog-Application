import { useParams } from "react-router";
import articleContente from "./Article-content";

//components
import Articles from "../components/Articles";
import NotFound from "./NotFound";

const Article = () => {
  const { name } = useParams();
  const article = articleContente.find((article) => {
    return article.name === name;
  });

  if (!article) return <NotFound />;
  const otherArticles = articleContente.filter(
    (article) => article.name !== name
  );
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
      <h1 className="text-xl font-bold text-gray-900 sm:text-2xl">
        Other Articles
      </h1>
      <div className="flex flex-wrap">
        <Articles articles={otherArticles} />
      </div>
    </div>
  );
};

export default Article;
