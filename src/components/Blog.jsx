import { Link } from 'react-router-dom';
import { blog } from '../utils';

const Blog = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 place-items-center mx-auto gap-1 md:max-w-6xl pt-0 mt-0">
        <h3 className='text-center text-4xl md:text-5xl font-bold py-4'>Blog</h3>
     {blog.map((item) => {
            const { id, image, image2, text, title } = item;
            return (
  <div key={id} className="card bg-base-100 max-w-80 shadow-sm">
  <figure>
    <img
      src={image}
      alt="" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{text}</p>
    <div className="card-actions justify-end">
      <Link to={`/singleBlog/${id}`} className="btn btn-primary">Read More</Link>
    </div>
  </div>
</div>
      
            )
          })
            }
      
    
     
    </div>
  );
};
export default Blog;
