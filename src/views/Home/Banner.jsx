import React, {Component} from 'react';
import CBanner from '../../component/Home/CBanner';

class Banner extends Component{

constructor(Props){
    super(Props);
    this.state = {
      alert:"A simple success alert-check it out",
    }
  }

	render(){
    
		return(
			<div className="col-12">
				
				<CBanner logoUrl={require('../../gambar/promo.png')} />
					
				<div className="container notive">
					<div className="row">
						<div className="col-md-12">
							<div className="alert alert-danger danger" role="alert">
								<p className="text-white text-center">{this.state.alert}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Banner;
