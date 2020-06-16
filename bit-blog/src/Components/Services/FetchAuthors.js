import React from "react";
import SharedData from "../Shared/SharedData";
import Author from "../Entities/Author";
import { Post } from "../Post/NewPost";

 export  const FetchAuthors = () => {
  fetch(SharedData.urlAuthors)
    .then((response) => response.json())
    .then((authorsArray) => {
      const authors = authorsArray.map((author) => {
        return new Author(
          author.id,
          author.name,
          author.username,
          author.email,
          author.phone,
          author.address.street,
          author.address.city,
          author.address.zipcode,
          author.company.name,
          author.company.bs,
          author.address.geo.lat,
          author.address.geo.lng
        );
        
      });
      return authors
    });

    const FetchAuthor = (authorID) => (
        fetch(`${SharedData.urlAuthors}/${authorID}`)
        .then(response=>{
            return response.json()})
            .then(author => {
                return new Author (  author.id,
                    author.name,
                    author.username,
                    author.email,
                    author.phone,
                    author.address.street,
                    author.address.city,
                    author.address.zipcode,
                    author.company.name,
                    author.company.bs,
                    author.address.geo.lat,
                    author.address.geo.lng)
            })
        
    );
    const FetchAuthorPosts = (authorID) => (
        fetch(`${SharedData.urlAuthorPosts}${authorID}`)
        .then(response =>response.json())
        .then(authorPostArray => {
            const authorPost = authorPostArray.map((post) =>{
                return new Post (post.id, post.title, post.body, post.authorID)
            })
            return authorPost;
        })
    )
};
