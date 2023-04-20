import React from "react";
import blogData from "../data/blog";
import Header from "../components/Header";
import About from "../components/About";
import ArticleList from "../components/ArticleList";
console.log(blogData);
function App() {
  return (
    <div className="App">
      {/* You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck! */}
      <Header name={blogData.name}/>
      <About image={blogData.image} text={blogData.about}/>
      <ArticleList/>
    </div>
  );
}
export default App;