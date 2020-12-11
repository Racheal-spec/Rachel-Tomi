import React from 'react';
import './Home.scss';
import Button from '../Button/Button';


const Portfolio = () => {



    return(
<div className="panel portfolio-section">
<h6>PORTFOLIO</h6>
    {/*first project*/}
    <div className="project">
    <div className="project-text">
            <h3>Delfy<i className="fas fa-arrow-right"></i></h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dictum nulla at nisl luctus pretium.
                 Quisque ut blandit velit.
            </p>
            <Button>View Demo</Button>
            <Button buttonStyle="btn--secondary">Code</Button>
        </div>
        <div className="project-text">
            <h3>FashionFiesta<i className="fas fa-arrow-right"></i></h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dictum nulla at nisl luctus pretium.
                 Quisque ut blandit velit.
            </p>
            <Button>View Demo</Button>
            <Button buttonStyle="btn--secondary">Code</Button>
        </div>
    </div>
    {/*<HrLine color="#7c7a81" /> */}

     {/*second project*/}
    
     <div className="project">
     <div className="project-text">
            <h3>MyClinic<i className="fas fa-arrow-right"></i></h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dictum nulla at nisl luctus pretium.
                 Quisque ut blandit velit.
            </p>
            <Button>View Demo</Button>
            <Button buttonStyle="btn--secondary">Code</Button>
        </div>
        <div className="project-text">
            <h3>Best Interior<i className="fas fa-arrow-right"></i></h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dictum nulla at nisl luctus pretium.
                 Quisque ut blandit velit.
            </p>
            <Button>View Demo</Button>
            <Button buttonStyle="btn--secondary">Code</Button>
        </div>
    </div>

</div>
 
    )
}

export default Portfolio;