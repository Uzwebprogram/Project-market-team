import React from "react";
import Header from "../../Components/Header/Header";
import "./NewsId.css";
import {useParams} from 'react-router-dom'

function NewsId() {
    const {id} = useParams()
    console.log(id);
  return (
    <>
    <Header />
      <section className="c-newsId">
        <div className="container">
          <h2>News Details Page</h2>
        </div>
      </section>
    </>
  );
}

export default NewsId;
