import Image from "next/image";
const Offers = () => {
  const data = [
    {
      video: (
        <video
          src="/assets/easyOrder.mp4"
          autoPlay="autoplay"
          muted={true}
          loop="loop"
          playsInline=""
          width={"300px"}
          type="video/mp4"
        ></video>
      ),
      title: "Easy To Order",
      desc: `Good Food for Good Moments`,
    },
    {
      video: (
        <video
          src="/assets/fastDelivery.mp4"
          autoPlay="autoplay"
          muted={true}
          loop="loop"
          playsInline=""
          width={"300px"}
          type="video/mp4"
        ></video>
      ),
      title: "Fast Delivery",
      desc: "I’m the pizza protector. I will defend each slice to your door.",
    },
    {
      video: (
        <video
          src="/assets/secureDelivery.mp4"
          autoPlay="autoplay"
          muted={true}
          loop="loop"
          playsInline=""
          width={"300px"}
          type="video/mp4"
        ></video>
      ),
      title: "Secure Delivery",
      desc: "Safety comes in a can, I can, You can, We can be safe.",
    },
  ];
  return (
    <div className="flex flex-col justify-around items-center">
      <div className="flex flex-col items-center mb-[5rem] lg:mb-[10rem] mt-[5rem] lg:mt-8">
        <h3 className="text-red text-3xl font-bold m-1">What we serve</h3>
        <p className="text-5xl font-semibold text-grayT text-center">
          your favourite food <br />
          Delivery Partner
        </p>
      </div>
      <div className="flex flex-col md:flex-row flex-wrap content-center justify-around items-center w-full">
        {data.map((item, key) => {
          return (
            <div key = {key} className="shadow-xl w-[300px] h-[400px] my-3 rounded-2xl p-3 py-6 hover:scale-[1.09] flex flex-col justify-center items-center">
              <div>{item.video}</div>
              <h4 className="text-xl font-semibold text-red my-1">{item.title}</h4>
              <p className="text-lg text-center font-medium">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Offers;
