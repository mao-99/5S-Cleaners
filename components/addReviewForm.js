import { useState } from "react";
export default function AddReviewForm({onClose, onAddReview}){

    const [newReview, setNewReview] = useState({ name: '', stars: 5, body: '' });

    const handleFormChange = (event) => {
        const { name, value } = event.target;
        setNewReview((prevReview) => ({
            ...prevReview,
            [name]: value,
            stars: name === 'stars' ? Number(value) : prevReview.stars,
            body: name === 'body' ? value : prevReview.body
        }));
    };
    
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        onAddReview(newReview);
        onClose();
    }

    return(
        <section>
            <div className="container">
                <form method="post" id="contactForm" name="contactForm" noValidate="noValidate" onSubmit={handleFormSubmit} onChange={handleFormChange}>
                    <div className="row gtr-50 gtr-uniform">
                        <div className="col-6 col-12-mobilep">
                            <input type="text" name="name" id="name" placeholder="Name" />
                        </div>
                        <div className="col-6 col-12-mobilep">
                            <div className="form-group">
                                <select className="form-select" aria-label="Default select example" name="stars">
                                    <option defaultValue={""}>Give us a star rating</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-12 input-group mb-3 form-group">
                            <input type="file" className="form-control" id="inputGroupFile01" multiple/>
                        </div>
                        <div className="col-12">
                            <textarea name="body" className="form-control" id="message" placeholder="Enter your message" rows="6"></textarea>
                        </div>
                        <div className="col-12">
                            <ul className="actions special">
                                <li><input type="submit" value="Add Review" /></li>
                            </ul>
                        </div>
                    </div>
                </form>
            </div>
		</section>
    )
}