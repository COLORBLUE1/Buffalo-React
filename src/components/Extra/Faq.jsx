import styled from "styled-components";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Contenedormain } from "../../assets/style/stylecomponets/styled";
import { Header } from "../Blocks/Header";
import { Accordion } from "@mui/material";



const Contenedornoty = styled.div`
  font-family: Raleway;
  padding: 20px 0;
  width: 100%;
  height: 300px;
  display: grid;
  justify-items: center;
  align-content: center;
`;

const Contenedorfaq = styled.div`
  height: 10px;
  padding: 0 30px;
  color: #fff;
`;

export function Faq() {
  return (
    <Contenedormain>
      <Contenedornoty>
        <Header volver="/home" app="FAQ" />

        <Contenedorfaq>
          <Accordion
            style={{ background: "#363D6B", margin: 10, color: "#fff" }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              Where do I start
            </AccordionSummary>
            <AccordionDetails style={{ background: "#363D6B" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </AccordionDetails>
          </Accordion>
          <Accordion
            style={{ background: "#363D6B", margin: 10, color: "#fff" }}
          >
            <AccordionSummary
              style={{ background: "#363D6B" }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              What happens if I don't pay for a subscription?
            </AccordionSummary>
            <AccordionDetails style={{ background: "#363D6B" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </AccordionDetails>
          </Accordion>
          <Accordion
            style={{ background: "#363D6B", margin: 10, color: "#fff"  }}
            defaultExpanded
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              Why the error occurred
            </AccordionSummary>
            <AccordionDetails style={{ background: "#363D6B" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </AccordionDetails>
          </Accordion>
        </Contenedorfaq>
      </Contenedornoty>
    </Contenedormain>
  );
}
