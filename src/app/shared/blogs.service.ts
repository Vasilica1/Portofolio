import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Blogs } from './blogs.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  constructor(private http: HttpClient) {}

  getBlogs() {
    return this.http.get<{message: string, blogs: any}>('http://localhost:3000/api/blogs')
      .pipe(map((blogData) => {
        return blogData.blogs.map((blog: { _id: any; title: any; description: any; imgSrc: any; }) => {
          return {
            id: blog._id,
            title: blog.title,
            description: blog.description,
            imgSrc: blog.imgSrc
          }
        });
      }));
  }

  postBlogs(title: string, description: string, imgSrc: string) {
    const blog = {
      title: title,
      description: description,
      imgSrc: imgSrc
    }
    return this.http.post<{message: string, blogId: string}>('http://localhost:3000/api/blogs', blog);
  }

  deleteBlog(blogId: string) {
    return this.http.delete(`http://localhost:3000/api/blogs/${blogId}`);
  }

  updateBlog(id: string, title: string, description: string, imgSrc: string) {
    const blog: Blogs = {
      id: id,
      title: title,
      description: description,
      imgSrc: imgSrc
    }
    return  this.http.put(`http://localhost:3000/api/blogs/${id}`, blog);

  }
}
