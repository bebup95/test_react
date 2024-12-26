import videoHomepage from "../../assets/video-homepage.mp4";
const HomePage = () => {
  return (
    <div className="homepage-container">
      <video autoPlay loop muted>
        <source src={videoHomepage} type="video/mp4" />
      </video>
      <section class="title-container">
        <h1 class="title line-clamp">
          Get to know your customers with forms worth filling out
        </h1>
        <p class="desc line-clamp">
          Collect all the data you need to understand customers with forms
          designed to be refreshingly different.
        </p>
        <div class="link">
          <a href="#!" class="btn">
            Get's started-it's free
          </a>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
