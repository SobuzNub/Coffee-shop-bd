import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import img1 from '../../../home/coffee1.jpg'
import img2 from '../../../home/coffee2.jpg'
import img3 from '../../../home/coffe3.jpg'
import img4 from '../../../home/coffe4.png'

const Banner = () => {
    return (
        <Carousel>
                <div className="md:backdrop:h-[877px]">
                    <img src={img1} />
                    
                </div>
                <div>
                    <img src={img2} />
                    
                </div>
                <div>
                    <img src={img3} />
                    
                </div>
                <div>
                    <img src={img4} />
                    
                </div>
            </Carousel>
    );
};

export default Banner;