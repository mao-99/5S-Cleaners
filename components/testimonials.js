import { useState } from 'react';
import AddReviewForm from './addReviewForm';
export default function Testimonials(){
    const [allReviews, setAllReviews] = useState([
        {images: '', name: 'Kai C', stars: 5, body: "I am beyond impressed with the service provided by 5-S! ⭐⭐⭐⭐⭐Every corner of my place sparkles after their visit. Their attention to detail is remarkable.It is the little things that make a big difference, and they truly understand that.I highly recommend their services to anyone in need of a thorough and meticulous cleaning"},
        {images: '', name: 'Julia P', stars: 5, body: "I am beyond impressed with the service provided by 5-S! ⭐⭐⭐⭐⭐Every corner of my place sparkles after their visit. Their attention to detail is remarkable.It is the little things that make a big difference, and they truly understand that.I highly recommend their services to anyone in need of a thorough and meticulous cleaning"},
        {images: '', name: 'Allie G', stars: 5, body: "I am beyond impressed with the service provided by 5-S! ⭐⭐⭐⭐⭐Every corner of my place sparkles after their visit. Their attention to detail is remarkable.It is the little things that make a big difference, and they truly understand that.I highly recommend their services to anyone in need of a thorough and meticulous cleaning"},
        {images: '', name: 'Josephine W', stars: 5, body: "I am beyond impressed with the service provided by 5-S! ⭐⭐⭐⭐⭐Every corner of my place sparkles after their visit. Their attention to detail is remarkable.It is the little things that make a big difference, and they truly understand that.I highly recommend their services to anyone in need of a thorough and meticulous cleaning"},
        {images: '', name: 'Top G', stars: 5, body: "I am beyond impressed with the service provided by 5-S! ⭐⭐⭐⭐⭐Every corner of my place sparkles after their visit. Their attention to detail is remarkable.It is the little things that make a big difference, and they truly understand that.I highly recommend their services to anyone in need of a thorough and meticulous cleaning"},
        {images: '', name: 'Ian U', stars: 5, body: "I am beyond impressed with the service provided by 5-S! ⭐⭐⭐⭐⭐Every corner of my place sparkles after their visit. Their attention to detail is remarkable.It is the little things that make a big difference, and they truly understand that.I highly recommend their services to anyone in need of a thorough and meticulous cleaning"},
        {images: '', name: 'Kai', stars: 5, body: "I am beyond impressed with the service provided by 5-S! ⭐⭐⭐⭐⭐Every corner of my place sparkles after their visit. Their attention to detail is remarkable.It is the little things that make a big difference, and they truly understand that.I highly recommend their services to anyone in need of a thorough and meticulous cleaning"},
        {images: '', name: 'Julia', stars: 5, body: "I am beyond impressed with the service provided by 5-S! ⭐⭐⭐⭐⭐Every corner of my place sparkles after their visit. Their attention to detail is remarkable.It is the little things that make a big difference, and they truly understand that.I highly recommend their services to anyone in need of a thorough and meticulous cleaning"},
        {images: '', name: 'Allie', stars: 5, body: "I am beyond impressed with the service provided by 5-S! ⭐⭐⭐⭐⭐Every corner of my place sparkles after their visit. Their attention to detail is remarkable.It is the little things that make a big difference, and they truly understand that.I highly recommend their services to anyone in need of a thorough and meticulous cleaning"},
        {images: '', name: 'Josephine', stars: 5, body: "I am beyond impressed with the service provided by 5-S! ⭐⭐⭐⭐⭐Every corner of my place sparkles after their visit. Their attention to detail is remarkable.It is the little things that make a big difference, and they truly understand that.I highly recommend their services to anyone in need of a thorough and meticulous cleaning"},
        {images: '', name: 'Kai C', stars: 5, body: "I am beyond impressed with the service provided by 5-S! ⭐⭐⭐⭐⭐Every corner of my place sparkles after their visit. Their attention to detail is remarkable.It is the little things that make a big difference, and they truly understand that.I highly recommend their services to anyone in need of a thorough and meticulous cleaning"},
        {images: '', name: 'Julia P', stars: 5, body: "I am beyond impressed with the service provided by 5-S! ⭐⭐⭐⭐⭐Every corner of my place sparkles after their visit. Their attention to detail is remarkable.It is the little things that make a big difference, and they truly understand that.I highly recommend their services to anyone in need of a thorough and meticulous cleaning"},
        {images: '', name: 'Allie G', stars: 5, body: "I am beyond impressed with the service provided by 5-S! ⭐⭐⭐⭐⭐Every corner of my place sparkles after their visit. Their attention to detail is remarkable.It is the little things that make a big difference, and they truly understand that.I highly recommend their services to anyone in need of a thorough and meticulous cleaning"},
        {images: '', name: 'Josephine W', stars: 5, body: "I am beyond impressed with the service provided by 5-S! ⭐⭐⭐⭐⭐Every corner of my place sparkles after their visit. Their attention to detail is remarkable.It is the little things that make a big difference, and they truly understand that.I highly recommend their services to anyone in need of a thorough and meticulous cleaning"},
        {images: '', name: 'Top G', stars: 5, body: "I am beyond impressed with the service provided by 5-S! ⭐⭐⭐⭐⭐Every corner of my place sparkles after their visit. Their attention to detail is remarkable.It is the little things that make a big difference, and they truly understand that.I highly recommend their services to anyone in need of a thorough and meticulous cleaning"},
        {images: '', name: 'Ian U', stars: 5, body: "I am beyond impressed with the service provided by 5-S! ⭐⭐⭐⭐⭐Every corner of my place sparkles after their visit. Their attention to detail is remarkable.It is the little things that make a big difference, and they truly understand that.I highly recommend their services to anyone in need of a thorough and meticulous cleaning"},
        {images: '', name: 'Kai', stars: 5, body: "I am beyond impressed with the service provided by 5-S! ⭐⭐⭐⭐⭐Every corner of my place sparkles after their visit. Their attention to detail is remarkable.It is the little things that make a big difference, and they truly understand that.I highly recommend their services to anyone in need of a thorough and meticulous cleaning"},
        {images: '', name: 'Julia', stars: 5, body: "I am beyond impressed with the service provided by 5-S! ⭐⭐⭐⭐⭐Every corner of my place sparkles after their visit. Their attention to detail is remarkable.It is the little things that make a big difference, and they truly understand that.I highly recommend their services to anyone in need of a thorough and meticulous cleaning"},
        {images: '', name: 'Allie', stars: 5, body: "I am beyond impressed with the service provided by 5-S! ⭐⭐⭐⭐⭐Every corner of my place sparkles after their visit. Their attention to detail is remarkable.It is the little things that make a big difference, and they truly understand that.I highly recommend their services to anyone in need of a thorough and meticulous cleaning"},
        {images: '', name: 'Josephine', stars: 5, body: "I am beyond impressed with the service provided by 5-S! ⭐⭐⭐⭐⭐Every corner of my place sparkles after their visit. Their attention to detail is remarkable.It is the little things that make a big difference, and they truly understand that.I highly recommend their services to anyone in need of a thorough and meticulous cleaning"},
        {images: '', name: 'Top', stars: 5, body: "I am beyond impressed with the service provided by 5-S! ⭐⭐⭐⭐⭐Every corner of my place sparkles after their visit. Their attention to detail is remarkable.It is the little things that make a big difference, and they truly understand that.I highly recommend their services to anyone in need of a thorough and meticulous cleaning"},
        {images: '', name: 'Ian', stars: 5, body: "I am beyond impressed with the service provided by 5-S! ⭐⭐⭐⭐⭐Every corner of my place sparkles after their visit. Their attention to detail is remarkable.It is the little things that make a big difference, and they truly understand that.I highly recommend their services to anyone in need of a thorough and meticulous cleaning"},
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

    return (
        <div>
            	<section id="main">
                    <header className="major">
                        <h2>Reviews</h2>
                    </header>
                    <nav aria-label="Page navigation example">
                            <ul className="pagination justify-content-center">
                                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                    <button className="page-link button" onClick={handlePrevious}>Previous</button>
                                </li>
                                <li className={`page-item ${currentPage === Math.ceil(allReviews.length / reviewsPerPage) ? 'disabled' : ''}`}>
                                    <button className='page-link button' onClick={handleNext}>Next</button>
                                </li>
                            </ul>
                            
                    </nav>
					<div className="container">
                        <div className="row">
                            {displayedReviews.map((review, index) => (
                                <div key={index} className="col-4 col-6-medium col-12-small">
                                <section className="box">
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
                    <ul className="pagination justify-content-center">
                        <li>
                            <button className=" button" onClick={handlePopUpOpen}>Leave Review</button>
                        </li>
                    </ul>

                    {showPopUp && (
                        <AddReviewForm onClose={handlePopUpClose}/>
                    )}
				</section>
        </div>
    )
}









