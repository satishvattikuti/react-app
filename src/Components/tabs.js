import React from 'react';
import { Component } from 'react';
import { TabStrip, TabStripTab}from '@progress/kendo-react-layout';
import './tabs.css';
import MyFirstGrid from './Grid';


class Tabi extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: 0,
            animation:true,
        }
    }
    handleSelect = (e) => {
        this.setState({ selected: e.selected });
    }

    onSelect = (e) =>  {
        console.log('Selected')
    }
    render() {
        return (
            <TabStrip  selected={this.state.selected} onSelect={this.handleSelect}>
            {this.props.arr.map((ele) => {
                if(ele.content === " ") {
                    return <TabStripTab  key={ele.tab }className="dark" title={ele.tab}> 
                    <div onClick={() => this.props.delete(ele.tab)}> Close </div>
                        <MyFirstGrid />
                    
               </TabStripTab>
                } else {
                    return  <TabStripTab key={ele.tab }className="dark" title={ele.tab}>
                    <div onClick={() => this.props.delete(ele.tab)}> Close </div>
                    <div>
                        <iframe src={ele.content} width="1175" height="1000"></iframe>
                    </div>
                </TabStripTab>
                }
            })}
            {/* <TabStripTab title="Tab 1 Title">
                <p>Tab 1 Content</p>
            </TabStripTab>
            <TabStripTab title="Tab 2 Title">
                <p>Tab 2 Content</p>
            </TabStripTab>
            <TabStripTab title="Tab 3 Title">
                <p>Tab 3 Content</p>
            </TabStripTab> */}
        </TabStrip>
        );
    }
}

export default Tabi;