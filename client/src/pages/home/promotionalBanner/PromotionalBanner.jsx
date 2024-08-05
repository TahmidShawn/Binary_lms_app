import banner1 from "./../../../assets/promotional-banner.png";
import banner2 from "./../../../assets/promotional-banner-2.png";


const PromotionalBanner = () => {
	return (
		<div>
			{/* Instructor banner */}
			<div className="">
				<div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 lg:gap-32 max-w-5xl mx-auto">
					<div className="">
						<img
							src={banner1}
							className="w-3/4 md:w-11/12 h-full object-contain mx-auto"
						/>
					</div>
					<div className="max-md:text-center">
						<h3 className="text-3xl md:leading-10 font-bold">
							Become an Instructor
						</h3>
						<p className="mt-4 text-sm px-6 md:px-0">
							Instructors from around the world teach millions of students on
							Binary. We provide the tools and skills to teach what you love.
						</p>
						<button className="primaryButton mt-8">
							Start your instructor journey
						</button>
					</div>
				</div>
			</div>
			{/* Student banner */}
			<div className="mt-12 lg:mt-20">
				<div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 lg:gap-32 max-w-5xl mx-auto">
					<div className="max-md:text-center order-2 md:order-1 ml-0 md:ml-5 lg:ml-0">
						<h3 className="text-3xl md:leading-10 font-bold">
							Become an Instructor
						</h3>
						<p className="mt-4 text-sm px-6 md:px-0">
							Instructors from around the world teach millions of students on
							Binary. We provide the tools and skills to teach what you love.
						</p>
						<button className="primaryButton mt-8">
							Start your instructor journey
						</button>
					</div>
					<div className="order-1 md:order-2">
						<img
							src={banner2}
							className="w-3/4 md:w-full h-full object-contain mx-auto"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PromotionalBanner;
