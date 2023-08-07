import styles from './serviceCards.module.css';
export default function ServiceCards(){
    return (
    <div className={styles.container}>
        <div className="row">
            <div className="col-sm-6 text-center">
                <div className="card">
                    <div className="card-header">
                        Home + Industrial Cleaning
                    </div>
                    <div className="card-body">
                        <br />
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <ul classNameName="list-unstyled">
                            <li>Point 1</li>
                            <br />
                            <li>Point 2</li>
                            <br />
                            <li>Point 3</li>
                        </ul>
                        <a href="#" className="btn btn-primary">Book Now</a>
                    </div>
                    <div className="card-footer text-muted">
                        Price Range = $ - $$
                    </div>
                </div>
            </div>
            <div className="col-sm-6 text-center">
                <div className="card">
                    <div className="card-header">
                        Event + Social Cleaning 
                    </div>
                    <div className="card-body">
                        <br />
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <ul classNameName="list-unstyled">
                            <li>Point 1</li>
                            <br />
                            <li>Point 2</li>
                            <br />
                            <li>Point 3</li>
                        </ul>
                        <a href="#" className="btn btn-primary">Book Now</a>
                    </div>
                    <div className="card-footer text-muted">
                        Price Range = $ - $$
                    </div>
                </div>
            </div>
            
        </div>
    </div>
);
}