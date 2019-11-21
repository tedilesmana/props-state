import React, {Component} from 'react';

class Slider extends Component{

constructor(Props){
    super(Props);
    this.state = {
      	p1:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum ab quaerat magnam sequi inventore quam quo. Assumenda quibusdam eum consectetur atque quaerat fuga, consequuntur culpa distinctio. Odit veniam ea, quis.",

      	p2:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum ab quaerat magnam sequi inventore quam quo. Assumenda quibusdam eum consectetur atque quaerat fuga, consequuntur culpa distinctio. Odit veniam ea, quis.",

      	p3:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum ab quaerat magnam sequi inventore quam quo. Assumenda quibusdam eum consectetur atque quaerat fuga, consequuntur culpa distinctio. Odit veniam ea, quis.",

      	p4:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum ab quaerat magnam sequi inventore quam quo. Assumenda quibusdam eum consectetur atque quaerat fuga, consequuntur culpa distinctio. Odit veniam ea, quis."
    }
  }

	render(){
		return(
			<div className="container slide">
				<div className="row">
					<div className="col-md-8">

					<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
						<div className="carousel-inner">
						    <div className="carousel-item active">
						      <img src={require('../../gambar/02.jpg')} alt="" className="img-fluid d-block w-100 slider-img"/>
						    </div>
						    <div className="carousel-item">
						      <img src={require('../../gambar/promo.png')} alt="" className="img-fluid d-block w-100 slider-img"/>
						    </div>
						    <div className="carousel-item">
						      <img src={require('../../gambar/04.jpg')} alt="" className="img-fluid d-block w-100 slider-img"/>
						    </div>
						  </div>
						  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev" 
			                    onClick={e => {
			                      e.preventDefault();
			                    }}>
						    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
						    <span className="sr-only">Previous</span>
						  </a>
						  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next"
			                    onClick={e => {
			                      e.preventDefault();
			                    }}>
						    <span className="carousel-control-next-icon" aria-hidden="true"></span>
						    <span className="sr-only">Next</span>
						  </a>
						</div>
					</div>


					<div className="col-md-4">
						<img src={require('../../gambar/s01.png')} alt="Responsive image" className="img-fluid rounded slide w-100"/>
						<img src={require('../../gambar/promo.png')} alt="Responsive image" className="img-fluid rounded slide"/>
					</div>
				</div>

				<div className="col-12">
					<div className="row">
						<div className="col-3 p-4">
							{this.state.p1}
						</div>
						<div className="col-3 p-4">
							{this.state.p2}
						</div>
						<div className="col-3 p-4">
							{this.state.p3}
						</div>
						<div className="col-3 p-4">
							{this.state.p4}
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Slider;