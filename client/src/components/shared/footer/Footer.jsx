const Footer = () => {
	return (
		<footer className="bg-[#edf6ff] py-12 px-10 tracking-wide mt-20">
			<div className="grid max-sm:grid-cols-1 max-lg:grid-cols-2 lg:grid-cols-4 gap-8">
				<div>
					<h4 className="text-lg font-bold mb-6 text-gray-800">About Us</h4>
					<p className="text-gray-500 mb-2 text-sm">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
						gravida, mi eu pulvinar cursus, sem elit interdum mauris.
					</p>
				</div>

				<div>
					<h4 className="text-lg font-bold mb-6 text-gray-800">Services</h4>
					<ul className="space-y-4">
						<li>
							<a
								href="javascript:void(0)"
								className="text-gray-500 hover:text-gray-800 text-[15px]"
							>
								Web Development
							</a>
						</li>
						<li>
							<a
								href="javascript:void(0)"
								className="text-gray-500 hover:text-gray-800 text-[15px]"
							>
								Mobile App Development
							</a>
						</li>
						<li>
							<a
								href="javascript:void(0)"
								className="text-gray-500 hover:text-gray-800 text-[15px]"
							>
								UI/UX Design
							</a>
						</li>
						<li>
							<a
								href="javascript:void(0)"
								className="text-gray-500 hover:text-gray-800 text-[15px]"
							>
								Digital Marketing
							</a>
						</li>
					</ul>
				</div>

				<div>
					<h4 className="text-lg font-bold mb-6 text-gray-800">Resources</h4>
					<ul className="space-y-4">
						<li>
							<a
								href="javascript:void(0)"
								className="text-gray-500 hover:text-gray-800 text-[15px]"
							>
								Webinars
							</a>
						</li>
						<li>
							<a
								href="javascript:void(0)"
								className="text-gray-500 hover:text-gray-800 text-[15px]"
							>
								Ebooks
							</a>
						</li>
						<li>
							<a
								href="javascript:void(0)"
								className="text-gray-500 hover:text-gray-800 text-[15px]"
							>
								Templates
							</a>
						</li>
						<li>
							<a
								href="javascript:void(0)"
								className="text-gray-500 hover:text-gray-800 text-[15px]"
							>
								Tutorials
							</a>
						</li>
					</ul>
				</div>

				<div>
					<h4 className="text-lg font-bold mb-6 text-gray-800">About Us</h4>
					<ul className="space-y-4">
						<li>
							<a
								href="javascript:void(0)"
								className="text-gray-500 hover:text-gray-800 text-[15px]"
							>
								Our Story
							</a>
						</li>
						<li>
							<a
								href="javascript:void(0)"
								className="text-gray-500 hover:text-gray-800 text-[15px]"
							>
								Mission and Values
							</a>
						</li>
						<li>
							<a
								href="javascript:void(0)"
								className="text-gray-500 hover:text-gray-800 text-[15px]"
							>
								Team
							</a>
						</li>
						<li>
							<a
								href="javascript:void(0)"
								className="text-gray-500 hover:text-gray-800 text-[15px]"
							>
								Testimonials
							</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
