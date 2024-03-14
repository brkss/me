

export interface IProject {
	id: string;
	name: string;
	date: string;
	images: any[],
	videos?: string[];
	text: string;
	platform: string;
}

export const projects : IProject[] = [
	{
		id: "effy",
		platform: "web",
		name: "Effy",
		date: "May, 2023",
		videos: ["effy/effy.mp4"],
		images: ['effy/1.jpeg', 'effy/4.jpeg', 'effy/5.jpeg', 'effy/6.jpeg', 'effy/7.jpeg', 'effy/8.jpeg', 'effy/9.jpeg', 'effy/10.jpeg', 'effy/11.jpeg', 'effy/12.jpeg'],
		text: `
			<p>
				
				<b>Web:</b> Next.js (latest), Three.js, GraphQL <br />
				<b>Backend:</b> Golang, Python, Postgres <br />
				<b>Tools:</b> Sketch, Iterm, Vim, Table+, Docker <br />
				<div style="margin-top:25px" />


				<b>Problem:</b> <br />
				Designing a home or workspace can be a complex and time-consuming process, often fraught with miscommunication between designers and clients. Traditional methods of conveying design ideas, such as blueprints or 2D renderings, can be challenging for clients to visualize and provide feedback on effectively. This lack of clarity can lead to misunderstandings, delays, and ultimately, dissatisfaction with the final result.

				
				<div style="margin-top:15px" />
				
				<b>Solution:</b> <br />
				Effy offers a comprehensive solution to streamline communication between housing designers and their clients. Through its intuitive interface and powerful features, Effy revolutionizes the design process, making it more collaborative, efficient, and engaging for all parties involved.
				<br />
				<b style="margin-top:15px;display:block;">Key Features:</b>
				
				<ul style="margin-left: 15px;margin-top: 15px;">
					<li style="margin-bottom:10px;">Seamless 3D Modeling: Effy allows users to upload or draw their floor plans effortlessly. The app automatically converts these plans into interactive 3D models, providing clients with a realistic visualization of their future space.</li>
					<li style="margin-bottom:10px;">Cross-Platform Accessibility: Users can access their 3D models anytime, anywhere, and from any device – whether it's a smartphone, tablet, or computer. This ensures maximum flexibility and convenience, allowing clients to explore and interact with their designs on their preferred platform.</li>
					<li style="margin-bottom:10px;">Customization Options: Effy empowers users to personalize their designs with ease. Clients can add furniture, experiment with different materials for floors and walls, adjust lighting, and more, all within the app's user-friendly interface.</li>
					<li style="margin-bottom:10px;">Collaborative Sharing: Effy facilitates collaboration by enabling users to share their projects with multiple stakeholders via secure links. This feature allows designers to gather feedback from clients, colleagues, and other relevant parties in real-time, fostering a more iterative and collaborative design process.</li>
					<li style="margin-bottom:10px;">Document Integration: Effy supports the integration of various media types, including images, videos, PDFs, and documents. Clients can easily attach reference materials, inspiration images, or project specifications directly to their 3D models, ensuring that everyone is on the same page throughout the design journey.</li>
					<li style="margin-bottom:10px;">Annotation and Note-taking: Effy enables users to annotate their 3D models with notes, comments, and annotations. Whether it's highlighting specific design elements, suggesting changes, or providing feedback, clients can communicate their ideas and preferences directly within the context of the design.</li>
				</ul>
				<div style="margin-top:30px" />
				Overall, Effy empowers housing designers and their clients to communicate more effectively, visualize design concepts more accurately, and collaborate more seamlessly throughout the entire design process. By bridging the gap between imagination and reality, Effy helps bring design visions to life with clarity, precision, and satisfaction.
				
				
				
				
			</p>
		`
	},
	{
		id: "geometa",
		name: "GeoMeta",
		platform: "web",
		date: "April, 2022",
		videos: ["geometa/geometa.mp4"],
		images: ['geometa/1.jpeg', 'geometa/2.jpeg', 'geometa/3.jpeg', 'geometa/4.jpeg', 'geometa/5.jpeg', 'geometa/6.jpeg', 'geometa/7.jpeg', 'geometa/8.jpeg', 'geometa/9.jpeg'],
		text: `
			<p>
				
				<b>App:</b> React, Three.js (typescript) , Graphql <br />
				<b>Backend:</b> Node.js (main), Golang (file management) <br />
				<b>Tools:</b> Docker, Sketch, Vim, GCP <br />
				<div style="margin-top:25px" />

				<b>Problem:</b><br />
				In various industries such as agriculture, urban planning, and industrial inspection, there exists a significant challenge in efficiently processing drone images to derive actionable insights. Traditional methods of analyzing drone imagery are time-consuming, require specialized knowledge, and lack comprehensive tools for data interpretation. Additionally, the lack of automation leads to delays in decision-making and limits the scalability of operations.
				
				<div style="margin-top:25px" />
				
				<b>Solution:</b><br /> 
				GeoMeta offers a comprehensive solution by transforming drone images into orthophotos, 3D models, and colored point clouds, providing users with valuable insights for decision-making. By integrating advanced algorithms and machine learning techniques, GeoMeta simplifies the calculation of areas, distances, and other relevant parameters, thereby streamlining processes and reducing manual effort.
				<b style="display:block;margin-top:10px">Key Features:</b>

				<ul style="margin-top:10px">
					<li style="margin-bottom:10px;">Orthophoto Generation: GeoMeta automatically generates high-resolution orthophotos from drone images, ensuring accurate representations of the surveyed area.</li>
					<li style="margin-bottom:10px;">3D Model Creation: The app constructs detailed 3D models from the captured imagery, enabling users to visualize landscapes and structures with precision.</li>
					<li style="margin-bottom:10px;">Colored Point Clouds: GeoMeta produces colored point clouds, facilitating the identification of features and anomalies within the surveyed area.</li>
					<li style="margin-bottom:10px;">Automated Reporting: GeoMeta generates comprehensive reports summarizing key findings and metrics derived from the drone imagery, saving time and ensuring consistency in documentation.</li>
					<li style="margin-bottom:10px;">Anomaly Detection in Agriculture: With advanced analytics capabilities, GeoMeta can detect anomalies in agricultural fields, such as crop stress, disease, or pest infestations, aiding in proactive decision-making for crop management.</li>
					<li style="margin-bottom:10px;">Cross-Domain Utility: GeoMeta caters to a wide range of industries, including agriculture, urban planning, and industrial inspection, offering versatile applications for diverse user needs.</li>
				</ul>

				<b style="display:block;margin-top:10px">Benefits:</b>
				<ul style="margin-top:10px">
					<li style="margin-bottom:10px;">Time and Cost Efficiency: GeoMeta automates the processing of drone imagery, reducing the time and resources required for analysis.</li>
					<li style="margin-bottom:10px;">Data-driven Decision Making: By providing accurate measurements and insights, GeoMeta empowers users to make informed decisions for various applications.</li>
					<li style="margin-bottom:10px;">Scalability: GeoMeta's scalable architecture enables seamless integration into existing workflows, facilitating the expansion of operations.</li>
					<li style="margin-bottom:10px;">Enhanced Productivity: The streamlined workflow and automated reporting of GeoMeta enhance productivity by minimizing manual tasks and maximizing the utilization of drone data.</li>
				</ul>
				
				<div style="margin-top:15px" />
				
				<b>Tools:</b> Sketch, Iterm, Vim <br />
				<b>App:</b> React Native / expo (typescript) <br />
				<b>Backend:</b> Nodejs (Typescript), Python, Go <br />
			</p>
		`
	},
	{
		id: "vanillefraise",
		name: "Vanille Fraise",
		platform: "app",
		images: [/*'vanillefraise/1.png', */'vanillefraise/2.png', 'vanillefraise/3.png', 'vanillefraise/4.png', 'vanillefraise/5.png', 'vanillefraise/6.png', 'vanillefraise/7.png', 'vanillefraise/8.png', 'vanillefraise/9.png', 'vanillefraise/10.png', 'vanillefraise/11.png', 'vanillefraise/12.png', 'vanillefraise/13.png', 'vanillefraise/14.png', 'vanillefraise/15.png'],
		videos: ["vanillefraise/video.mp4"],
		date: "December, 2021",
		text: `
			<p>

				<b>App:</b> React Native / expo (typescript) <br />
				<b>Backend:</b> Nodejs (Typescript), Python, Go <br />
				<b>Tools:</b> Sketch, Iterm, nvim and Xcode <br />
				

				<div style="margin-top:25px" />
				<b>Problem:</b><br /> In today's fast-paced world, maintaining a healthy diet amidst hectic schedules and tempting food options can be a daunting challenge. Many individuals struggle to adhere to strict dietary plans or find it overwhelming to keep track of their nutritional intake. Moreover, planning meals and organizing grocery lists can add to the complexity, leading to frustration and inconsistency in healthy eating habits. As a result, there is a pressing need for a solution that simplifies the process of maintaining a balanced diet, offers flexibility in food choices, and streamlines meal planning and grocery shopping. 
				
				<div style="margin-top:15px" />
				
				<b>Solution:</b><br /> Vanille Fraise addresses these challenges by offering a platform that suggests personalized, nutritious recipes based on individual dietary preferences. Users can explore a diverse range of recipes categorized by nutrition, cuisine type, and dietary restrictions. The app calculates precise nutritional information for each recipe, including vitamins, minerals, and other key nutrients.

				A key feature is its flexibility, allowing users to enjoy a variety of foods while maintaining a balanced diet. Whether vegan, gluten-free, or low-carb, the app offers customizable meal plans to suit users' needs. It streamlines meal planning and grocery shopping by organizing weekly schedules and generating automatic shopping lists based on selected recipes.
				
				Overall, Vanille Fraise revolutionizes healthy eating by making it convenient, flexible, and sustainable. It empowers users with personalized recommendations and organizational tools to inspire healthier lifestyles.
				
				
				
				
			</p>
		`
	},
	{
		id: "unwind",
		name: "Unwind",
		images: ['unwind/1.png', 'unwind/2.png', 'unwind/3.png', 'unwind/4.png', 'unwind/5.png', 'unwind/6.png', 'unwind/7.png', 'unwind/8.png', 'unwind/9.png'],
		videos: ["unwind/unwind.mp4"],
		date: "Feb, 2023",
		platform: "app",
		text: `
			<p>
				<b>App:</b> React Native / expo (typescript) <br />
				<b>Backend:</b> Go <br />
				<b>Tools:</b> Sketch, Iterm, Vim <br />

				<div style="margin-top:25px" />

				<b>Problem:</b><br /> College students often struggle with managing their mental health due to academic pressures, social dynamics, and other stressors. Despite the importance of mental health awareness, many students lack access to resources and support. Additionally, inconsistent engagement and fragmented services further compound the problem, leaving students feeling overwhelmed and isolated.

				<div style="margin-top:25px" />
				
				<b>Solution:</b><br /> 
				"Unwind" addresses these challenges by providing a comprehensive mobile app tailored to the needs of college students. The app offers various features to promote mental health awareness and well-being:

				<ul style="margin-top:10px">
					<li style="margin-bottom:10px;">Rapport-building surveys: "Unwind" starts by establishing rapport with users through surveys designed to understand their unique challenges and preferences. This personalized approach helps create a supportive environment for users to engage with the app.</li>
					<li style="margin-bottom:10px;">Mindfulness exercises: The app offers a variety of mindfulness exercises, including guided meditation, deep breathing techniques, and progressive muscle relaxation. These exercises help students reduce stress, improve focus, and enhance their overall well-being.</li>
					<li style="margin-bottom:10px;">Reflection prompts: "Unwind" prompts users to reflect on their thoughts, emotions, and experiences through journaling and guided reflection exercises. This encourages self-awareness and helps users gain insights into their mental health and behavior patterns.</li>
					<li style="margin-bottom:10px;">Mood tracking: Users can track their day-to-day mood using the app's mood tracking feature. By logging their emotions regularly, students can identify patterns and trends in their mental health and take proactive steps to address any concerns.</li>
					<li style="margin-bottom:10px;">Feedback mechanisms: "Unwind" incorporates feedback mechanisms to gather input from users and assess the effectiveness of its interventions. This allows the app to continuously improve and tailor its features to better meet the needs of college students.</li>
				</ul>
				<div style="margin-top:25px" />
				Overall, "Unwind" serves as a centralized platform that offers accessible resources and support for college students to prioritize their mental health and well-being. By empowering students to take proactive steps towards self-care and providing tools to support their journey, "Unwind" aims to promote a culture of mental health awareness and resilience on college campuses.
				
			</p>
		`
	},
	{
		id: "opium",
		name: "Opium",
		platform: "web",
		images: ['opium/1.jpeg', 'opium/2.jpeg', 'opium/3.jpeg', 'opium/4.jpeg', 'opium/5.jpeg', 'opium/6.jpeg', 'opium/7.jpeg', 'opium/8.jpeg', 'opium/9.jpeg', 'opium/10.jpeg', 'opium/11.jpeg', 'opium/12.jpeg', 'opium/13.jpeg', 'opium/14.jpeg'],
		videos: ["opium/opium.mp4"],
		date: "Novomber, 2020",
		text: `
			<p>
				
				<b>App:</b> React Native / expo (typescript) <br />
				<b>Backend:</b> Go <br />
				<b>Tools:</b> Sketch, Iterm, Vim <br />
				<div style="margin-top:25px" />

				<b>Problem:</b><br />
				Traditional food ordering and delivery platforms like Glovo and Uber Eats often impose hefty fees on restaurants, cutting into their profits. With these platforms taking up to 15% off each order, restaurants struggle to maintain profitability while providing delivery services to their customers. Additionally, many existing apps lack robust privacy features and do not offer full control to the restaurants over their ordering and delivery processes. This creates a barrier for restaurants seeking to maximize their profits while maintaining privacy and control over their operations.
				<br />
				<br />

				<b>Solution:</b><br /> 
				Introducing "Opium" – a revolutionary food ordering and delivery app designed to simplify the process for both restaurants and customers while ensuring restaurants retain 100% of their profits. Opium stands out from other platforms by prioritizing privacy, providing self-hosting capabilities, and offering an admin dashboard for restaurant owners to manage their orders efficiently.
				<br />
				<b style="display:block; margin: 15px 0">Key features of Opium include:</b>
				<ul style="margin-top:10px">
					<li style="margin-bottom:10px;">No Commission Fees: Unlike other apps, Opium does not deduct any commission fees from restaurant orders. This ensures that restaurants can maximize their profits without worrying about additional expenses.					</li>
					<li style="margin-bottom:10px;">Self-Hosting Option: Opium allows restaurants to self-host their profiles on the app, giving them full control over their branding, menus, and pricing. This feature empowers restaurants to maintain their identity and independence while utilizing the convenience of a food delivery app.					</li>
					<li style="margin-bottom:10px;">Privacy Prioritization: Opium prioritizes user privacy, ensuring that customer data is protected and not shared with third parties without consent. This commitment to privacy builds trust with both restaurants and customers, enhancing the overall user experience.					</li>
					<li style="margin-bottom:10px;">Admin Dashboard: Restaurant owners have access to a comprehensive admin dashboard within the app, enabling them to manage orders, track deliveries, and analyze performance metrics in real-time. This intuitive interface streamlines restaurant operations and enhances efficiency.					</li>
					<li style="margin-bottom:10px;">Dedicated Delivery App: Opium provides a dedicated delivery app for couriers, ensuring smooth and reliable delivery services. Couriers can efficiently manage their deliveries, navigate routes, and communicate with restaurants and customers, contributing to a seamless user experience.					</li>
				</ul>
				<br />
				With Opium, restaurants can focus on providing quality food and service, knowing that they have full control over their ordering and delivery processes while retaining their profits. Customers benefit from a convenient and privacy-focused platform that prioritizes their satisfaction. Opium revolutionizes the food delivery industry by offering a win-win solution for both restaurants and customers alike.
				<br />
				
			</p>
		`
	},
]
