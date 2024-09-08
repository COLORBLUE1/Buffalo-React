import styled from "styled-components";
import Rating from "@mui/material/Rating";

import { Card } from "../../assets/style/stylecomponets/styled";
import {
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { imgpruebas } from "../const";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#ff6d75",
  },
  "& .MuiRating-iconHover": {
    color: "#ff3d47",
  },
});

export const Contenedorcard = styled.div`
  display: flex;
  padding: 20px;
`;

export const Cards = () => {
  return (
    <Contenedorcard>
      <Card style={{ border: "none", borderRadius: 20 }}>
        <CardActionArea>
          <CardMedia
            style={{ borderRadius: "20px 20px 0 0" }}
            component="img"
            height="140"
            image={imgpruebas}
            alt="{}"
          />
          <CardContent
            sx={{ background: "#2E3562", borderRadius: "0 0 20px 20px" }}
          >
            <Typography gutterBottom variant="h5" component="div">
              Split 3 days
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              the workout is divided into 3 days, day 1 biceps back day 2
              triceps chest day 3 shoulders legs
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Contenedorcard>
  );
};
