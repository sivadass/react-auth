import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Image from './image';

class Slider extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			slides : this.props.children,
			currentSlide: 0
		}
		this.slideInterval = this.slideInterval.bind(this);
		this.nextSlide = this.nextSlide.bind(this);
	}
	componentDidMount(){
		this.slideInterval();
	}
	slideInterval(){
		setInterval(this.nextSlide, 5000);
	}
	nextSlide(){
		let nextSlideItem = (this.state.currentSlide + 1) % this.state.slides.length;
		this.setState({
			currentSlide: nextSlideItem
		})
	}
	render(){
		console.log();
		return(
			<div>
				<ReactCSSTransitionGroup
				transitionName="background"
				transitionAppear={true}
				transitionAppearTimeout={500}
				transitionEnterTimeout={1000}
				transitionLeaveTimeout={1000}
				component="ul"
				key={this.state.currentSlide}>
					{this.props.children[this.state.currentSlide]}
				</ReactCSSTransitionGroup>
			</div>
		)
	}
}

export default Slider;