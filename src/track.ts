
const about = `
	<div class='track-content'>
		<div class='header'>
			<h1 class='title'>ABOUT</h1>
			<button id='close' class='close-btn'>close</button>
		</div>
	</div>
`


export const showTrack = () => {
	const track = document.getElementById('track')!
	track.style.height = '95vh'

	track.innerHTML = about
	const close = document.getElementById('close')!;

	close.addEventListener('click', () => {
		track.style.height = '0';
	})
}
