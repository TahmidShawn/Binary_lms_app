import { GrCertificate } from "react-icons/gr";
const BannerFrameBottomLeft = () => {
  return (
    <div className="absolute bottom-8 -left-8 md:-left-16 bg-white border-[1px] shadow-md border-slate-200 w-max p-2 md:p-4 rounded-lg">
      <div className="flex justify-center items-center gap-2 md:gap-4">
        <GrCertificate className="text-3xl"/>
        <div>
          <p className="text-sm">
            Number of courses <br /> sold - <span className="text-base md:text-xl font-bold">1000+</span>
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default BannerFrameBottomLeft;
