import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { ModalContainer, ProductMain } from "./styled";
import PrimaryPhoto from "../../components/Cards/ProductCardAuction/Photo.png";
import Button from "../../components/Button";
import DefaultProfilePicture from "../../components/DefaultProfilePicture";
import { BsDot } from "react-icons/bs";
import { useState } from "react";
import { useContext } from "react";
import { ModalContext } from "../../providers/modal";
import AnuncioModal from "../../components/modal";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const ProductPage = () => {
  const [commentValue, setCommentValue] = useState();
  const { showModal, setShowModal } = useContext(ModalContext);

  return (
    <>
      <ModalContainer>
        {showModal && (
          <AnuncioModal title={"Example Modal"}>
            <figure>
              <img src={PrimaryPhoto} alt="Car_Primary_Photo" />
              <figcaption>Car Primary Photo</figcaption>
              <div className="move-gallery-div">
                <AiOutlineLeft />
                <AiOutlineRight />
              </div>
            </figure>
          </AnuncioModal>
        )}
      </ModalContainer>

      <Header />
      <ProductMain>
        <section className="product-main-section">
          <section className="product-infos-section">
            <figure>
              <img src={PrimaryPhoto} alt="Car_Primary_Photo" />
              <figcaption>Car Primary Photo</figcaption>
            </figure>

            <div className="title-div">
              <h1>
                Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200{" "}
              </h1>
              <div className="infos-div">
                <div>
                  <span>2013</span>
                </div>
                <div>
                  <span>0 KM</span>
                </div>
                <h6>R$ 00.000,00</h6>
              </div>

              <Button
                width="100px"
                height="38px"
                bgColor="var(--brand-1)"
                fontColor="var(--white-fixed)"
                fontSize="14px"
                onClick={() => setShowModal(!showModal)}
              >
                Comprar
              </Button>
            </div>

            <div className="description-div">
              <h3>Descrição</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </section>

          <section className="product-complementary-section">
            <div className="pictures-div">
              <h3>Fotos</h3>
              <div>
                <figure>
                  <img src={PrimaryPhoto} alt="Car_Primary_Photo" />
                  <figcaption>Car Primary Photo</figcaption>
                </figure>
                <figure>
                  <img src={PrimaryPhoto} alt="Car_Primary_Photo" />
                  <figcaption>Car Primary Photo</figcaption>
                </figure>
                <figure>
                  <img src={PrimaryPhoto} alt="Car_Primary_Photo" />
                  <figcaption>Car Primary Photo</figcaption>
                </figure>
                <figure>
                  <img src={PrimaryPhoto} alt="Car_Primary_Photo" />
                  <figcaption>Car Primary Photo</figcaption>
                </figure>
                <figure>
                  <img src={PrimaryPhoto} alt="Car_Primary_Photo" />
                  <figcaption>Car Primary Photo</figcaption>
                </figure>
                <figure>
                  <img src={PrimaryPhoto} alt="Car_Primary_Photo" />
                  <figcaption>Car Primary Photo</figcaption>
                </figure>
              </div>
            </div>

            <div className="owner-div">
              <DefaultProfilePicture
                username="Samuel Leão"
                width="77px"
                height="77px"
              />
              <h3>Samuel Leão</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's
              </p>
              <Button
                width="206px"
                bgColor="var(--grey-0)"
                fontColor="var(--white-fixed)"
              >
                Ver todos anúncios
              </Button>
            </div>
          </section>

          <section className="product-comments-section">
            <div className="list-comments-div">
              <h3>Comentários</h3>
              <ul>
                <li>
                  <div className="comment-header-div">
                    <DefaultProfilePicture
                      username="Júlia Lima"
                      width="32px"
                      height="32px"
                    />
                    <span className="coment-name-span">Júlia Lima</span>

                    <BsDot />

                    <span className="comment-date-span">há 3 dias</span>
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </li>

                <li>
                  <div className="comment-header-div">
                    <DefaultProfilePicture
                      username="Júlia Lima"
                      width="32px"
                      height="32px"
                    />
                    <span className="coment-name-span">Júlia Lima</span>

                    <BsDot />

                    <span className="comment-date-span">há 3 dias</span>
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </li>
                <li>
                  <div className="comment-header-div">
                    <DefaultProfilePicture
                      username="Júlia Lima"
                      width="32px"
                      height="32px"
                    />
                    <span className="coment-name-span">Júlia Lima</span>

                    <BsDot />

                    <span className="comment-date-span">há 3 dias</span>
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </li>
              </ul>
            </div>

            <div className="create-comment-div">
              <div className="creator-comment-div">
                <DefaultProfilePicture
                  username="Samuel Leão"
                  width="32px"
                  height="32px"
                />
                <span>Samuel Leão</span>
              </div>
              <div className="write-comment-div">
                <textarea
                  value={commentValue}
                  onChange={(evt) => setCommentValue(evt.target.value)}
                  placeholder="Carro muito confortável, foi uma ótima experiência de compra..."
                />

                <Button
                  width="108px"
                  height="38px"
                  bgColor="var(--brand-1)"
                  borderColor="var(--brand-1)"
                  fontColor="var(--white-fixed)"
                  fontSize="14px"
                >
                  Comentar
                </Button>
              </div>
              <div className="comment-examples-div">
                <span onClick={(evt) => setCommentValue(evt.target.innerText)}>
                  Gostei muito!
                </span>
                <span onClick={(evt) => setCommentValue(evt.target.innerText)}>
                  Incrível
                </span>
                <span onClick={(evt) => setCommentValue(evt.target.innerText)}>
                  Recomendarei para meus amigos!
                </span>
              </div>
            </div>
          </section>
        </section>
      </ProductMain>
      <Footer />
    </>
  );
};

export default ProductPage;
