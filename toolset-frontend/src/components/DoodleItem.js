// import React, { Component } from 'react';
// // import { render } from 'react-dom';
// import { Stage, Layer, Rect, Text } from 'react-konva';
// import Konva from 'konva';


// // class Doodle extends React.Component {

// //     var width = window.innerWidth;
// //     var height = window.innerHeight - 25;

// //     // first we need Konva core things: stage and layer
// //     var stage = new Konva.Stage({
// //         container: 'container',
// //         width: width,
// //         height: height
// //     });

// //     var layer = new Konva.Layer();
// //     stage.add(layer);

// //     var isPaint = false;
// //     var mode = 'brush';
// //     var lastLine;

// //     stage.on('mousedown touchstart', function(e) {
// //         isPaint = true;
// //         var pos = stage.getPointerPosition();
// //         lastLine = new Konva.Line({
// //             stroke: '#df4b26',
// //             strokeWidth: 5,
// //             globalCompositeOperation:
// //             mode === 'brush' ? 'source-over' : 'destination-out',
// //             points: [pos.x, pos.y]
// //     });
// //         layer.add(lastLine);
// //     });

// //     stage.on('mouseup touchend', function() {
// //         isPaint = false;
// //     });

// //     // and core function - drawing
// //     stage.on('mousemove touchmove', function() {
// //     if (!isPaint) {
// //         return;
// //     }

// //     const pos = stage.getPointerPosition();
// //     var newPoints = lastLine.points().concat([pos.x, pos.y]);
// //         lastLine.points(newPoints);
// //         layer.batchDraw();
// //     });

// //     var select = document.getElementById('tool');
// //         select.addEventListener('change', function() {
// //         mode = select.value;
// //     });

// // }

// export default class DoodleItem extends Component {

//     render(){
//         return (
//             <Stage width={window.innerWidth} height={window.innerHeight}>
//               <Layer>
//                 <Text text="Try click on rect" />
//                 {/* <Doodle /> */}
//                 <ColoredRect />
//               </Layer>
//             </Stage>
//           );
//     }
// }


import { useEffect } from 'react';

const Doodle = url => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = 'https://unpkg.com/konva@4.0.0/konva.min.jsurl';
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, [url]);
};

export default Doodle;