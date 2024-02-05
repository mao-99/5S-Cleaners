export default function ServiceCards(){
    return (
        <section className="container special">
            <header>
                <h2>Our Services</h2>
            </header>
                <div className="row">
                            <div className="col-6 col-12-narrower">

                                <section className="box special">
                                    <span className="image featured"><img src="/images/home-cleaning-cropped.jpg" alt="" /></span>
                                    <header>
                                        <h3>Home + Residential Cleaning</h3>
                                    </header>
                                    <p>Enjoy a clean and comfortable living space with our Home + Residential Cleaning services. We take care of every corner, ensuring a spotless and organized home. Relax and leave the cleaning to us!</p>
                                </section>

                            </div>
                            <div className="col-6 col-12-narrower">
                                <section className="box special">
                                    <span className="image featured"><img src="/images/office-cleaning4-resized.jpg" alt="" /></span>
                                    <header>
                                        <h3>Office + Industrial Cleaning</h3>
                                    </header>
                                    <p>Boost productivity and create a professional work environment with our Office and Industrial Cleaning services. We tailor our cleaning solutions to meet the unique needs of your office or industrial space. Experience a clean and welcoming workplace every day!</p>
                                </section>

                            </div>
                            <div className="col-6 col-12-narrower" id="eventCard">
                                <section className="box special">
                                    <span className="image featured"><img src="/images/event-cleaning2-resized.jpg" alt="" /></span>
                                    <header>
                                        <h3>Event + Social Cleaning</h3>
                                    </header>
                                    <p>Make your events memorable for the right reasons with our Event + Social Cleaning services. From pre-event preparation to post-event cleanup, we ensure a pristine venue. Let us handle the cleaning details, so you can focus on hosting a successful event!</p>
                                </section>

                            </div>
                    </div>
        </section>
    )
}