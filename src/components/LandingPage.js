import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './LandingPage.css';

const bestSellers = [
    {
      id: 1,
      image:
        'https://media.istockphoto.com/id/1350560575/photo/pair-of-blue-running-sneakers-on-white-background-isolated.webp?b=1&s=170667a&w=0&k=20&c=liUSgX6SafJ7HWvefFqR9-pnf3KuH6v1lwQ6iEpePWc=',
      name: 'Premium Comfort Sneakers',
      description: 'Experience the ultimate comfort with our premium sneakers. Perfect for everyday use.',
    },
    {
      id: 2,
      image:
        'https://media.istockphoto.com/id/1350560575/photo/pair-of-blue-running-sneakers-on-white-background-isolated.webp?b=1&s=170667a&w=0&k=20&c=liUSgX6SafJ7HWvefFqR9-pnf3KuH6v1lwQ6iEpePWc=',
      name: 'Classic Canvas Shoes',
      description: 'Get a timeless and stylish look with our classic canvas shoes. Suitable for any occasion.',
    },
    {
      id: 3,
      image:
        'https://media.istockphoto.com/id/1350560575/photo/pair-of-blue-running-sneakers-on-white-background-isolated.webp?b=1&s=170667a&w=0&k=20&c=liUSgX6SafJ7HWvefFqR9-pnf3KuH6v1lwQ6iEpePWc=',
      name: 'Athletic Running Shoes',
      description: 'Achieve your fitness goals with our athletic running shoes. Designed for maximum performance.',
    },
    {
      id: 4,
      image:
        'https://media.istockphoto.com/id/1350560575/photo/pair-of-blue-running-sneakers-on-white-background-isolated.webp?b=1&s=170667a&w=0&k=20&c=liUSgX6SafJ7HWvefFqR9-pnf3KuH6v1lwQ6iEpePWc=',
      name: 'Casual Slip-Ons',
      description: 'Stay relaxed and comfortable with our casual slip-on shoes. Perfect for lounging.',
    },
    {
      id: 5,
      image:
        'https://media.istockphoto.com/id/1350560575/photo/pair-of-blue-running-sneakers-on-white-background-isolated.webp?b=1&s=170667a&w=0&k=20&c=liUSgX6SafJ7HWvefFqR9-pnf3KuH6v1lwQ6iEpePWc=',
      name: 'Hiking Boots',
      description: 'Conquer the great outdoors with our rugged hiking boots. Designed for adventure.',
    },
    {
      id: 6,
      image:
        'https://media.istockphoto.com/id/1350560575/photo/pair-of-blue-running-sneakers-on-white-background-isolated.webp?b=1&s=170667a&w=0&k=20&c=liUSgX6SafJ7HWvefFqR9-pnf3KuH6v1lwQ6iEpePWc=',
      name: 'Stylish High-Tops',
      description: 'Elevate your style with our trendy high-top sneakers. Ideal for a fashionable look.',
    },
    {
      id: 7,
      image:
        'https://media.istockphoto.com/id/1350560575/photo/pair-of-blue-running-sneakers-on-white-background-isolated.webp?b=1&s=170667a&w=0&k=20&c=liUSgX6SafJ7HWvefFqR9-pnf3KuH6v1lwQ6iEpePWc=',
      name: 'Durable Work Boots',
      description: 'Work in confidence with our durable work boots. Built to withstand tough conditions.',
    },
    {
      id: 8,
      image:
        'https://media.istockphoto.com/id/1350560575/photo/pair-of-blue-running-sneakers-on-white-background-isolated.webp?b=1&s=170667a&w=0&k=20&c=liUSgX6SafJ7HWvefFqR9-pnf3KuH6v1lwQ6iEpePWc=',
      name: 'Fashionable Loafers',
      description: 'Step out in style with our fashionable loafers. A must-have for any wardrobe.',
    },
    {
      id: 9,
      image:
        'https://media.istockphoto.com/id/1350560575/photo/pair-of-blue-running-sneakers-on-white-background-isolated.webp?b=1&s=170667a&w=0&k=20&c=liUSgX6SafJ7HWvefFqR9-pnf3KuH6v1lwQ6iEpePWc=',
      name: 'Sleek Formal Shoes',
      description: 'Look sharp with our sleek formal shoes. Perfect for formal occasions and work.',
    },
    {
      id: 10,
      image:
        'https://media.istockphoto.com/id/1350560575/photo/pair-of-blue-running-sneakers-on-white-background-isolated.webp?b=1&s=170667a&w=0&k=20&c=liUSgX6SafJ7HWvefFqR9-pnf3KuH6v1lwQ6iEpePWc=',
      name: 'Outdoor Sandals',
      description: 'Enjoy the outdoors in comfort with our versatile outdoor sandals. Great for adventures.',
    },
  ];
  

  const newArrivals = [
    {
      id: 11,
      image:
        'https://img.freepik.com/free-photo/sports-shoe-pair-design-illustration-generated-by-ai_188544-19642.jpg?size=626&ext=jpg&ga=GA1.2.172408686.1695051014&semt=sph',
      name: 'Performance Running Shoes',
      description: 'Boost your running performance with these high-quality running shoes. Ideal for athletes.',
    },
    {
      id: 12,
      image:
        'https://img.freepik.com/free-photo/sports-shoe-pair-design-illustration-generated-by-ai_188544-19642.jpg?size=626&ext=jpg&ga=GA1.2.172408686.1695051014&semt=sph',
      name: 'Casual Sneaker Collection',
      description: 'Upgrade your casual style with our versatile sneaker collection. Perfect for everyday wear.',
    },
    {
      id: 13,
      image:
        'https://img.freepik.com/free-photo/sports-shoe-pair-design-illustration-generated-by-ai_188544-19642.jpg?size=626&ext=jpg&ga=GA1.2.172408686.1695051014&semt=sph',
      name: 'Trail Hiking Boots',
      description: 'Conquer the trails with confidence in our rugged trail hiking boots. Designed for adventure seekers.',
    },
    {
      id: 14,
      image:
        'https://img.freepik.com/free-photo/sports-shoe-pair-design-illustration-generated-by-ai_188544-19642.jpg?size=626&ext=jpg&ga=GA1.2.172408686.1695051014&semt=sph',
      name: 'Classic Canvas Sneakers',
      description: 'Get a timeless and stylish look with our classic canvas sneakers. Suitable for any occasion.',
    },
    {
      id: 15,
      image:
        'https://img.freepik.com/free-photo/sports-shoe-pair-design-illustration-generated-by-ai_188544-19642.jpg?size=626&ext=jpg&ga=GA1.2.172408686.1695051014&semt=sph',
      name: 'Athletic Training Shoes',
      description: 'Maximize your training sessions with our athletic training shoes. Designed for gym enthusiasts.',
    },
    {
      id: 16,
      image:
        'https://img.freepik.com/free-photo/sports-shoe-pair-design-illustration-generated-by-ai_188544-19642.jpg?size=626&ext=jpg&ga=GA1.2.172408686.1695051014&semt=sph',
      name: 'Stylish High-Top Boots',
      description: 'Elevate your style with our trendy high-top boots. Perfect for a fashionable look.',
    },
    {
      id: 17,
      image:
        'https://img.freepik.com/free-photo/sports-shoe-pair-design-illustration-generated-by-ai_188544-19642.jpg?size=626&ext=jpg&ga=GA1.2.172408686.1695051014&semt=sph',
      name: 'Outdoor Adventure Sandals',
      description: 'Embark on outdoor adventures in comfort with our versatile adventure sandals. Ideal for explorers.',
    },
    {
      id: 18,
      image:
        'https://img.freepik.com/free-photo/sports-shoe-pair-design-illustration-generated-by-ai_188544-19642.jpg?size=626&ext=jpg&ga=GA1.2.172408686.1695051014&semt=sph',
      name: 'Trendy Slip-On Shoes',
      description: 'Stay relaxed and stylish with our trendy slip-on shoes. Perfect for lounging and casual outings.',
    },
    {
      id: 19,
      image:
        'https://img.freepik.com/free-photo/sports-shoe-pair-design-illustration-generated-by-ai_188544-19642.jpg?size=626&ext=jpg&ga=GA1.2.172408686.1695051014&semt=sph',
      name: 'Fashionable Loafers',
      description: 'Step out in style with our fashionable loafers. A must-have for any wardrobe.',
    },
    {
      id: 20,
      image:
        'https://img.freepik.com/free-photo/sports-shoe-pair-design-illustration-generated-by-ai_188544-19642.jpg?size=626&ext=jpg&ga=GA1.2.172408686.1695051014&semt=sph',
      name: 'Sleek Formal Footwear',
      description: 'Look sharp and sophisticated with our sleek formal footwear. Perfect for formal occasions and work.',
    },
  ];
  

const testimonials = [
    {
      id: 21,
      text:
        'I can’t express how satisfied I am with the quality and service provided by this company. The product exceeded my expectations, and the customer support was exceptional. I would highly recommend this to anyone.',
      name: 'John Doe',
    },
    {
      id: 22,
      text:
        'I have been a customer for years, and I am always impressed with the quality of their products. The exceptional quality is matched by the exceptional service they provide. I wouldn’t shop anywhere else.',
      name: 'Jane Smith',
    },
    {
      id: 23,
      text:
        'This company is fantastic! Their products are top-notch, and the customer support is second to none. I can’t recommend them enough. If you’re looking for quality and value, this is the place to go.',
      name: 'Alice Johnson',
    },
    {
      id: 24,
      text:
        'The product I purchased was absolutely wonderful. The whole experience was great, from browsing their website to delivery. Their products are of great value and quality. I’ll be a customer for life.',
      name: 'Bob Wilson',
    },
    {
      id: 25,
      text:
        'I have never had such a pleasant experience shopping for products online. Not only are the products outstanding, but their service is exceptional. I couldn’t be happier with my purchase.',
      name: 'Eve Brown',
    },
    {
      id: 26,
      text:
        'Five-star quality! I’ve been a loyal customer for a while, and I’m always amazed by the value they offer. Their service and products are top-notch. I will definitely buy from them again.',
      name: 'Chris Taylor',
    },
    {
      id: 27,
      text:
        'I’ve shopped at various places, but this company stands out. The quality and customer support are incredible. I couldn’t be happier with my purchase. I highly recommend them.',
      name: 'Sarah Adams',
    },
    {
      id: 28,
      text:
        'When it comes to quality and service, they are unmatched. The product I bought exceeded my expectations, and their support is exceptional. Their products are a great value for the price.',
      name: 'Mike Clark',
    },
    {
      id: 29,
      text:
        'I’m extremely pleased with the outstanding service and products this company provides. I’ve been a happy customer for a while, and I wouldn’t go anywhere else. Highly recommended!',
      name: 'Olivia Davis',
    },
    {
      id: 30,
      text:
        'The product I received exceeded my expectations. I was pleasantly surprised by the quality and service. It’s rare to find such a great combination of value and quality. I’ll be back for more.',
      name: 'Daniel Green',
    },
  ];
  

  function LandingPage() {
    const [testimonialIndex, setTestimonialIndex] = useState(0);
  
    useEffect(() => {
      // Auto-change testimonial every 3 seconds
      const interval = setInterval(() => {
        setTestimonialIndex((prevIndex) =>
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);
  
      return () => clearInterval(interval);
    }, [testimonialIndex]);
  
    const bestSellerSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
    };
  
    const newArrivalsSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
    };
  
    return (
      <div className="landing-page">
        <section className="best-sellers">
          <h2>Best Sellers</h2>
          <Slider
            {...bestSellerSettings}
            initialSlide={testimonialIndex} // Start with the same slide index as testimonials
          >
            {bestSellers.map((item) => (
              <div key={item.id} className="best-seller-item">
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </Slider>
        </section>
  
        <section className="new-arrivals">
          <h2>New Arrivals</h2>
          <Slider {...newArrivalsSettings}>
            {newArrivals.map((item) => (
              <div key={item.id} className="new-arrival-item">
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </Slider>
        </section>
  
        <section className="testimonials">
          <h2>Testimonials</h2>
          <Slider
            dots={true}
            infinite={true}
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
            initialSlide={testimonialIndex}
          >
            {testimonials.map((item) => (
              <div key={item.id} className="testimonial">
                <p>{item.text}</p>
                <p className="name">{item.name}</p>
              </div>
            ))}
          </Slider>
        </section>
      </div>
    );
  }
  

export default LandingPage;
