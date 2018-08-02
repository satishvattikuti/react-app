import React from 'react';
import { Component } from 'react';
import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';
import SvgIcon from 'react-icons-kit';
import Tabi from './tabs';
import { home } from 'react-icons-kit/icomoon/home';
import { ic_business_center } from 'react-icons-kit/md/ic_business_center';
import { gears } from 'react-icons-kit/fa/gears';
import { lock } from 'react-icons-kit/fa/lock';
import { alignBottom } from 'react-icons-kit/iconic/alignBottom';


const LINKS = {
    'Projects List': 'https://satishvattikuti.github.io/',
    'System Messages': 'https://satishvattikuti.github.io/Portfolio/',
    'My Queries': 'https://intense-hamlet-21016.herokuapp.com/',
    'Purchasing Order': 'https://guarded-temple-16542.herokuapp.com/',
    'Budget Input':'https://intense-hamlet-21016.herokuapp.com/',
    'Budget Analysis':'https://intense-hamlet-21016.herokuapp.com/'
}

// const SideNav = withRR4();

class MySideNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabs: [{
                tab: "DashBoard",
                content: " "
            }],
        };
    }
    handleClick = (id, parent) => {
        if (parent === null) return;
        let wordtorep = parent + '/';
        let tab = id.replace(wordtorep, '');
        let flag = true;
        this.state.tabs.forEach((eachTab) => {
            if (eachTab.tab === tab) return flag = false;
        })
        if (flag) {
            const newArr = this.state.tabs.concat({ tab: tab, content: LINKS[tab] })
            this.setState({
                tabs: newArr
            })
        }
        // console.log(this.state.tabs);
        return;
    };
    DeleteHandler = (value) => {
        console.log(value)
        const myArray = this.state.tabs.filter(function (obj) {
            return obj.tab !== value;
        });
        this.setState({
            tabs: myArray
        })
    }
    clicked = () => {
        console.log('dds');
    }
    render() {
        return (
            <div className="container">
                <div className="navbar" style={{ border: '2px solid black', background: '#39435c', color: '#b8c7ce', height: '100%', width: 250 }}>
                    <SideNav highlightColor='white' highlightBgColor='black' defaultSelected='' onItemSelection={(id, parent) => { this.handleClick(id, parent) }}>
                        <Nav id='Home'>
                            <NavIcon><SvgIcon size={20} icon={home} /></NavIcon>
                            <NavText> Home </NavText>
                            <Nav id="Projects List">
                                <NavText >  Projects List  </NavText>
                            </Nav>
                            <Nav id="System Messages">
                                <NavText> System Messages </NavText>
                            </Nav>
                            <Nav id="My Queries">
                                <NavText> My Queries </NavText>
                            </Nav>
                        </Nav>
                        <Nav id="Purchasing">
                            <NavIcon><SvgIcon size={20} icon={ic_business_center} /></NavIcon>
                            <NavText> Purchasing  </NavText>
                            <Nav id="Purchasing Order">
                                <NavText> Purchasing Order </NavText>
                            </Nav>
                            <Nav id="Budget Input">
                                <NavText> Budget Input </NavText>
                            </Nav>
                            <Nav id="Budget Analysis">
                                <NavText> Budget Analysis </NavText>
                            </Nav>
                            <Nav id="Pe Expiditing Report">
                                <NavText> PE Expiditing Report </NavText>
                            </Nav>
                            <Nav id="Suppliers">
                                <NavText> Suppliers </NavText>
                            </Nav>
                            <Nav id="Bid Packs">
                                <NavText> Bid Packs </NavText>
                            </Nav>
                            <Nav id="Bid Pack Response">
                                <NavText> Bid Pack Response </NavText>
                            </Nav>
                        </Nav>
                        <Nav id='Onsite'>
                            <NavIcon ><SvgIcon size={20} icon={alignBottom} /></NavIcon>
                            <NavText> Onsite </NavText>
                            <Nav id="Budget Analysis">
                                <NavText> Budget Analysis </NavText>
                            </Nav>
                            <Nav id="Pe Expiditing Report">
                                <NavText> PE Expiditing Report </NavText>
                            </Nav>
                            <Nav id="Suppliers">
                                <NavText> Suppliers </NavText>
                            </Nav>
                        </Nav>
                        <Nav id='Engineering'>
                            <NavIcon><SvgIcon size={20} icon={gears} /></NavIcon>
                            <NavText> Engineering </NavText>
                            <Nav id="Budget Analysis">
                                <NavText> Budget Analysis </NavText>
                            </Nav>
                            <Nav id="Pe Expiditing Report">
                                <NavText> PE Expiditing Report </NavText>
                            </Nav>
                            <Nav id="Suppliers">
                                <NavText> Suppliers </NavText>
                            </Nav>
                        </Nav>
                        <Nav id='Administration'>
                            <NavIcon><SvgIcon size={20} icon={lock} /></NavIcon>
                            <NavText> Administration </NavText>
                            <Nav id="Purchasing Order">
                                <NavText> Purchasing </NavText>
                            </Nav>
                            <Nav id="Budget Input">
                                <NavText> Budget Input </NavText>
                            </Nav>
                            <Nav id="Budget Analysis">
                                <NavText> Budget Analysis </NavText>
                            </Nav>
                            <Nav id="Pe Expiditing Report">
                                <NavText> PE Expiditing Report </NavText>
                            </Nav>
                            <Nav id="Suppliers">
                                <NavText> Suppliers </NavText>
                            </Nav>
                            <Nav id="Bid Packs">
                                <NavText> Bid Packs </NavText>
                            </Nav>
                            <Nav id="Bid Pack Response">
                                <NavText> Bid Pack Response </NavText>
                            </Nav>
                        </Nav>
                        <Nav id='Security'>
                            <NavIcon><SvgIcon size={20} icon={ic_business_center} /></NavIcon>
                            <NavText> Security </NavText>\
                    <Nav id="User Maintainance">
                                <NavText> Suppliers </NavText>
                            </Nav>
                            <Nav id="Permissions">
                                <NavText> Permissions </NavText>
                            </Nav>
                            <Nav id="Roles">
                                <NavText> Roles </NavText>
                            </Nav>
                        </Nav>
                    </SideNav>
                </div>
                <div className="tab-class">
                    <Tabi delete={this.DeleteHandler} arr={this.state.tabs} />
                </div>
            </div>
        );
    }
}

export default MySideNav;