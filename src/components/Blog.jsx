import { Link } from 'react-router-dom';
import { blog } from '../utils';

const Blog = () => {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-4 align-element gap-x-8 py-6 items-center">
     {blog.map((item) => {
            const { id, image, image2, text, title } = item;
            return (
<div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{text}</p>
    <div className="card-actions justify-end">
      <Link to={`/singleBlog/${id}`} className="btn btn-outline">Read More</Link>
    </div>
  </div>
</div>
            )
          })
            }
      

      
      {/* <section className="section blog">
       
        <div className="section-title">
          <h2>blog</h2>
          <div className="underline"></div>
        </div>
      
        <div className="section-center blog-center">
         
          {blog.map((item) => {
            const { id, image, image2, text, title } = item;
            return (
              <article key={id} className="card">
             
                <div className="card-side card-front">
                  <img src={image} alt="project1" />
                  <div className="card-info">
                    <h4>{title}</h4>
                    <p>{text}</p>
                  
                  </div>
                </div>
             
                <div className="card-side card-back">
                  <Link to={`/singleBlog/${id}`} className="btn">
                    read more
                  </Link>
                </div>
              </article>
            );
          })}
          
        </div>
      </section> */}
    </div>
  );
};
export default Blog;
