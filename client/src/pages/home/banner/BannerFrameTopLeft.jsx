const BannerFrameTopLeft = () => {
  return (
    <section className="hidden md:inline-block md:absolute top-20 -left-1 md:-left-20 bg-white border-[1px] shadow-md border-slate-200 w-max p-3 rounded-lg">
      <div className=" flex -space-x-3 justify-center">
        <div className="tooltip hover:z-40" data-tip="name1">
          <img
            className="h-10 w-10 rounded-full hover:ring-2 hover:ring-slate-400 inline-block"
            src="https://readymadeui.com/team-1.webp"
            alt="avatar"
          />
        </div>
        <div className="tooltip hover:z-40" data-tip="name2">
          <img
            className="h-10 w-10 rounded-full hover:ring-2 hover:ring-slate-400 inline-block"
            src="https://readymadeui.com/team-2.webp"
            alt="avatar"
          />
        </div>
        <div className="tooltip hover:z-40" data-tip="name3">
          <img
            className="h-10 w-10 rounded-full hover:ring-2 hover:ring-slate-400 inline-block"
            src="https://readymadeui.com/team-3.webp"
            alt="avatar"
          />
        </div>
        <div className="tooltip hover:z-40" data-tip="name4">
          <img
            className="h-10 w-10 rounded-full hover:ring-2 hover:ring-slate-400 inline-block"
            src="https://readymadeui.com/team-4.webp"
            alt="avatar"
          />
        </div>
      </div>
      <p className="text-sm leading-4 mt-2">
        Join our community <br /> of 1200+ Students
      </p>
    </section>
  );
};

export default BannerFrameTopLeft;
