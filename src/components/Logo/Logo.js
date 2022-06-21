import React from 'react';
import ReactDOM from 'react-dom';
import Tilt from 'react-parallax-tilt';
import brain from './brain.png'
import './Logo.css'



const Logo = () => {
	return (
		<div className='ma4 mt5'>
			<Tilt className='Tilt br2 shadow-2' options={{ max: 55 }} style={{ height: 150, width: 150 }} >
				<div className='Tilt-inner pa3'>
      				<div style={{height: '150px', width: '150px', backgroundColor: 'linear-gradient(89deg, #FF5EDF 0%, #04C8DE 100%)' }}>
        				<h1>
        					<img style={{paddingTop: '8px', paddingRight: '40px'}}alt='logo' src={brain}/>
        				</h1>
        			</div>	
      			</div>
    		</Tilt>
		</div>
	);
}

ReactDOM.render(<Logo />, document.getElementById('root'));


export default Logo;