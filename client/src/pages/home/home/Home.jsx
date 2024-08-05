import Banner from "../banner/Banner";
import StatsBanner from "../statsBanner/StatsBanner";
import Testimonials from "../testimonials/Testimonials";
import TopCourses from "../topCourses/TopCourses";
import TopInstructors from "../topInstructors/TopInstructors";

const Home = () => {
	return (
		<div>
			<div className="max-w-screen-xl mx-auto">
				<Banner />
			</div>
			<StatsBanner />
			<div className="max-w-screen-xl mx-auto">
				<TopCourses />
				<TopInstructors />
			</div>
			<Testimonials />
		</div>
	);
};

export default Home;
