import { Link } from "react-router-dom";
const Articles = ({ articles }) => {
  return (
    <div>
      <div className="">
        {articles.map((article, index) => (
          <div key={index} className="p-4 md:w-1/2">
            <div className="h-full overflow-hidden border-2 border-gray-200 rounded-lg border-opacity-60">
              <Link to={`/article/${article.name}`}>
                <img
                  className="object-cover object-center w-full lg:h-48 md:h-36"
                  src={article.thumbnail}
                  alt="blog"
                />
              </Link>
              <div className="p-6">
                <Link key={index} to={`/article/${article.name}`}>
                  <h3 className="mb-3 text-lg font-medium text-gray-900">
                    {" "}
                    {article.title}
                  </h3>
                </Link>
                <p>{article.content[0].substring(0, 110)}...</p>
                <div>
                  <Link
                    className="inline-flex items-center mt-3 text-indigo-500 md:mb-2 lg:mb-0"
                    to={`/article/${article.name}`}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
