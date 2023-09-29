'use strict';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Toolbar } from './engine/Toolbar.js';
import { Portfolio } from './engine/Portfolio.js';

const filters = ["All", "Websites", "Flayers", "Business Cards"];
    const projects1 = [{
      img: "./img/mon.jpg",
      category: "Business Cards"
    }, {
      img: "./img/200.jpg",
      category: "Websites"
    }, {
      img: "./img/emi_haze.jpg",
      category: "Websites"
    }, {
      img: "./img/codystretch.jpg",
      category: "Websites"
    }, {
      img: "./img/Triangle_003.jpg",
      category: "Business Cards"
    }, {
      img: "./img/place200x290.png",
      category: "Websites"
    }, {
      img: "./img/200.jpg",
      category: "Websites"
    }, {
      img: "./img/transmission.jpg",
      category: "Business Cards"
    }, {
      img: "./img/place200x290_1.png",
      category: "Websites"
    }, {
      img: "./img/place200x290_2.png",
      category: "Flayers"
    }, {
      img: "./img/the_ninetys_brand.jpg",
      category: "Websites"
    }, {
      img: "./img/dia.jpg",
      category: "Business Cards"
    }, {
      img: "./img/Triangle_350x197.jpg",
      category: "Websites"
    }, {
      img: "./img/emi_haze.jpg",
      category: "Websites"
    }, {
      img: "./img/transmission.jpg",
      category: "Business Cards"
    }, {
      img: "./img/Triangle_350x197_1.jpg",
      category: "Websites"
    }, {
      img: "./img/place200x290_3.png",
      category: "Flayers"
    }];

    const projects = [{
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg",
  category: "Business Cards"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
  category: "Websites"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
  category: "Websites"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg",
  category: "Websites"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg",
  category: "Business Cards"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png",
  category: "Websites"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
  category: "Websites"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
  category: "Business Cards"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png",
  category: "Websites"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png",
  category: "Flayers"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg",
  category: "Websites"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg",
  category: "Business Cards"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg",
  category: "Websites"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
  category: "Websites"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
  category: "Business Cards"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg",
  category: "Websites"
}, {
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png",
  category: "Flayers"
}]
	
class App extends React.Component {
  constructor(props) {
    super(props);
    this.changeFilter = this.changeFilter.bind(this);
    this.state = {state: 'Flayers'};
  }
  
  changeFilter(filter) {    
    this.setState({
      state: filter
    });
    
  }
  
	filterProject() {
		if (this.state.state == 'All') {
			return this.props.projects;
		} else {
			return this.props.projects.filter((el) => {
				if (el.category == this.state.state) {
					return el;
				}
			});
		}
	}
  
  render() {    
    return (
      <div>
        <Toolbar
          filters={this.props.filters}
          selected={this.state.state}
          onSelectFilter={filter =>  this.setState({state: filter})} />
        <Portfolio projects={this.filterProject()} />
      </div>
    );
  }
}

export { App, filters, projects };
