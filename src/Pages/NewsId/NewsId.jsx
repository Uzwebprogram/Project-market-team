import React from "react";
import Header from "../../Components/Header/Header";
import "./NewsId.css";
import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'

function NewsId() {
    const [data, setData] = useState([])
    const {id} = useParams()

    // useEffect(() => {
    //    fetch(`http://localhost:4000/allNewsData${id}`)
    //    .then(response => response.json())
    //    .then(json =>{
    //     setData(json)
    //    });
      
    //    console.log(data);
    //  }
    // }, [])
    useEffect(() => {
      const getComments = async () => {
        const res = await fetch(
          `http://localhost:4000/allNewsData/${id}`
        );
        const data = await res.json();
        setData(data);
       console.log(data);
      };
  
      getComments();
    }, []);
  return (
    <>
    <Header />
      <section className="c-newsId">
        <div className="container">
          <div className="c-newid-big-box">
            <div className="c-newsid-info">
                <h3 className='c-newsid-title'>{data.title}</h3>
                <p className="c-newsid-text">{data.longText}</p>
                <h4 className='c-newsid-title1'>{data.title1}</h4>
                <p className="c-newsid-text">{data.longText1}</p>
            </div>
            <div className="c-newsid-img-box">
                <img src={data.imgUrl} alt="image" width='500' height='750' />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default NewsId;
