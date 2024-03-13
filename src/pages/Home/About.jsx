import person from '../../assets/images/about_us/person.jpg';
import parts from '../../assets/images/about_us/parts.jpg';
const About = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className='lg:w-1/2 relative'>
        <img
          src={person}
          className="lg:w-3/4 rounded-lg shadow-2xl"
        />
        <img
          src={parts}
          className="lg:w-1/2 rounded-lg shadow-2xl lg:absolute right-4 top-1/2 lg:border-8 border-solid border-white"
        />
        </div>
        <div className='lg:w-1/2 space-y-7 p-16'>
          <h3 className='text-[#FF3811] text-lg font-bold'>About Us</h3>
          <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
          <p className="text-[#737373]">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. 
          </p>
          <p className='text-[#737373]'>The majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
          <button className="btn btn-primary text-white bg-[#FF3811] border-none">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
