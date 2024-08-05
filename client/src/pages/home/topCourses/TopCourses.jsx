import SectionTitle from "../../../components/shared/sectionTitle/SectionTitle";
const TopCourses = () => {
	return (
		<div className="mt-10">
			{/* title section  */}
			<SectionTitle categoryName="Top Courses" categoryLink="/courses" />

			{/* contain section  */}
			<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-8 lg:gap-6 mt-8 px-10 md:px-8 lg:px-2">
				{/* card 1 */}
				<div className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] overflow-hidden mx-auto">
					<div className="">
						<img src="https://readymadeui.com/Imagination.webp" className="" />
					</div>

					<div className="px-6 py-4">
						<h2 className="">Beginners Guide to Design</h2>
						<p>By Ronald Richards</p>
						<p className="text-xs">22 Total Hours. 155 Lectures. Beginner</p>
						<p>$149.9</p>
					</div>
				</div>

				{/* card 2 */}
				<div className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] overflow-hidden mx-auto">
					<div className="">
						<img src="https://readymadeui.com/Imagination.webp" className="" />
					</div>

					<div className="px-6 py-4 ">
						<h2 className="">Beginners Guide to Design</h2>
						<p>By Ronald Richards</p>
						<p className="text-xs">22 Total Hours. 155 Lectures. Beginner</p>
						<p>$149.9</p>
					</div>
				</div>
				{/* card 3 */}
				<div className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] overflow-hidden mx-auto">
					<div className="">
						<img src="https://readymadeui.com/Imagination.webp" className="" />
					</div>

					<div className="px-6 py-4">
						<h2 className="">Beginners Guide to Design</h2>
						<p>By Ronald Richards</p>
						<p className="text-xs">22 Total Hours. 155 Lectures. Beginner</p>
						<p>$149.9</p>
					</div>
				</div>

				{/* card 4 */}
				<div className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] overflow-hidden mx-auto">
					<div className="">
						<img src="https://readymadeui.com/Imagination.webp" className="" />
					</div>

					<div className="px-6 py-4">
						<h2 className="">Beginners Guide to Design</h2>
						<p>By Ronald Richards</p>
						<p className="text-xs">22 Total Hours. 155 Lectures. Beginner</p>
						<p>$149.9</p>
					</div>
				</div>
			</section>
		</div>
	);
};

export default TopCourses;
