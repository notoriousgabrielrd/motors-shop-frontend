import CardContainer from "./styled";
import Car from "./Photo.png";
import { BsClock } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import DefaultProfilePicture from "../../DefaultProfilePicture";

const ProductCardAuction = ({
  id,
  time,
  img,
  title,
  description,
  owner,
  kilometers,
  year,
  price,
}) => {
  return (
    <CardContainer number={parseInt(Math.random() * (13 - 1) + 1)}>
      <section className="product-section">
        <figure>
          <img src={Car} alt="Car_image" />
          <figcaption>Car Image</figcaption>
        </figure>

        <div className="auction-div">
          <div className="timer-div">
            <span>
              <BsClock /> 01:58:00
            </span>
          </div>

          <h5>Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200 </h5>

          <p>
            Lorem ipsum is simply dummy text of the printing and typesetting
            industry. Lorem dolor sit amet consectetur adipisicing elit. Ut
            exercitationem, doloribus eos voluptate et vero quidem quae
            voluptates velit, quod ullam praesentium dolorem magnam consequuntur
            odio sit id cum porro?
          </p>

          <div className="owner-div">
            <DefaultProfilePicture
              username="Rodrigo Tavares"
              width="32px"
              height="32px"
            />
            <span>Rodrigo Tavares</span>
          </div>

          <div className="infos-div">
            <div>
              <span>2013</span>
            </div>
            <div>
              <span>0 Km</span>
            </div>
            <h6>R$ 20.000.00</h6>
          </div>
        </div>
      </section>

      <div className="link-div">
        <span>Acessar página do leilão</span>
        <BsArrowRight />
      </div>
    </CardContainer>
  );
};

export default ProductCardAuction;
