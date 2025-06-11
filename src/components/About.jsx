import "./About.css";

const skills = [
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
];

export default function About() {
  return (
    <div className="about">
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          Hi, I'm Rishab Sharma – a passionate full-stack developer specializing in MERN, C#, Java Spring,
          and more. I enjoy building interactive, scalable, and modern applications.
        </p>

        <h3>Skills</h3>
<div className="skills-grid">
  {skills.map((skill) => (
    <div className="skill-item" key={skill.name}>
      <img src={skill.icon} alt={skill.name} />
    </div>
  ))}
</div>



      </div>
    </div>
  );
}
