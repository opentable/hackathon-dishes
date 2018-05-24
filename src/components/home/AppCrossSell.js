import React, { Component } from 'react';
import { FlexContainer } from '../base/FlexContainer';
import { Container } from '../base/Container';
import App from '../../img/app.png';
import CrossSellBg from '../../img/WoodLines-Dark.png';
import dliOS from '../../img/dl-iOS.png';
import dlGoogle from '../../img/dl-Google.png';

export class AppCrossSell extends Component {
	render() {
		const message = "Your perfect dining experience in just a few taps";
		return (
			<div className="AppCrossSell" style={{background:"url("+CrossSellBg+")"}}>
				<FlexContainer>
					<div className="AppCrossSell__image">
						<img src={App} />
					</div>
					<div className="AppCrossSell__content">
						<div className="AppCrossSell__message">{ message }</div>
						<div>
							<img className="appDl__image" src={dliOS} />
							<img className="appDl__image" src={dlGoogle} />
						</div>
					</div>
				</FlexContainer>
			</div>
		);
	}
}

