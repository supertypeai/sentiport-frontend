import Link from "next/link";

const Testimonial = () => {
  return (
    <div className="my-12">
      <div className="mb-12 text-center font-bold">
        <h1 className="text-2xl sm:text-4xl mb-6">
          What They <span className="text-gradient">Said</span> About Us
        </h1>
      </div>

      <div className="carousel w-full">
        <div id="testimonial-1" className="carousel-item relative w-full">
          <div className="grid sm:grid-cols-2 gap-12 mt-6">
            <div className="place-self-center self-center w-1/2">
              <img
                className="mask mask-squircle"
                src="https://www.adweek.com/wp-content/uploads/2022/03/Yair-Yaskerovitch-400-2022.jpg"
              />
            </div>
            <div className="place-self-center sm:place-self-start self-center text-center sm:text-justify w-5/6 text-base sm:text-lg">
              <div className="rating">
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star bg-orange-400"
                  checked
                />
              </div>
              <article className="prose font-normal text-gray-300 my-6">
                The programmatic report generator [Summary] that Supertype
                created was very helpful in helping us engage with our mobile
                app clients, and in opening conversations. Most of all, the
                charts it generate looks gorgeous and the topic identification
                model is spot on!
              </article>
              <p className="font-bold text-gradient">Yair Yaskerovitch</p>
              <p className="font-thin text-gray-400 text-base">
                VP Media, Zoomd Technologies (ZOMD.V, ZMDTF)
              </p>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2">
            <Link
              href="#testimonial-3"
              className="btn btn-circle bg-transparent"
            >
              ❮
            </Link>
            <Link
              href="#testimonial-2"
              className="btn btn-circle bg-transparent"
            >
              ❯
            </Link>
          </div>
        </div>
        <div id="testimonial-2" className="carousel-item relative w-full">
          <div className="grid sm:grid-cols-2 gap-12 mt-6">
            <div className="place-self-center self-center w-1/2">
              <img
                className="mask mask-squircle"
                src="https://www.adweek.com/wp-content/uploads/2022/03/Yair-Yaskerovitch-400-2022.jpg"
              />
            </div>
            <div className="place-self-center sm:place-self-start self-center text-center sm:text-justify w-5/6 text-base sm:text-lg">
              <div className="rating">
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star bg-orange-400"
                  checked
                />
              </div>
              <article className="prose font-normal text-gray-300 my-6">
                The programmatic report generator [Summary] that Supertype
                created was very helpful in helping us engage with our mobile
                app clients, and in opening conversations. Most of all, the
                charts it generate looks gorgeous and the topic identification
                model is spot on!
              </article>
              <p className="font-bold text-gradient">Yair Yaskerovitch</p>
              <p className="font-thin text-gray-400 text-base">
                VP Media, Zoomd Technologies (ZOMD.V, ZMDTF)
              </p>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2">
            <Link
              href="#testimonial-1"
              className="btn btn-circle bg-transparent"
            >
              ❮
            </Link>
            <Link
              href="#testimonial-3"
              className="btn btn-circle bg-transparent"
            >
              ❯
            </Link>
          </div>
        </div>
        <div id="testimonial-3" className="carousel-item relative w-full">
          <div className="grid sm:grid-cols-2 gap-12 mt-6">
            <div className="place-self-center self-center w-1/2">
              <img
                className="mask mask-squircle"
                src="https://www.adweek.com/wp-content/uploads/2022/03/Yair-Yaskerovitch-400-2022.jpg"
              />
            </div>
            <div className="place-self-center sm:place-self-start self-center text-center sm:text-justify w-5/6 text-base sm:text-lg">
              <div className="rating">
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star bg-orange-400"
                  checked
                />
              </div>
              <article className="prose font-normal text-gray-300 my-6">
                The programmatic report generator [Summary] that Supertype
                created was very helpful in helping us engage with our mobile
                app clients, and in opening conversations. Most of all, the
                charts it generate looks gorgeous and the topic identification
                model is spot on!
              </article>
              <p className="font-bold text-gradient">Yair Yaskerovitch</p>
              <p className="font-thin text-gray-400 text-base">
                VP Media, Zoomd Technologies (ZOMD.V, ZMDTF)
              </p>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2">
            <Link
              href="#testimonial-2"
              className="btn btn-circle bg-transparent"
            >
              ❮
            </Link>
            <Link
              href="#testimonial-1"
              className="btn btn-circle bg-transparent"
            >
              ❯
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Testimonial;
