import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay } from "swiper/modules";

const Testimonials = () => {
	const testimonials = [
		{
			id: 1,
			name: "John Doe",
			company: "Founder of Rubik",
			message:
				"The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt.",
			image: "https://readymadeui.com/profile_2.webp",
		},
		{
			id: 2,
			name: "Mark Adair",
			company: "Founder of Alpha",
			message:
				"The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt.",
			image: "https://readymadeui.com/profile_3.webp",
		},
		{
			id: 3,
			name: "Simon Konecki",
			company: "Founder of Labar",
			message:
				"The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt.",
			image: "https://readymadeui.com/profile_4.webp",
		},
		{
			id: 3,
			name: "Simon Konecki",
			company: "Founder of Labar",
			message:
				"The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt.",
			image: "https://readymadeui.com/profile_4.webp",
		},
		{
			id: 3,
			name: "Simon Konecki",
			company: "Founder of Labar",
			message:
				"The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt.",
			image: "https://readymadeui.com/profile_4.webp",
		},
		{
			id: 3,
			name: "Simon Konecki",
			company: "Founder of Labar",
			message:
				"The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt.",
			image: "https://readymadeui.com/profile_4.webp",
		},
	];

	return (
		<div className="bg-[#edf6ff] my-12 pt-12 pb-6">
			<div className="max-w-screen-xl mx-auto md:mx-6 lg:mx-auto">
				<div>
					<h1 className="text-2xl mb-8 font-bold ml-10 md:mx-0">
						What Our Customer Say About Us
					</h1>
				</div>
				<Swiper
					spaceBetween={10}
					autoplay={{
						delay: 3000,
					}}
					breakpoints={{
						640: {
							slidesPerView: 1,
							spaceBetween: 10,
						},
						768: {
							slidesPerView: 2,
							spaceBetween: 20,
						},
						1024: {
							slidesPerView: 3,
							spaceBetween: 40,
						},
					}}
					modules={[Autoplay]}
					className="mySwiper"
				>
					{testimonials.map((testimonial) => (
						<SwiperSlide key={testimonial.id}>
							<div className="max-w-[400px] h-auto mb-14 sm:p-8 p-4 rounded-md mx-auto shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] bg-white relative">
								<div className="mb-3">
									<svg
										width="32"
										height="26"
										viewBox="0 0 32 26"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											opacity="0.3"
											fillRule="evenodd"
											clipRule="evenodd"
											d="M23.8222 0C20.4357 0 17.6851 2.65696 17.6851 5.9336C17.6851 9.20821 20.4357 11.8672 23.8222 11.8672C29.6404 11.8672 26.2689 22.171 18.931 23.2443C18.5848 23.2936 18.2688 23.4578 18.0403 23.7071C17.8117 23.9563 17.6857 24.2742 17.6851 24.6032C17.6851 25.4456 18.487 26.1119 19.3751 25.9843C32.7122 24.0847 37.4546 0.00202497 23.8222 0.00202497V0ZM6.13933 0C2.74847 0 0 2.65493 0 5.9336C0 9.20619 2.74847 11.8631 6.13933 11.8631C11.9553 11.8631 8.58385 22.171 1.24597 23.2443C0.900119 23.2936 0.58443 23.4575 0.355931 23.7063C0.127431 23.9551 0.00118682 24.2725 0 24.6011C0 25.4436 0.801907 26.1098 1.68788 25.9823C15.0293 24.0827 19.7717 0 6.13933 0Z"
											fill="#00B307"
										/>
									</svg>
								</div>
								<p className="text-sm text-[#333] leading-relaxed">
									The service was amazing. I never had to wait that long for my
									food. The staff was friendly and attentive, and the delivery
									was impressively prompt.
								</p>
								<div className="flex flex-wrap items-center justify-left mt-6">
									<img
										src="https://readymadeui.com/profile_4.webp"
										className="w-10 h-10 rounded-full"
									/>
									<div className="ml-3 text-left">
										<p className="text-sm font-semibold">Simon Konecki</p>
										<p className="text-xs text-gray-400">simon23@gmail.com</p>
									</div>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

export default Testimonials;
