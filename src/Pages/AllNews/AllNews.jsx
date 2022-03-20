import React from "react";
// import { Link } from 'react-router-dom'
import Header from "../../Components/Header/Header";
import "./AllNews.css";
import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AllNews() {
  const [items, setItems] = useState([]);

  const [pageCount, setpageCount] = useState(0);
  let limit = 10;

  useEffect(() => {
    const getComments = async () => {
      const res = await fetch(
        `http://localhost:4000/allNewsData?_page=1&_limit=${limit}`
      );
      const data = await res.json();
      const total = res.headers.get("x-total-count");
      setpageCount(Math.ceil(total / limit));
      // console.log(Math.ceil(total/12));
      setItems(data);
    };

    getComments();
  }, [limit]);

  const fetchComments = async (currentPage) => {
    const res = await fetch(
      `http://localhost:4000/allNewsData?_page=${currentPage}&_limit=${limit}`
    );
    const data = await res.json();
    return data;
  };

  const handlePageClick = async (data) => {
    console.log(data.selected);

    let currentPage = data.selected + 1;

    const commentsFormServer = await fetchComments(currentPage);

    setItems(commentsFormServer);
    // scroll to the top
    //window.scrollTo(0, 0)
  };
  return (
    <>
      <Header />
      <section className="c-allnews">
        <div className="container">
          <div className="c-news-div">
            <h2 className="c-news-div-title">Новости</h2>
            <ul className="c-news-list">
              {items.map((elem) => (
                <li className="c-news-item">
                  <Link to={`/newsId/${elem.id}`} className='c-news-item-link'>
                    <div className="c-news-img-box">
                      <img
                        className="c-news-img-box-img"
                        src={elem.imgUrl}
                        width="150"
                        alt="image"
                      />
                    </div>
                    <div className="c-news-info-box">
                      <h3 className="c-news-title">{elem.title}</h3>
                      <p className="c-news-text">{elem.shortText}</p>
                      <div className="c-news-btn-box">
                        <span className="c-news-link">Подробнее</span>
                        <p className="c-news-data">{elem.date}</p>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
            <ReactPaginate
              previousLabel={"<"}
              nextLabel={">"}
              breakLabel={"..."}
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={3}
              onPageChange={handlePageClick}
              containerClassName={"pagination justify-content-center"}
              pageClassName={"page-item"}
              pageLinkClassName={"page-link"}
              previousClassName={"page-item"}
              previousLinkClassName={"page-link"}
              nextClassName={"page-item"}
              nextLinkClassName={"page-link"}
              breakClassName={"page-item"}
              breakLinkClassName={"page-link"}
              activeClassName={"active"}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default AllNews;
