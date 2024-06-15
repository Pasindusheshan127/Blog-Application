import Articlecontent from "./Article-content";

//components
import Articles from "../components/Articles";

const ArticleList = () => {
  return (
    <div>
      <h1 className="my-6 text-2xl font-bold text-gray-900 sm:text-4xl">
        Articles
      </h1>
      <div className="container py-4 mx-auto">
        <div className="flex flex-wrap -m-4">
          <Articles articles={Articlecontent} />
        </div>
      </div>
    </div>
  );
};

export default ArticleList;
