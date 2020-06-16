import React from "react";

export class Author {
  constructor(
    authorID,
    name,
    username,
    email,
    phone,
    address,
    city,
    zipcode,
    companyame,
    companybs,
    geolat,
    geolng
  ) {
    this.authorID = authorID;
    this.name = name;
    this.username = username;
    this.email = email;
    this.phone = phone;
    this.address = address;
    this.city = city;
    this.zipcode = zipcode;
    this.companyame = companyame;
    this.companybs = companybs;
    this.geolat = geolat;
    this.geolng = geolng;
  }
}
