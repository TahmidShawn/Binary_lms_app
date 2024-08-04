import bannerImage from "../../../assets/banner-img.png";
import bannerBg from "../../../assets/banner-frame-1.png";
import BannerFrameTopLeft from "./BannerFrameTopLeft";
import BannerFrameBottomLeft from "./BannerFrameBottomLeft";
import BannerFrameTopRight from "./BannerFrameTopRight";

const Banner = () => {
	return (
		<div className="mt-14">
			<div className="flex justify-between items-center flex-col lg:flex-row-reverse">
				{/* main img */}
				<div
					className="relative bg-contain bg-bottom bg-no-repeat mr-[6px] lg:mr-12"
					style={{ backgroundImage: `url(${bannerBg})` }}
				>
					<img src={bannerImage} className="ml-5" />

					{/* img top left part  */}

					<BannerFrameTopLeft />

					{/* img bottom left part */}
					<BannerFrameBottomLeft />

					{/* img top right part */}
					<BannerFrameTopRight />
				</div>

				{/* left side info section */}
				<div className="w-ful lg:w-auto mx-auto lg:mx-0 px-2 lg:px-0 text-center lg:text-left mt-6 lg:mt-0">
					<h1 className="text-4xl font-bold">
						Unlock Your Potential <br /> with Binary
					</h1>
					<p className="py-6 max-w-xl text-justify">
						Welcome to Binary, where learning knows no bounds. We believe that
						education is the key to personal and professional growth, and we are
						here to guide you on your journey to success.
					</p>

					<button className="primaryButton">Start your instructor journey</button>
				</div>
			</div>
		</div>
	);
};

export default Banner;
