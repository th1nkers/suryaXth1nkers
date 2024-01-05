import React from 'react';
import "./Card.css";

const Card = ({ headers, sectionPara, onSubmit,children }) => {
    return (
        <div className={`card`}>
            {children}
            {/* <header className="card-headers">
                <h1>{headers}</h1>
            </header>
            <section className='card-section'>
                <div className="card-section-para">
                    <p>{sectionPara}</p>
                </div>
                <form className="card-section-form" onSubmit={onSubmit}>
                    <div className="control">
                        <input type="email" name='email' />
                    </div>
                    <button type='submit'>Next</button>
                </form>
            </section> */}
        </div>
    )
}

export default Card
