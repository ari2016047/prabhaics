import React from 'react';
import './Books.css';

const books =(props)=>{
    let books;
    console.log('HELLO',props);
    books = props.books.map(i=>(
        <div className="column" key={i.id}>
            <a href={i.src} target="_blank">
                <img src={i.imgSrc} alt={i.alt}/>
            </a>
        </div>
    ));
    return(
        <section className="sec">
            <div className="title">Our Books</div>
            <div className="subtitle">Prabha Publications </div>

                <div className="row">
                    {books}
                </div>
            <div className="action-buttons">
            <a href="https://www.amazon.in/s?me=AGHGGPQMIBWVH&marketplaceID=A21TJRUUN4KGV" target="_blank" className="Btn">SEE ALL BOOKS</a>
            </div>
        </section>
    );
}

export default books;