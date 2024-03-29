import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Layout from "../components/Layout";
import Events from "../components/Events";
import { useParams } from "react-router-dom";
const EventPage = () => {
  const [selectedEvent, setSelectedEvent] = useState();
  const eventData = useSelector((state) => state.filter.eventData);

  const { id } = useParams();
  useEffect(() => {
    if (id && eventData) {
      const event = eventData.find((event) => event.eventId == id);
      setSelectedEvent(event);
    }
  }, [id, eventData]);
  console.log(selectedEvent);
  return (
    <Layout>
      <section className="md:mb-[100px]">
        <section
          className="md:flex w-[90%] px-10 mx-auto md:gap-10 text-white justify-center items-center py-5"
          style={{
            backgroundImage: `url(${selectedEvent?.eventFlyer})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: "400px", // Set your desired height
          }}
        >
          <div>
            <h1 className="md:text-[30px] text-[18px] font-bold my-5">
              {selectedEvent?.eventHeader}
            </h1>
            <span>By This and That</span>
            <p className="mt-10">{selectedEvent?.eventDesc}</p>
            <p className="my-5">{selectedEvent?.eventLocation}</p>
          </div>
          <div className="mx-auto hidden md:block bg-white md:py-20 px-3 rounded-md text-black">
            <h1 className="font-bold text-[20px]">Date and Time </h1>
            <p className="my-5">
              <span className="mx-2"> {selectedEvent?.eventMonth}</span>{" "}
              <span className="mx-2">{selectedEvent?.eventDate}</span>
              <span className="mx-2">{selectedEvent?.eventTime}</span>
            </p>
            <p className="text-center my-5 text-[var(--color-purple)] text-[20px]">
              {" "}
              add to calender
            </p>
            <button className="text-white bg-[var(--color-purple)] mx-20  py-3 px-10 rounded-md">
              Book New Event
            </button>
          </div>
        </section>
        <div className="mx-auto md:hiddden my-10 bg-white py-10 w-[90%] px-3 rounded-md text-black">
          <h1 className="font-bold text-[20px]">Date and Time </h1>
          <p className="my-5">
            <span className="mx-2"> {selectedEvent?.eventMonth}</span>{" "}
            <span className="mx-2">{selectedEvent?.eventDate}</span>
            <span className="mx-2">{selectedEvent?.eventTime}</span>
          </p>
          <p className="text-center my-5 text-[var(--color-purple)] text-[20px]">
            {" "}
            add to calender
          </p>
          <button className="text-white bg-[var(--color-purple)] mx-10  py-3 px-10 rounded-md">
            Book New Event
          </button>
        </div>
        <section className="w-[90%]  mx-auto my-20 gap-10  md:grid grid-cols-2">
          <div className="">
            <h1 className="font-bold  text-[20px] mb-5">Descripiton</h1>
            <p>{selectedEvent?.eventDesc}</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
              tenetur, magni autem atque ipsam eaque iusto? Nemo, dolorem! Quo
              dolores nam quasi expedita dolorum ipsum laudantium facere,
              eveniet omnis magnam?
              <br /> <br /> Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Dolore omnis est animi maiores, quod dolorum perferendis
              quam atque tempore porro, consequuntur quia mollitia debitis
              quisquam, tempora suscipit ex ullam! Exercitationem.
            </p>
          </div>
          <div className="md:my-0 my-5">
            <h1 className="font-bold  text-[20px] mb-5"> Event Location</h1>
            <p className="font-bold my-3">{selectedEvent?.eventLocation}</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
              numquam? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae, ducimus.
            </p>
          </div>
          <div>
            <h1 className="font-bold  text-[20px] mb-5">Hours</h1>
            <p>
              Hours:{" "}
              <span className="font-bold"> {selectedEvent?.eventTime}</span>
            </p>
          </div>
          <div>
            <h1 className="font-bold  text-[20px] mb-5 my-5 md:my-0"> Tags</h1>
            {selectedEvent?.eventTags.map((tag, index) => (
              <button
                className="bg-gray-300 mr-5 px-5 py-3 my-1 rounded-lg"
                key={index}
              >
                {tag}
              </button>
            ))}
          </div>
          <div>
            <h1 className="font-bold  text-[20px] my-3">
              How can i contact the organizer
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate molestiae sed et dolorem cumque! Placeat, cupiditate?
            </p>
          </div>
        </section>
      </section>
      <Events pageTitle={"Other Events You May Like"} />
    </Layout>
  );
};

export default EventPage;
