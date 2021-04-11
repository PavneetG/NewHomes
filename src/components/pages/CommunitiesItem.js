import React from 'react';
import { Link } from 'react-router-dom';

function CommunitiesItem(props) {
	return (
		<>
			<li className = 'communities__item'>
				<Link className = 'communities__item__link' to = {props.path}>
					<figure className = 'communities__item__pic-wrap'>
						<img
							className = 'communities__item__img'
							alt = ""
							src = {props.src}
						/>
						<div className = 'communities__item__info'>
							<h5 className = 'communities__item__text_title'>{props.community}</h5>
							<h5 className = 'communities__item__text_homes'>{props.homes}</h5>
						</div>
					</figure>
				</Link>

			</li>
		</>
	)
}

export default CommunitiesItem;