import React, {Component} from 'react';
import './style/style.css';
import Nav from './template/Nav';
import Slider from './views/Home/Slider';
import Banner from './views/Home/Banner';

class App extends Component {
	render() {
		return(
		    <div className="header">
				
				<div>
		    		<Nav />   
		    	</div> 
		        
		        <div className="container">
					<Banner />
					<Slider />
		        </div>

		    </div>
		)
	}
}

export default App;