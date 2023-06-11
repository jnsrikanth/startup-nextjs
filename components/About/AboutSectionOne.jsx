import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="ESG Driven Investment Strategy"
                paragraph="Altius PE Holdings is committed to investing in companies that prioritize environmental, social and governance (ESG) factors. Their innovative approach to private equity investing ensures that they are always at the forefront of industry trends."
                mb="44px"
              />
              <SectionTitle
                title="Our Mission Statement:"
                paragraph="At Altius PE Holdings our mission is to actively contribute to a sustainable and inclusive future by investing in companies that demonstrate strong environmental, social, and governance (ESG) practices. We strive to generate superior financial returns while aligning our investments with the principles of responsible investing. By leveraging our expertise, networks, and resources, we aim to unlock the potential of businesses and drive long-term value creation. Through our commitment to ESG-driven investment strategies, we aspire to make a meaningful impact on society, the environment, and the global economy."
                mb="44px"
              />
              </div>



  <div class="container mx-auto px-4 py-8">
  <h2 class="text-3xl font-bold mb-4">Our Commitments</h2>

  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <div class="rounded-lg shadow-lg p-6 flex items-center">
      <div class="mr-4">
        <svg class="w-6 h-6 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2 17h-4v-4H7v-2h3.25V8h2.5v5H15v2h-2v4z" />
        </svg>
      </div>
      <div>
        <h3 class="text-xl font-bold mb-2">Diversity, Equity, and Inclusion</h3>
        <p>
          We foster a diverse and inclusive environment, embracing the power of varied perspectives and experiences to drive innovation, foster collaboration, and achieve better outcomes for all.
        </p>
      </div>
    </div>

    <div class="rounded-lg shadow-lg p-6 flex items-center">
      <div class="mr-4">
        <svg class="w-6 h-6 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H8v-2h3V8h2v6h3v2h-3v4h-2v-4z" />
        </svg>
      </div>
      <div>
        <h3 class="text-xl font-bold mb-2">Environmental Sustainability</h3>
        <p>
          We are committed to promoting environmental sustainability in our operations and investments. Through responsible practices and strategic partnerships, we strive to create a greener future and contribute to a thriving planet.
        </p>
      </div>
    </div>

    <div class="rounded-lg shadow-lg p-6 flex items-center">
      <div class="mr-4">
        <svg class="w-6 h-6 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 11c.55 0 1 .45 1 1v8c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1v-8c0-.55.45-1 1-1h2V8c0-2.76 2.24-5 5-5s5 2.24 5 5v2h2zm-7 9c-2.76 0-5-2.24-5-5v-2h10v2c0 2.76-2.24 5-5 5zm0-11c-1.65 0-3 1.35-3 3v2h6v-2c0-1.65-1.35-3-3-3zm-1 3h-2v2H8v-2H6V9h2V7h2v2h2v2z" />
        </svg>
      </div>
      <div>
        <h3 class="text-xl font-bold mb-2">Innovation</h3>
        <p>
          We foster a culture of innovation, encouraging entrepreneurial thinking and creative exploration. By embracing new ideas and technologies, we stay at the forefront of industry trends, driving growth and delivering exceptional results.
        </p>
      </div>
    </div>
  </div>
</div>




            <div className="w-full px-4 lg:w-1/2">
              <div
                className="wow fadeInUp relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0"
                data-wow-delay=".2s"
              >
                <Image
                  src="/images/about/about-image.svg"
                  alt="about-image"
                  fill
                  className="mx-auto max-w-full lg:mr-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
