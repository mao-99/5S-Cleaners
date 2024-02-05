import Image from "next/image";
import Link from "next/link";
import VideoPlayer from "./videoPlayer";
export default function About(){
    return (
        <div>
            <section className="container special" id="aboutUsSection">
                <div className="box special" style={{backgroundColor: "#f5f5f5"}} id="aboutUsIntro" >
                    <h1><span className="image left"><img src="images/miniLogo.png" alt="" style={{width: '100px', height: '100px'}}/></span>We are a <span id="top">top</span> residential and commercial cleaning service in New York City</h1>
                    
                    <div className="serviceIcons">
                        <h2>
                            <span className="icon solid fa-check accent2" id="residentialCheck"> Residential</span>
                            <span className="icon solid fa-check accent2" id="commercialCheck"> Commercial</span>
                        </h2>
                    </div>
                    <div className="row">
						<div className="col-6 col-12-narrower">

							<div id="whyChoose" >
								<h1>Why Choose 5S?</h1>
                                
							</div>

						</div>
						<div className="col-6 col-12-narrower">

							<div>
                                    <ul className="alt" id="reasons">
                                        <li><strong>Experienced Professionals:</strong> Our team consists of highly experienced and trained cleaning professionals who deliver top-notch cleaning services.</li>
                                        <li><strong>Competitive Pricing:</strong> We offer competitive rates without compromising the quality of our cleaning services, ensuring great value for your money.</li>
                                        <li><strong>Satisfaction Guarantee:</strong> Your satisfaction is our priority. If you're not happy with our service, we'll make it right.</li>
                                    </ul>

							</div>

						</div>
					</div>

                    <div className="row">

                        <p>
                        Our cleaning teams are comprised of professionally trained staff that guarantee satisfaction. Our teams will provide all equipment and supplies to thoroughly clean your home. We offer one-time cleaning service, recurring cleaning service, move-in/move-out cleaning service, post-construction cleaning service, and more. We are available 7 days a week for your convenience. Call us today for a free estimate and let us show you what we mean when we say, “We’re raising the bar on clean.” 
                        </p>
                    </div>
                    <div className="row">
                        <div className="box alt" id="gallery">
                            <div className="row gtr-50 gtr-uniform row-6 row-12-mobilep">
                                <div className="col-3"><span className="image fit"><img src="images/about1.jpg" alt="" /></span></div>
                                <div className="col-6">
                                    <span className="image fit"><img src="images/about7.jpg" alt="" /></span>
                                </div>
                                <div className="col-3"><span className="image fit"><img src="images/about2.jpg" alt="" /></span></div>
                                <div className="col-3"><span className="image fit"><img src="images/about5.jpg" alt="" /></span></div>
                                <div className="col-3"><span className="image fit"><img src="images/about4.jpg" alt="" /></span></div>
                                <div className="col-3"><span className="image fit"><img src="images/about6.jpg" alt="" /></span></div>
                                <div className="col-3"><span className="image fit"><img src="images/about3.jpg" alt="" /></span></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12" style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    paddingBottom: '2rem',
    paddingTop: '2rem',
  }}><VideoPlayer/></div>
                    <div className="row">
                            <div className="col-6 col-12-narrower">

                                <div >
                                    <h1>Service Areas</h1>
                                </div>
                                
                                <div>
                                        <ul className="alt">
                                            <li><strong>Manhattan</strong></li>
                                            <li><strong>Brooklyn</strong></li>
                                            <li><strong>Bronx</strong></li>
                                            <li><strong>Queens</strong></li>
                                            <li><strong>Jersey City</strong></li>
                                            <li><strong>Long Island</strong></li>
                                        </ul>

                                </div>

                            </div>
                            <div className="col-6 col-12-narrower">
                                <h1>Contact Us Now to Get a Quote!<br/><br/>
                                    <span><span>&#9743;</span><a href="tel:347-759-4307"> 347-759-4307</a></span>
                                    <br/>
                                    <br/>
                                    <span><span>&#9993;</span><a href="mailto:infos@5scleaners.com"><span className="icon-mail-empty">&nbsp;</span> infos@5scleaners.com</a></span>
                                </h1>
                            </div>
                        </div>
                </div>
            </section>
        </div>
        )
}