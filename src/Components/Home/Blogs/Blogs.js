import React, { useEffect, useState } from 'react';
import blogsData from './BlogsData';
import BlogsDataDetails from './BlogsDataDetails';
import './Blogs.css';
const Blogs = () => {
          const [data, setData] = useState([]);
          useEffect(() =>{
                    setData(blogsData);
          },[])
          return (
                    <section className="blog-section ">
                              
                              <div className="text-center py-5">
                                        <h5 className="my-3" style={{ color: "#1CC7C1", fontWeight: "700"}}>OUR BLOGS</h5>
                                        <h2 className="py-3" style={{ color: "#3A4256", fontWeight: "700"}}>From Our Blog News</h2>
                              </div>
                              <div className="container">
                              <div className="row">
                                        {
                                                  data.map(data => <BlogsDataDetails data={data} key={data.name}></BlogsDataDetails>)
                                        }
                              </div>
                              </div>
                    </section>
          );
};

export default Blogs;