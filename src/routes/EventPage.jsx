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
      <section className="mb-[120px]">
        <section
          className="flex w-[90%] px-10 mx-auto bg-black gap-10 text-white justify-center items-center py-5"
          // style={{
          //   backgroundImage: selectedEvent
          //     ? `url(${selectedEvent.eventFlyer})`
          //     : "",
          // }}
        >
          <div>
            <h1 className="text-[30px] font-bold my-5">
              {selectedEvent.eventHeader}
            </h1>
            <span>By This and That</span>
            <p className="mt-10">{selectedEvent.eventDesc}</p>
            <p className="my-5">{selectedEvent.eventLocation}</p>
          </div>
          <div className="mx-auto bg-white py-10 px-3 rounded-md text-black">
            <h1 className="font-bold text-[20px]">Date and Time </h1>
            <p className="my-5">
              <span className="mx-2"> {selectedEvent.eventMonth}</span>{" "}
              <span className="mx-2">{selectedEvent.eventDate}</span>
              <span className="mx-2">{selectedEvent.eventTime}</span>
            </p>
            <p className="text-center my-5"> add to calender</p>
            <button>Book New Event</button>
          </div>
        </section>
        <section className="w-[90%]  mx-auto my-10 gap-10  grid grid-cols-2">
          <div className="">
            <h1 className="font-bold  text-[20px] mb-5">Descripiton</h1>
            <p>{selectedEvent.eventDesc}</p>
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
          <div className="">
            <h1 className="font-bold  text-[20px] mb-5"> Event Location</h1>
            <p className="font-bold my-3">{selectedEvent.eventLocation}</p>
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
              <span className="font-bold"> {selectedEvent.eventTime}</span>
            </p>
          </div>
          <div>
            <h1 className="font-bold  text-[20px] mb-5"> Tags</h1>
            {selectedEvent.eventTags.map((tag, index) => (
              <button
                className="bg-gray-300 mr-5 px-5 py-3 rounded-lg"
                key={index}
              >
                {tag}
              </button>
            ))}
          </div>
          <div>
            <h1 className="font-bold  text-[20px] my-b">
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
