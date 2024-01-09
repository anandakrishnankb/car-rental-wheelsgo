import { Link } from "react-router-dom";
import Typography from "antd/es/typography/Typography";

const { Title } = Typography;
function SectionHero({ name }) {
  return (
    <>
      <section className="section-pages">
        <div className="container">
          <div className="section-page-text">
            <Title
              className="title"
              style={{ fontSize: "50px", fontWeight: "700" }}
            >
              {name}
            </Title>
            <p>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                className="title-head"
                to="/"
              >
                Home
              </Link>{" "}
              /<Title className="title-head">{name}</Title>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default SectionHero;
