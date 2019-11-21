import React, {Component} from 'react';

class CBanner extends Component {
	render() {
	    const { logoUrl } = this.props;
	    return (

				<div className="container sliderimage slider justify-content-center flex-row p-4">
					<div className="row col-12">
				        <div className="col-12">
				          <img src={logoUrl} />
				        </div>
			        </div>
				</div>
	    );
	}
}

export default CBanner;



