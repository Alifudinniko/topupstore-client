import ReachedItem from "../../molecules/ReachedItem";
import Line from "../../molecules/ReachedItem/line";

export default function Reached() {
  return (
    <section className="reached pt-50 pb-50">
      <div className="container-fluid">
        <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4">
          <ReachedItem title=" 290M+" desc=" Players Top Up" />
          <Line />
          <ReachedItem title="12.500" desc=" Games Available" />
          <Line />
          <ReachedItem title="99,9%" desc="Happy Players" />
          <Line />
          <ReachedItem title="4.7" desc="Rating Worldwide" />
        </div>
      </div>
    </section>
  );
}
