import React from 'react';
import InfiniteMenu from './InfiniteMenu.js';

// Import images from assets
import img1 from './assets/img1.JPG';
import img2 from './assets/img2.JPG';
import img3 from './assets/img3.JPG';
import img4 from './assets/img4.JPG';
import img5 from './assets/img5.JPG';
import img6 from './assets/img6.JPG';
import img7 from './assets/img7.JPG';
import img8 from './assets/img8.JPG';
import img9 from './assets/img9.JPG';
import img10 from './assets/img10.jpg';
import img11 from './assets/img11.jpg';
import img12 from './assets/img12.jpg';
import img13 from './assets/img13.jpg';
import img14 from './assets/img14.jpg';
import img15 from './assets/img15.jpg';
import img16 from './assets/img16.jpg';
import img0 from './assets/img0.jpg';

const Galary_Globes = [
  {
    image: img1,
    description: 'Drag and Move to explore more'
  },
  {
    image: img2,
    description: 'Drag and Move to explore more'
  },
  {
    image: img3,
    description: 'Drag and Move to explore more'
  },
  {
    image: img4,
    description: 'Drag and Move to explore more'
  },
  {
    image: img5,
    description: 'Drag and Move to explore more'
  },
  {
    image: img6,
    description: 'Drag and Move to explore more'
  },
  {
    image: img7,
    description: 'Drag and Move to explore more'
  },
  {
    image: img8,
    description: 'Drag and Move to explore more'
  },
  {
    image: img9,
    description: 'Drag and Move to explore more'
  },
  {
    image: img10,
    description: 'Drag and Move to explore more'
  },
  {
    image: img11,
    description: 'Drag and Move to explore more'
  },
  {
    image: img12,
    description: 'Drag and Move to explore more'
  },
  {
    image: img13,
    description: 'Drag and Move to explore more'
  },
  {
    image: img14,
    description: 'Drag and Move to explore more'
  },
  {
    image: img15,
    description: 'Drag and Move to explore more'
  },
  {
    image: img16,
    description: 'Drag and Move to explore more'
  },
  {
    image: img0,
    description: 'Drag and Move to explore more'
  }
  
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
