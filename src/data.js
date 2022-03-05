import { Email, Facebook, GitHub, LinkedIn } from '@material-ui/icons'
import React from 'react'
// import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'


export const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
  },
  // {
  //   id: 2,
  //   url: '/about',
  //   text: 'about me',
  // },
  // {
  //   id: 3,
  //   url: '/projects',
  //   text: 'projects',
  // },
  // {
  //   id: 4,
  //   url: '/contact',
  //   text: 'contact',
  // },
]

export const social = [
  {
    id: 1,
    url: 'https://www.twitter.com',
    icon: <Facebook />,
  },
  {
    id: 2,
    url: 'https://www.twitter.com',
    icon: <Email />,
  },
  {
    id: 3,
    url: 'https://www.twitter.com',
    icon: <LinkedIn />,
  },
  {
    id: 4,
    url: 'https://github.com/AsafO7',
    icon: <GitHub />
  }
]

export const cardData = [
  {
    id: 1, 
    image: "https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_960_720.png",
    title: "Mini-Games",
    description: "This project contains a few mini games.\n" +
    "It was written using HTML, CSS, and vanilla JS.",
    link: "https://small-mini-games-project.netlify.app/"
  },
  {
    id: 2,
    image: "https://st4.depositphotos.com/36966820/38692/v/1600/depositphotos_386929472-stock-illustration-stylish-banner-react-vector-illustration.jpg",
    title: "Recipes Website",
    description: `A website for food recipes picking using an API.\n It was written using React, TypeScript, and CSS.`,
    link: "/disheslist"
  },
]
