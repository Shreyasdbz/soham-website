/** @format */

import React, { useState, useCallback } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
import Gallery from "react-photo-gallery";

import psuVex from "../assets/gear.png";
import parklandVex from "../assets/gear.png";

import pic1 from "../assets/roboticsPhotos/event1.jpeg";
import pic2 from "../assets/roboticsPhotos/event2.jpeg";
import pic3 from "../assets/roboticsPhotos/event3.jpeg";
import pic4 from "../assets/roboticsPhotos/event4.jpeg";

const photoSet_1 = [
  {
    src: pic1,
    width: 4,
    height: 3,
  },
  {
    src: pic2,
    width: 3,
    height: 2,
  },
];
const photoSet_2 = [
  {
    src: pic3,
    width: 3,
    height: 2,
  },
  {
    src: pic4,
    width: 3,
    height: 2,
  },
];

const Robotics = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
  return (
    <div className="section Robotics">
      <div className="section-title">
        <div className="robotics-title-text">Robotics</div>
      </div>
      <div className="card robo-card">
        <div className="robo-header">
          <div className="robo-left">
            <img src={psuVex} alt="psuVexLogo" className="robo-logo" />
          </div>
          <div className="robo-right">
            <div className="robo-title">PSU VEX Robotics</div>
            <div className="robo-caption">Founded 2020</div>
            <div className="robo-info">More Information..</div>
          </div>
        </div>
        <div className="robo-body">
          <div className="robo-body-text">
            Along with *NAME* I co-counded the PSU VEX Robotics Club. We will be
            competing in *TOURNAMENT*.
          </div>
          <Gallery photos={photoSet_1} onClick={openLightbox} />
          <div className="robo-body-text">
            Here are some photos and details of our robot
          </div>
          <Gallery photos={photoSet_2} onClick={openLightbox} />
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel
                  currentIndex={currentImage}
                  views={photoSet_1.map((x) => ({
                    ...x,
                    srcset: x.srcSet,
                    caption: x.title,
                  }))}
                />
              </Modal>
            ) : null}
          </ModalGateway>
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel
                  currentIndex={currentImage}
                  views={photoSet_2.map((x) => ({
                    ...x,
                    srcset: x.srcSet,
                    caption: x.title,
                  }))}
                />
              </Modal>
            ) : null}
          </ModalGateway>{" "}
        </div>
      </div>
      <div className="card robo-card">
        <div className="robo-header">
          <div className="robo-left">
            <img
              src={parklandVex}
              alt="parklandVexLogo"
              className="robo-logo"
            />
          </div>
          <div className="robo-right">
            <div className="robo-title">Parkland Engineering Club</div>
            <div className="robo-caption">2016 - 2020</div>
            <div className="robo-info">More Information..</div>
          </div>
        </div>
        <div className="robo-body">
          <div className="robo-body-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
            culpa placeat eum debitis ut quas officia. Quae labore rerum quia
            tempora harum odio praesentium expedita deserunt nam! Nesciunt,
            porro amet.
          </div>
          <Gallery photos={photoSet_1} onClick={openLightbox} />
          <div className="robo-body-text">
            Here are some photos and details of our robot
          </div>
          <Gallery photos={photoSet_2} onClick={openLightbox} />
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel
                  currentIndex={currentImage}
                  views={photoSet_1.map((x) => ({
                    ...x,
                    srcset: x.srcSet,
                    caption: x.title,
                  }))}
                />
              </Modal>
            ) : null}
          </ModalGateway>
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel
                  currentIndex={currentImage}
                  views={photoSet_2.map((x) => ({
                    ...x,
                    srcset: x.srcSet,
                    caption: x.title,
                  }))}
                />
              </Modal>
            ) : null}
          </ModalGateway>{" "}
        </div>
      </div>
      <div className="section-end">
        <div className="robo-end-text">
          I am always looking for new opportunities to advance my robotics
          knowledge and get involved with related events. If you have something
          for me, reach out using the contact information below!
        </div>
      </div>
    </div>
  );
};

export default Robotics;
