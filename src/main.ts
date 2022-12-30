import './style.css'
import { showTrack } from './track';


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
	<div scroll="no" class='content'>
			<div scroll="no" class='main'>
				<h1 id='about-link' class='nav-title'>ABOUT</h1>  
				<h1 class='nav-title right-text'>CONTACT</h1>  
				<h1 class='nav-title'>PROJECTS</h1>  
		<div id="track"></div>
			</div>
	</div>
`

const aboutLink = document.getElementById("about-link")!;

aboutLink.addEventListener('click', () => {
	showTrack();
})

