const app = new Moon({
	el: "#app",
	data: {
		x: -1,
		y: 0.5,
		z: -3
	},
	template: `<a-scene>
		<a-box position="{{x}} {{y}} {{z}}" rotation="0 45 0" color="#4CC3D9"></a-box>
	</a-scene>`
});
