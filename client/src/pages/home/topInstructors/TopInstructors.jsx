import SectionTitle from "../../../components/shared/sectionTitle/SectionTitle";

const TopInstructors = () => {
	return (
		<div>
			<div className="mt-10">
				{/* title section  */}
				<SectionTitle
					categoryName="Top Instructors"
					categoryLink="/top-instructors"
				/>

				{/* contain section  */}
				<section className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-6 mt-8 px-4 md:px-6 lg:px-2">
					{/* instructor 1 */}

					<div className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] overflow-hidden mx-auto">
						<div className="">
							<img
								src="https://readymadeui.com/Imagination.webp"
								className=""
							/>
						</div>

						<div className="px-6 py-4">
							<div className="text-center">
								<h2>Ronald Richards</h2>
								<p>UI/UX Designer</p>
							</div>
							<hr className="my-2" />
							<div className="flex justify-between text-right items-center">
								{/* rating div  */}
								<div className="flex items-center gap-2">
									<svg
										className="w-6 fill-[#facc15]"
										viewBox="0 0 14 13"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
									</svg>
									<span className="font-bold">4.9</span>
								</div>
								{/* student */}
								<p>1200+ students</p>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default TopInstructors;
