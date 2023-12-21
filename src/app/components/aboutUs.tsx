// AboutUs.js
import Image from 'next/image';

export default function AboutUs() {
  return (
    <div data-testid="about-us-container">
      <div className="flex justify-center items-center">
        <div className="mr-10 p-10">
          <h2 data-testid="about-us-heading">About Us</h2>
          <br></br>
          <div className="max-w-[450px]" data-testid="about-us-text-1">
            The top cooks in town have arrived! Don&apos;t pass up the chance to eat at a restaurant that will transport you to Italy, not just through the cuisine, but also via the atmosphere! We were able to introduce a secret family recipe to our restaurant so that the rest of the globe may taste authentic Italian cuisine!
          </div>
          <br></br>
          <div className="max-w-[450px]" data-testid="about-us-text-2">
            It all began in 1929, when chef Tony Lazzio got a trunk from his grandfather containing expensive treasures as well as secret Italian recipes passed down from generation to generation. Tony knew he had to try making the dishes himself, and to his surprise, it turned out to be the tastiest Italian meal he had ever had! Since then, he has dedicated his life to the preparation of Italian cuisine.
          </div>
          <br></br>
          <div className="max-w-[450px]" data-testid="about-us-text-3">
            In addition to regular eating, Rustic is an ideal location for a special event or private gathering. Rustic has years of expertise organizing hundreds of business and family events and will provide an unforgettable experience for you and your guests. To get additional information, please send us an email or phone us at 123 456-7891. We would be delighted to assist you in organizing an event, memorable dinner, or business lunch.
          </div>
        </div>

        <div>
          <Image src={'/images/Frame22 and 26.png'} alt="Chef" width={550} height={550} priority data-testid="chef-image" />
        </div>
      </div>
    </div>
  );
}
