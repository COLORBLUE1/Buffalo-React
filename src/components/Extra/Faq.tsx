import styled from "styled-components";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Contenedormain } from "../../assets/style/stylecomponets/styled.js";
import { Header } from "../Blocks/Header";
import { Accordion } from "@mui/material";

// Estilos globales
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
  padding: 0 30px;
  color: #fff;
`;

const StyledAccordion = styled(Accordion)`
  background: #363d6b;
  margin: 10px 0;
  color: #fff;
`;

const StyledAccordionSummary = styled(AccordionSummary)`
  background: #363d6b;
`;

const StyledAccordionDetails = styled(AccordionDetails)`
  background: #363d6b;
`;

export function Faq() {
  return (
    <Contenedormain>
      <Contenedornoty>
        <Header volver="/home" app="FAQ" />

        <Contenedorfaq>
          <StyledAccordion>
            <StyledAccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              Where do I start
            </StyledAccordionSummary>
            <StyledAccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </StyledAccordionDetails>
          </StyledAccordion>

          <StyledAccordion>
            <StyledAccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              What happens if I don't pay for a subscription?
            </StyledAccordionSummary>
            <StyledAccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </StyledAccordionDetails>
          </StyledAccordion>

          <StyledAccordion defaultExpanded>
            <StyledAccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              Why the error occurred
            </StyledAccordionSummary>
            <StyledAccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </StyledAccordionDetails>
          </StyledAccordion>
        </Contenedorfaq>
      </Contenedornoty>
    </Contenedormain>
  );
}
