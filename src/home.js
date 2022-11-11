import { useState,useEffect} from "react";
import BlogList from "./bloglist";
const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "2016 Honda Accord, A sight to behold and a gem to drive",
      body: "The 2016 honda Accord EX-L V6...",
      author: "Mat Watson",
      id: 1
    },
    {
      title: "2021 Mercedes Benz E63S AMG, A wolf in sheep's clothing",
      body: " Twin turbo charge 4litre v8...",
      author: "Fadil Yakubu",
      id: 2
    },
    {
      title: "2017 Toyota Sienna, A quirky family hauler",
      body: " The 2017 toyota sienna's acceleration numbers...",
      author: "Fadil Yakubu",
      id: 3
    }
  ]);
   const [name,setName] = useState("mario");

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => {
      return blog.id !== id;
    });
    setBlogs(newBlogs);
  };

  useEffect(()=>{
    console.log("use effect ran");
    
  },[])
  return (
    <div className="home">
      <BlogList
        blogs={blogs}
        title="Latest Blogs"
        handleDelete={handleDelete}
      />
      <p>{name}</p>
      <button onClick={()=>{ setName("juligi")}}> change name</button>
    </div>
  );
};

export default Home;
