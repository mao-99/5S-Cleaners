export default function Contact(){
    return (
        <section id="main" className="container medium special">
                <header>
                    <h2>Contact Form</h2>
                </header>
            <div className="box special">
                <span className="image featured"><img src="/images/5s cleaners BLK 1.png" alt="" /></span>
                <form method="post" action="#">
                    <h2>Send Us A Message</h2>
                    <div className="row gtr-50 gtr-uniform">
                        <div className="col-6 col-12-mobilep">
                            <input type="text" name="name" id="name"  placeholder="Name" />
                        </div>
                        <div className="col-6 col-12-mobilep">
                            <input type="email" name="email" id="email"  placeholder="Email" />
                        </div>
                        <div className="col-12">
                            <input type="text" name="subject" id="subject"  placeholder="Subject" />
                        </div>
                        <div className="col-12">
                            <textarea name="message" id="message" placeholder="Enter your message" rows="6"></textarea>
                        </div>
                        <div className="col-12">
                            <ul className="actions special">
                                <li><input type="submit" value="Send Message" /></li>
                            </ul>
                        </div>
                    </div>
                </form>
            </div>
        </section>

    )
}