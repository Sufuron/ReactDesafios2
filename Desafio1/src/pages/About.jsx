import React from "react";

const About = () => {
  return (
    <div className="container">
      <h2 className="text-center border-bottom pb-2 mb-3">About Us</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor,
        magna at egestas molestie, magna erat feugiat justo, a interdum quam sem
        sit amet dolor. Nulla facilisi. Curabitur semper, diam at pharetra
        interdum, purus risus ullamcorper libero, id euismod dolor libero eu
        odio. Nam commodo, magna a ullamcorper malesuada, mi libero accumsan
        libero, at placerat lacus purus in ligula.
      </p>
      <img
        className="mt-2 rounded-5"
        src="src\assets\img\krakenimages-Y5bvRlcCx8k-unsplash.jpg"
        alt="Team"
        width="300"
        height="350"
      />
    </div>
  );
};

export default About;
