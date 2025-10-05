import React, { useEffect, useRef } from 'react';

const Customer = () => {
  const rippleRef = useRef(null);

  useEffect(() => {
    const container = rippleRef.current;

    const createRipple = (event) => {
      const circle = document.createElement("span");
      const diameter = Math.max(container.clientWidth, container.clientHeight);
      const radius = diameter / 2;

      circle.style.width = circle.style.height = `${diameter}px`;
      circle.style.left = `${event.clientX - container.getBoundingClientRect().left - radius}px`;
      circle.style.top = `${event.clientY - container.getBoundingClientRect().top - radius}px`;
      circle.classList.add("ripple");

      const ripple = container.getElementsByClassName("ripple")[0];

      if (ripple) {
        ripple.remove();
      }

      container.appendChild(circle);
    };

    container.addEventListener("click", createRipple);

    return () => {
      container.removeEventListener("click", createRipple);
    };
  }, []);

  return (
    <section ref={rippleRef} className="bg-black py-20 relative overflow-hidden">
      <div className="container mx-auto px-3 md:px-10 relative z-10">
        <div className="px-5 py-10">
          <p className="font-circular-web text-lg text-blue-50">
            Our Customers
          </p>
          <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
            Hear from our satisfied customers.
          </p>
        </div>
        <div className="w-full">
          <video
            src="videos/customer-section.mp4"
            className="w-full h-auto"
            loop
            muted
            autoPlay
          />
        </div>
      </div>
      <style>{`
        .ripple {
          position: absolute;
          border-radius: 50%;
          transform: scale(0);
          animation: ripple 600ms linear;
          background-color: rgba(85, 66, 255, 0.5);
          pointer-events: none;
          z-index: 0;
        }
        @keyframes ripple {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default Customer;
