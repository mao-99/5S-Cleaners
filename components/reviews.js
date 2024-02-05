import { useState, useEffect } from 'react';
import AddReviewForm from './addReviewForm';
export default function Review(){

    const [allReviews, setAllReviews] = useState([
        {images: '', name: 'Kai C', stars: 5, body: "I am beyond impressed with the service provided by 5-S! ⭐⭐⭐⭐⭐Every corner of my place sparkles after their visit."},
        {images: '', name: 'Julia P', stars: 5, body: "I am beyond impressed with the service provided by 5-S! ⭐⭐⭐⭐⭐Every corner of my place sparkles after their visit."},
        {images: '', name: 'Allie G', stars: 5, body: "I am beyond impressed with the service provided by 5-S! ⭐⭐⭐⭐⭐Every corner of my place sparkles after their visit."},
        {images: '', name: 'Josephine W', stars: 5, body: "I am beyond impressed with the service provided by 5-S! ⭐⭐⭐⭐⭐Every corner of my place sparkles after their visit."},
        {images: '', name: 'Top G', stars: 5, body: "I am beyond impressed with the service provided by 5-S! ⭐⭐⭐⭐⭐Every corner of my place sparkles after their visit."},
        {images: '', name: 'Ian U', stars: 5, body: "I am beyond impressed with the service provided by 5-S! ⭐⭐⭐⭐⭐Every corner of my place sparkles after their visit."},
        {images: '', name: 'Kai', stars: 5, body: "I am beyond impressed with the service provided by 5-S! ⭐⭐⭐⭐⭐Every corner of my place sparkles after their visit."},
        {images: '', name: 'Julia', stars: 5, body: "I am beyond impressed with the service provided by 5-S! ⭐⭐⭐⭐⭐Every corner of my place sparkles after their visit."},
        {images: '', name: 'Allie', stars: 5, body: "I am beyond impressed with the service provided by 5-S! ⭐⭐⭐⭐⭐Every corner of my place sparkles after their visit."},
        {images: '', name: 'Josephine', stars: 5, body: "I am beyond impressed with the service provided by 5-S! ⭐⭐⭐⭐⭐Every corner of my place sparkles after their visit."},
        {images: '', name: 'Kai C', stars: 5, body: "I am beyond impressed with the service provided by 5-S! ⭐⭐⭐⭐⭐Every corner of my place sparkles after their visit."},
        {images: '', name: 'Julia P', stars: 5, body: "I am beyond impressed with the service provided by 5-S! ⭐⭐⭐⭐⭐Every corner of my place sparkles after their visit."},
        {images: '', name: 'Allie G', stars: 5, body: "I am beyond impressed with the service provided by 5-S! ⭐⭐⭐⭐⭐Every corner of my place sparkles after their visit."},
        {images: '', name: 'Josephine W', stars: 5, body: "I am beyond impressed with the service provided by 5-S! ⭐⭐⭐⭐⭐Every corner of my place sparkles after their visit."},
        {images: '', name: 'Top G', stars: 5, body: "I am beyond impressed with the service provided by 5-S! ⭐⭐⭐⭐⭐Every corner of my place sparkles after their visit."},
        {images: '', name: 'Ian U', stars: 5, body: "I am beyond impressed with the service provided by 5-S! ⭐⭐⭐⭐⭐Every corner of my place sparkles after their visit."},
        {images: '', name: 'Kai', stars: 5, body: "I am beyond impressed with the service provided by 5-S! ⭐⭐⭐⭐⭐Every corner of my place sparkles after their visit."},
        {images: '', name: 'Julia', stars: 5, body: "I am beyond impressed with the service provided by 5-S! ⭐⭐⭐⭐⭐Every corner of my place sparkles after their visit."},
        {images: '', name: 'Allie', stars: 5, body: "I am beyond impressed with the service provided by 5-S! ⭐⭐⭐⭐⭐Every corner of my place sparkles after their visit."},
        {images: '', name: 'Josephine', stars: 5, body: "I am beyond impressed with the service provided by 5-S! ⭐⭐⭐⭐⭐Every corner of my place sparkles after their visit."},
        {images: '', name: 'Top', stars: 5, body: "I am beyond impressed with the service provided by 5-S! ⭐⭐⭐⭐⭐Every corner of my place sparkles after their visit."},
        {images: '', name: 'Ian', stars: 5, body: "I am beyond impressed with the service provided by 5-S! ⭐⭐⭐⭐⭐Every corner of my place sparkles after their visit."},
    ])
    const reviewsPerPage = 6
    const [currentPage, setCurrentPage] = useState(1);

    const handlePrevious = () => {
        if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < Math.ceil(allReviews.length / reviewsPerPage)) {
        setCurrentPage(currentPage + 1);
        }
    };

    const startIndex = (currentPage - 1) * reviewsPerPage;

    const displayedReviews = allReviews.slice(startIndex, startIndex + reviewsPerPage);

    const handlePopUpOpen = ()=>{
        setShowPopUp(true);
    }

    const handlePopUpClose = ()=>{
        setShowPopUp(false);
    }

    const [showPopUp, setShowPopUp] = useState(false);

    const handleAddReview = (newReview) => {
        setAllReviews((prevReviews) => [...prevReviews, newReview]);
    };

    return (
        <div>
            	<section>
                    <header className="major">
                        <h2>Reviews</h2>
                    </header>
                    <nav>
                            <ul className="actions special">
                                <li className={`page-item`}>
                                    <button className={`button ${currentPage === 1 ? 'disabled' : ''}`} onClick={handlePrevious}>Previous</button>
                                </li>
                                <li className={`page-item`}>
                                    <button className={`button ${currentPage === Math.ceil(allReviews.length / reviewsPerPage) ? 'disabled' : ''}`} onClick={handleNext}>Next</button>
                                </li>
                            </ul>
                            
                    </nav>
					<div className="container">
                        <div className="row">
                            {displayedReviews.map((review, index) => (
                                <div key={index} className="col-4 col-6-narrower">
                                <section className="box special">
                                    <a href="#" className="image featured">
                                    <img src={review.imageSrc} alt="" />
                                    </a>
                                    <header>
                                    <h3>{review.name}</h3>
                                    </header>
                                    <div className='stars'>
                                                    {[...Array(review.stars)].map((_, i) => (
                                                        <span key={i} className="star">&#9733;</span>
                                                    ))}
                                                </div>
                                    <p>{review.body}</p>
                                    <div className="card-footer">
                                            <small className="text-body-secondary">1 week ago</small>
                                        </div>  
                                </section>
                                </div>
                            ))}
                        </div>
					</div>
                    <br/>
                    <ul className="actions special">
                        <li>
                            <button className="button" onClick={handlePopUpOpen}>Leave Review</button>
                        </li>
                    </ul>

                    {showPopUp && (
                        <AddReviewForm onClose={handlePopUpClose} onAddReview={handleAddReview}/>
                    )}
				</section>
        </div>
    )
}









