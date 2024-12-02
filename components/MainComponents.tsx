import WhitePaper from "./WhitePaper";
import ToolbarWrapper from "./toolbar/ToolbarWrapper";

const MainComponents = () => {
  return (
    <section className="w-[80%] h-full flex justify-center items-center">
      <div className="w-[98%] h-[95%] flex flex-col justify-center items-center">
        <ToolbarWrapper />
        <div className="w-full h-[90%] bg-slate-50 flex-center rounded-b-xl">
          <div className="w-[70%] h-[90%] flex-center overflow-y-scroll">
            <WhitePaper />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainComponents;
