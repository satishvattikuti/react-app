import React, { Component } from 'react';
import '../../node_modules/react-grid-layout/css/styles.css'
import '../../node_modules/react-resizable/css/styles.css'
import GridLayout from 'react-grid-layout';
import ChartContainer from './chart1';
import ChartContainer2 from './chart2'

class MyFirstGrid extends Component {
  render() {
    // layout is an array of objects, see the demo for more complete usage
    var layout = [
      {i: 'c', x: 0, y: 0, w: 15, h: 11, minW:10, maxW:10, minH:10, maxH:11},
      {i: 'a', x: 0, y: 0, w: 5, h: 11 ,minW:5, minH:10, maxH:7, maxW:6},
      {i: 'b', x: 5, y: 6, w: 5, h: 11, minW:5, minH:10, maxW:5, maxH:10},
      {i: 'd', x: 10, y: 10, w:5, h: 11, minW:5, minH:10},
    ];
    return (
      <GridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
        <div key="c"><ChartContainer /></div>
        <div key="b"><ChartContainer /></div>
        <div key="a"><ChartContainer2 /></div>
        <div key="d"><ChartContainer2 /></div>
      </GridLayout>
    )
  }
}

export default MyFirstGrid;



// class MyFirstGrid extends Component {
//   render() {
//     var styles={border:'2px solid'}
//     // layout is an array of objects, see the demo for more complete usage
//     return (
//       <GridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
//         <div style={styles}key="a">a</div>
//         <div style={styles} key="b">b</div>
//         <div  style={styles} key="c">c</div>
//       </GridLayout>
//     )
//   }
// }

// export default MyFirstGrid;
  // var layout = [
  //   {i: 'a', x: 0, y: 0, w: 1, h: 2, static: true},
  //   {i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
  //   {i: 'c', x: 4, y: 0, w: 1, h: 2}
  // ];