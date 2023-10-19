import Slider from "@/app/_components/ad-slider/Slider";
import ProgressIndicator from "@/app/_components/ad-slider/ProgressIndicator";

const AdSlider = () => {

  return (
    <section
      aria-label={"latest news"}
      className={" border border-red-500 p-4"}
    >
      <ProgressIndicator />
      <Slider />
    </section>
  );
};

export default AdSlider;
