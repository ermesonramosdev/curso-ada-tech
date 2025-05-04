import React from "react";
import './style.css';

export function Article( {thumbnail, title, provider, description} ) {
  return (
    <article id="article">
      <img src={thumbnail} alt={title} />
      <div className="article-infos">
        <h2> {title} </h2>
        <h3> {provider} </h3>
        <p> {description} </p>
      </div>
    </article>
  )
}

