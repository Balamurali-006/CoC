import React from 'react';
import InfiniteMenu from './InfiniteMenu.js';

// Import images from assets

import IMG0 from './assets/img0.jpg';
import IMG1 from './assets/img1.jpg';
import IMG2 from './assets/img2.JPG';
import IMG3 from './assets/img3.JPG';
import IMG4 from './assets/img4.JPG';
import IMG5 from './assets/img5.JPG';
import IMG6 from './assets/img6.jpg';
import IMG7 from './assets/img7.JPG';
import IMG8 from './assets/img8.JPG';
import IMG9 from './assets/img9.JPG';
import IMG10 from './assets/img10.jpg';
import IMG11 from './assets/img11.jpg';
import IMG12 from './assets/img12.JPG';
import IMG13 from './assets/img13.jpg';
import IMG14 from './assets/img14.jpg';
import IMG15 from './assets/img15.jpg';
import IMG16 from './assets/img16.jpg';
import IMG17 from './assets/img17.JPG';  
import IMG18 from './assets/img18.jpg';
import IMG19 from './assets/img19.jpg'; 
import IMG20 from './assets/img20.JPG';
import IMG21 from './assets/img21.jpg';
import IMG22 from './assets/img22.jpg';
import IMG23 from './assets/img23.jpg';
import IMG24 from './assets/img24.jpg';
import IMG25 from './assets/img25.jpg';
import IMG26 from './assets/img26.JPG';
import IMG27 from './assets/img27.jpg';


const Galary_Globes = [
  {
    image: IMG1,
    description: 'Drag and Move to explore more'
  },
  {
    image: IMG2,
    description: 'Drag and Move to explore more'
  },
  {
    image: IMG3,
    description: 'Drag and Move to explore more'
  },
  {
    image: IMG4,
    description: 'Drag and Move to explore more'
  },
  {
    image: IMG5,
    description: 'Drag and Move to explore more'
  },
  {
    image: IMG6,
    description: 'Drag and Move to explore more'
  },
  {
    image: IMG7,
    description: 'Drag and Move to explore more'
  },
  {
    image: IMG8,
    description: 'Drag and Move to explore more'
  },
  {
    image: IMG9,
    description: 'Drag and Move to explore more'
  },
  {
    image: IMG10,
    description: 'Drag and Move to explore more'
  },
  {
    image: IMG11,
    description: 'Drag and Move to explore more'
  },
  {
    image: IMG12,
    description: 'Drag and Move to explore more'
  },
  {
    image: IMG13,
    description: 'Drag and Move to explore more'
  },
  {
    image: IMG14,
    description: 'Drag and Move to explore more'
  },
  {
    image: IMG15,
    description: 'Drag and Move to explore more'
  },
  {
    image: IMG16,
    description: 'Drag and Move to explore more'
  },
  {
    image: IMG0,
    description: 'Drag and Move to explore more'
  },
  {
    image: IMG17,
    description: 'Drag and Move to explore more'
  },
  {
    image: IMG18,
    description: 'Drag and Move to explore more'
  },
  {
    image: IMG19,
    description: 'Drag and Move to explore more'
  },
  {
    image: IMG20,
    description: 'Drag and Move to explore more'
  },
  {
    image: IMG21,
    description: 'Drag and Move to explore more'
  },
  {
    image: IMG22,
    description: 'Drag and Move to explore more'
  },
  {
    image: IMG23,
    description: 'Drag and Move to explore more'
  },
  {
    image: IMG24,
    description: 'Drag and Move to explore more'
  },
  {
    image: IMG25,
    description: 'Drag and Move to explore more'
  },
  {
    image: IMG26,
    description: 'Drag and Move to explore more'
  },
  {
    image: IMG27,
    description: 'Drag and Move to explore more'
  },
];

const Galary = () => {
  return (
    <div style={{ height: '600px', position: 'relative',marginTop:'10%',marginBottom:'10%', marginRight:'10%',marginLeft:'10%' }}>
        <h2 style={{ 
        
        textAlign: 'center', 
        marginBottom: '20px', 
        fontSize: '2rem', 
        fontWeight: 'bold', 
        color: '#ff4da6' 
      }}>
        📸 Event Gallery
      </h2>
      <InfiniteMenu items={Galary_Globes} />
    </div>
  );
};

export default Galary;
