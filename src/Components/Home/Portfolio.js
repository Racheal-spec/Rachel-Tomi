import React from 'react';
import './Home.scss';
import Button from '../Button/Button';


const Portfolio = () => {


/*    
const HrLine = ({color}) =>(
    <hr 
        style= {
            {
                color: color,
                backgroundColor: color,
                height: .5,
                margin: 30,
                width: 800,
                marginLeft: "auto",
                marginRight: "auto",
            }
        }
    />
)
*/
    return(
<div className="portfolio-section">
    <h2>Portfolio</h2>
    <h6>FEATURED PROJECTS</h6>

    {/*first project*/}

    <div className="project">
    <div className="project-text">
            <h3>Delfy</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dictum nulla at nisl luctus pretium.
                 Quisque ut blandit velit.
            </p>
            <Button>View Demo</Button>
            <Button buttonStyle="btn--secondary">Code</Button>
        </div>
        <div className="project-text">
            <h3>FashionFiesta</h3>
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
            <h3>MyClinic</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dictum nulla at nisl luctus pretium.
                 Quisque ut blandit velit.
            </p>
            <Button>View Demo</Button>
            <Button buttonStyle="btn--secondary">Code</Button>
        </div>
        <div className="project-text">
            <h3>Best Interior</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dictum nulla at nisl luctus pretium.
                 Quisque ut blandit velit.
            </p>
            <Button>View Demo</Button>
            <Button buttonStyle="btn--secondary">Code</Button>
        </div>
    </div>
    {/*<HrLine color="#7c7a81" /> */}

     {/*third project*/}
    
     <div className="project">
     <div className="project-text">
            <h3>Rachel Tomi</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dictum nulla at nisl luctus pretium.
                 Quisque ut blandit velit.
            </p>
            <Button>View Demo</Button>
            <Button buttonStyle="btn--secondary">Code</Button>
        </div>
    </div>
    {/*<HrLine color="#7c7a81" /> */}

</div>
 
    )
}

export default Portfolio;