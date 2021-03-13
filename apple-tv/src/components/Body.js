import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BtnLink = styled.a`
  border-radius: 500px;
  background-color: white;
  color: black;
  font-size: 10pt;
  padding: 10px;
  padding-left: 15px;
  padding-right: 15px;
  border-color: none;
  border: none;

  &:hover {
    background-color: #f0f0f0;
    border-color: none;
    border-width: none;
  }
`;
const Header = styled.h1`
  font-size: 25pt;
  font-weight: bold;
  color: white;
`;
const Paraghraph = styled.p`
  margin-top: 50px;
  font-size: 15pt;
  font-weight: bold;
  color: white;
  display: flex;
`;

const Link = styled.a`
  font-size: 10pt;
  color: white;
  margin-left: 20px;
  font-style: none;
`;
const Body = () => {
  return (
    <div>
      <Paraghraph>
        <FontAwesomeIcon
          className="costa"
          icon="apple-alt"
          style={{
            paddingTop: "3px",
            paddingLeft: "47.8vw",
            marginRight: "10px",
          }}
        />
        tv+
      </Paraghraph>
      <Header>
        All Apple Originals. <br /> Only on Apple TV+.
      </Header>
      <BtnLink href="https://tv.apple.com/?itscg=10000&itsct=atv-tv_fp-pmo_wch-apl-ctr-210111">
        Watch Now
      </BtnLink>
      <Link href="https://www.apple.com/apple-tv-plus/?itscg=10000&itsct=atv-tv_fp-pmo_wch-apl-ctr-210111">
        {" "}
        Learn More{" "}
      </Link>
    </div>
  );
};

export default Body;
