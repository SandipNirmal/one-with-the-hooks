import React, {useState} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledSlide = styled.img`
	width: 100vw;
	height: 100vh;
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
`;

const SlideHeading = styled.div`
padding: 2em;
color: #ffffff;
background-color: rgba(0, 0, 0, 0.7);
position: absolute;
top: 20px;
`

const propTypes = {
	media: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
	isCurrent: PropTypes.bool.isRequired,
	id: PropTypes.number.isRequired
}

function Slide({media, title, content, isCurrent, id}) {
	return (isCurrent ? <>
					<StyledSlide alt={title} src={media} aria-labelledby={id} aria-describedby={`${id}-content}`}/>
						<SlideHeading>
							<h3 id={id}>{title}</h3>
							<p id={`${id}-content`}>{content}</p>
						</SlideHeading>
					</>: null)
}

Slide.propTypes = propTypes;

export default Slide;