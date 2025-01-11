import React from "react";

const About = () => {
  const education = [
    {
      course: "BSIT",
      uni: "BIIT",
      date: "2018 - 2022",
    },
  ];

  const experience = [
    {
      company: "PItech",
      date: "2022 - 2023",
      description:
        "Worked as a QA Developer at PItech, ensuring software quality through testing and automation. Collaborated with teams to identify and resolve issues in the development process.",
    },
    {
      company: "Urbanloop.tech",
      date: "2023 - Present",
      description:
        "Currently a Backend Developer at Urbanloop, building and maintaining server-side logic, APIs, and database integrations. Focused on scalability, performance, and security of web applications.",
    },
  ];

  return (
    <section className="px-6 font-sans">
      {/* Introduction Section */}
      <div className="max-w-7xl mx-auto">
        <header className="text-center md:text-left mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-purple-800 leading-tight mb-6">
            Welcome to <br />
            <span className="text-blue-500">My Portfolio</span>, <br />I am a Web
            Developer.
          </h1>
          <p className="text-base text-neutralDark mx-auto">
            I am a passionate and dedicated Web Developer with a keen eye for detail. My
            expertise lies in building modern, responsive websites using the latest web
            technologies such as React.js, Node.js, and Tailwind CSS. I have a strong
            background in creating seamless user experiences and always strive to enhance
            my skills and keep up with industry trends. I have worked as a QA Developer at
            PItech and as a Backend Developer at Urbanloop.tech.
          </p>
        </header>
      </div>

      {/* Education Section */}
      <div className="max-w-7xl mx-auto py-2">
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-purple-800 mb-6">My Education</h2>
          <div className="space-y-6">
            {education.map((item, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-xl font-semibold text-secondary">{item.course}</h3>
                <h5 className="text-xs text-neutralDark mt-1">{item.date}</h5>
                <p className="text-base text-neutralDark mt-1">{item.uni}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Experience Section */}
      <div className="max-w-7xl mx-auto py-2">
        <section>
          <h2 className="text-3xl font-bold text-purple-800 mb-6">My Experience</h2>
          <div className="space-y-8">
            {experience.map((item, index) => (
              <div key={index} className="mb-8">
                <h3 className="text-xl font-semibold text-secondary">{item.company}</h3>
                <p className="text-xs text-neutralDark mt-2">{item.date}</p>
                <p className="text-base text-neutral mt-2">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default About;
