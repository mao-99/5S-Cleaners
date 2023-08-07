import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Form from "../components/form";
import ServiceCards from "../components/serviceCards";
export default function Services(){
    return(
        <div>    
            <Navbar>
            </Navbar>
            <ServiceCards></ServiceCards>
            <Form></Form>
            <Footer></Footer>
        </div>    
        
    )
}