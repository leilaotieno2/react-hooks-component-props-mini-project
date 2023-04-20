import Article from "./Article";
import blogData from "../data/blog";


function ArticleList(){
    const allArticles = blogData.posts.map(arr =>{
        return(<Article key={arr.id} title={arr.title} date={arr.date} preview={arr.preview}/>)
    })
  return(
        <main>
            {allArticles}
        </main>
    )
}

export default ArticleList;