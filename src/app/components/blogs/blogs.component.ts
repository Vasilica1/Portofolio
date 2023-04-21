import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Blogs } from 'src/app/shared/blogs.model';
import { BlogsService } from 'src/app/shared/blogs.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})

export class BlogsComponent implements OnInit {
  @ViewChild('f') blogsInfo: NgForm | undefined;
  display: boolean = false;
  private mode = 'create';
  imageSrc: string = '../../../assets/img/blog2.jpg';
  blogid!: string;
  blog: Blogs = {
    id: '',
    title: '',
    description: '',
    imgSrc: ''
  };

  blogs: Blogs [] = []

  constructor(private blogService: BlogsService, public route: ActivatedRoute) {}

  ngOnInit() {
    this.blogService.getBlogs().subscribe(blogs =>  {
      console.log(blogs);
      this.blogs = blogs;
    });
  }

  onSubmit() {
    const blog = {
      id: '',
      title: this.blogsInfo?.value.title,
      description: this.blogsInfo?.value.description,
      imgSrc: this.blogsInfo?.value.imgSrc
    }
    this.blogService.postBlogs(blog.title, blog.description, blog.imgSrc)
    .subscribe((response) => {
      const id = response.blogId;
      blog.id = id;
      this.blogs.push(blog);
    });
    
    this.blogsInfo?.reset();
  }

  displayForm() {
    this.display = true;
  }

  hideForm() {
    this.display = false;
    this.blogsInfo?.reset();
  }

  onDelete(id: string) {
    this.blogService.deleteBlog(id)
      .subscribe(() => {
        const updatedBlogs = this.blogs.filter(blog => blog.id !== id);
        this.blogs = updatedBlogs;
      })
  }
}
