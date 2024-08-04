const BannerFrameTopRight = () => {
	const progressValue = 70;
	return (
		<div className=" absolute top-8 -right-12 bg-white border-[1px] shadow-md border-slate-200 p-4 w-1/2 md:w-max mx-auto rounded-lg ">
			<div className="text-[#93C5FD]">
				<p className="text-black font-bold text-center">{progressValue}%</p>
			</div>
			<p className="text-xs text-center font-bold mt-2">
				Completion rate of our <br className="hidden md:inline-block" /> courses
			</p>
		</div>
	);
};

export default BannerFrameTopRight;
