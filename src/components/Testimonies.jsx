import { useEffect, useState } from 'react';
import Wrapper from '../assets/Testimonies';
import { FaQuoteRight, FaQuoteLeft } from 'react-icons/fa6';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const list = [
  {
    id: 1,
    image: '/person1.jpg',
    name: 'John',
    title: 'office manager',
    quote:
      'Trust Union Bank has completely changed the way I manage my finances. I can pay bills, transfer money, and track my spending all from my phone. It is fast, secure and convenient.',
  },
  {
    id: 2,
    image: '/person3.jpg',
    name: 'Sarah',
    title: 'regular guy',
    quote:
      'I love the convenience of Trust Union Bank. I can handle everything from my savings to investments with just a few clicks. Plus, customer support is always responsive if I need help.',
  },

  {
    id: 3,
    image: '/person2.png',
    name: 'Carlos',
    title: 'the boss',
    quote:
      'As someone who travels a lot, Trust Union Bank has made it so much easier to access my accounts from anywhere. I no longer need to worry about banking hours or finding an ATM.',
  },
];

const Testimonies = () => {
  const [people, setPeople] = useState(list);
  const [currentItem, setCurrentItem] = useState(0);

  const nextSlide = () => {
    setCurrentItem((oldItem) => {
      const newItem = (oldItem + 1) % people.length;
      return newItem;
    });
  };

  const prevSlide = () => {
    setCurrentItem((oldItem) => {
      const newItem = (oldItem - 1 + people.length) % people.length;
      return newItem;
    });
  };

  useEffect(() => {
    let slider = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      clearInterval(slider);
    };
  }, [currentItem]);

  return (
    <Wrapper>
      <div className="title">
        <h3 className='text-center text-4xl md:text-5xl font-bold py-4'>Testimonies</h3>
      </div>
      <section className="slider-container">
        {people.map((person, personIndex) => {
          const { id, name, title, image, quote } = person;
          return (
            <article
              key={id}
              className="slide"
              style={{
                transform: `translateX(${100 * (personIndex - currentItem)}%)`,
                opacity: personIndex === currentItem ? 1 : 0,
                visibility: personIndex === currentItem ? 'visible' : 'hidden',
              }}
            >
              <img src={image} alt={name} className="person-img" />
              <h5 className="name">{name}</h5>
              {/* <p className="title">{title}</p> */}
              <p className="text">{quote}</p>
              {/* <FaQuoteRight className="icon" /> */}
            </article>
          );
        })}
        <button className="prev btn btn-active" onClick={prevSlide}>
          <FiChevronLeft />
        </button>
        <button className="next btn btn-active" onClick={nextSlide}>
          <FiChevronRight />
        </button>
      </section>
    </Wrapper>
  );
};
export default Testimonies;
