import { Container } from "react-bootstrap";
import CustomNavbar from "../CustomNavbar";

const Layout = ({ children }) => {
  return (
    <div>
      <CustomNavbar />
      <Container className="mt-3">{children}</Container>
    </div>
  );
};

export default Layout;
