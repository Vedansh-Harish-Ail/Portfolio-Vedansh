import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    name: "Meri Panchayat Portal",
    category: "FullStack App",
    tools: "Python, Flask, SQLite, HTML/CSS",
    image: "/images/panchayat.png",
  },
  {
    name: "Delivery Time Prediction",
    category: "Machine Learning",
    tools: "Python, Regression Algorithms",
    image: "/images/placeholder.webp",
  },
  {
    name: "News Website Scraper",
    category: "Web Scraping",
    tools: "Python, BeautifulSoup, Pandas",
    image: "/images/news.png",
  },
  {
    name: "Smart Recipe Generator",
    category: "Frontend App",
    tools: "HTML, CSS, JavaScript",
    image: "/images/smart.png",
  },
  {
    name: "Java Quiz App",
    category: "Desktop App",
    tools: "Java, Swing, Object-Oriented",
    image: "/images/placeholder.webp",
  },
];

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const container = document.querySelector(".work-container");
      const box = document.getElementsByClassName("work-box");
      
      if (!container || box.length === 0) return;

      const rectLeft = container.getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement?.getBoundingClientRect().width || 0;
      let paddingValue = parseInt(window.getComputedStyle(box[0]).paddingLeft);
      let padding: number = isNaN(paddingValue) ? 40 : paddingValue / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`, // Use actual scroll width
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    // Clean up (optional, good practice)
    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
