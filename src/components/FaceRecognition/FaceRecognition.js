import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, boxes }) => {
  // console.log('FaceRecognition boxes', boxes);
  return (
    <div className='center ma'>
      <div className='absolute mt2'>
        <img id='inputimage' alt='' src={imageUrl} width='500px' heigh='auto' />
        {boxes.map((box, index) => {
          return <div className='bounding-box' key={'box-key-' + index} id={'box-id-' + index} style={{ top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }}></div>
        })}
      </div>
    </div>
  );
}

export default FaceRecognition;