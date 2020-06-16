import React from "react";

export class Post {
  constructor(id, title, body, authorID) {
    this.id = id;
    this.title = title;
    this.body = body;
    this.authorID = authorID;
  }
}
