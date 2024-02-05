import { useState } from "react";
import LocationInput from "./locationInput";
import Script from "next/script";

export default function BookingForm() {
    const [serviceName, setServiceName] = useState("");
  
    const handleServiceChange = (e) => {
      setServiceName(e.target.value);
    };
  
    const handleFormSubmit = async (e) => {
      e.preventDefault();
      console.log('Form submitted');
  
        // Ensure your form has an ID, for example, 'yourFormId'
        const formData = new FormData(document.getElementById('bookingForm'));
        const locationInput = document.getElementById('location');
        const locationValue = locationInput ? locationInput.value : '';
        formData.append('location', locationValue);
        //console.log("Form Data:", formData);

        try {
            const response = await fetch('./api/sendForm', {
            method: 'POST',
            body: formData,
            });

            if (response.ok) {
                console.log('Email sent successfully');
            } else {
                const errorMessage = await response.text(); // Extract error message if available
                console.error('Failed to send email:', errorMessage || 'Unknown error');
            }
        } catch (error) {
            console.error('Error sending email:', error);
        }

        
        };
        
    return(<div>
            <section className="container">
                <section className="box">
                    <h3 className="special">Booking Form</h3>
                    <form method="post" action="#" id="bookingForm">
                        <div className="row gtr-uniform gtr-50">
                            <div className="col-12">
                                <select name="category" id="category">
                                    <option value="defaultValue">- Select A Service -</option>
                                    <option value="1">Home + Residential Cleaning</option>
                                    <option value="2">Office + Industrial Cleaning</option>
                                    <option value="3">Event + Social Cleaning</option>
                                </select>
                            </div>
                            <div className="col-6 col-12-mobilep">
                                <input type="text" name="fName" id="fName" placeholder="First Name" required/>
                            </div>
                            <div className="col-6 col-12-mobilep">
                                <input type="text" name="lName" id="lName" placeholder="Last Name" required/>
                            </div>
                            <div className="col-6 col-12-narrower">
                                <input type="email" name="email" id="email" placeholder="Email Address" />
                            </div>
                            <div className="col-6 col-12-narrower">
                                <input type="text" name="phone" id="phone" placeholder="Phone Number" required/>
                            </div>
                            <div className="col-6 col-12-narrower">
                                <span>Appointment Date : </span>
                                <input type="date" name="date" id="date" placeholder="Date" />
                            </div>
                            <div className="col-12">
                                <LocationInput  />
                            </div>
                            <div className="col-6 col-12-narrower">
                                <span style={{ display: 'inline-block', width: '80px'}}>Dimensions: </span>
                                <input type="text" name="length" id="length" placeholder="Length"/>
                            </div>
                            <div className="col-6 col-12-narrower">
                                <span style={{ display: 'inline-block', width: '180px' }}></span>
                                <input type="text" name="width" id="width" placeholder="Width"/>
                            </div>
                            
                            <div className="col-6 col-12-narrower">
                                <span style={{ display: 'inline-block'}}>Number of Units : </span>
                                <input type="number" name="units" id="unitsCount" placeholder="# of Units"/>
                            </div>
                            <div className="col-12">
                                <textarea name="message" id="message" placeholder="Enter your message" rows="6"></textarea>
                            </div>
                            <div>
                                <span><em>
                                    Disclaimer: By submitting this form, you agree that we will contact you to discuss the details
                                    of your booking. During the call, our representative will provide you with an
                                    approximate cost of cleaning based on the information provided.
                                </em></span>
                            </div>
                            <div className="col-12">
                                <ul className="actions special">
                                    <li><input type="submit" value="Get Quote" id="getQuote" onClick={handleFormSubmit}/></li>
                                </ul>
                            </div>
                        </div>
                    </form>
                </section>
            </section>
        </div>
    )
}
