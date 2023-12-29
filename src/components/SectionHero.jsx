import { Link } from "react-router-dom";
import Typography from "antd/es/typography/Typography";

const {Title} = Typography;
function SectionHero({ name }) {
  return (
    <>
      <section className="section-pages">
        <div className="hero-pages__overlay"></div>
        <div className="container">
          <div className="section-page-text">
            <Title style={{fontSize:"50px",fontWeight:"700"}} >{name}</Title>
            <p>
              <Link to="/">Home</Link> / {name}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default SectionHero;