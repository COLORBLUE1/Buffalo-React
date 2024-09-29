import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Importa useNavigate
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CircularProgress,
  Stack,
  Typography,
} from "@mui/material";
import { imgpruebas } from "../const.ts";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../../firebase/firebaseConfig";
import {
  Contenedorcard,
  Contenedordetallescard,
} from "../../assets/style/stylecomponets/styled";

export const Cards = ({ musculo }) => {
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true); // Estado para manejar la carga
  const navigate = useNavigate(); // Hook para la navegación
  const musculos = musculo;

  console.log("Mostrando ejercicios de " + musculos);

  useEffect(() => {
    const fetchExercises = async () => {
      setLoading(true); // Comienza a cargar
      try {
        const exercisesCollection = collection(firestore, musculos);
        const exerciseSnapshot = await getDocs(exercisesCollection);
        const exerciseList = exerciseSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setExercises(exerciseList);
      } catch (error) {
        console.error("Error fetching exercises:", error);
      } finally {
        setLoading(false); // Termina la carga
      }
    };

    fetchExercises();
  }, [musculos]);

  // Animaciones de scroll
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <Contenedorcard>
      {loading ? (
        <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
          <CircularProgress color="secondary" />
        </Stack>
      ) : (
        exercises.map((exercise) => (
          <Card
            className="animate__animated animate__fadeInUp"
            key={exercise.id}
            style={{ border: "none", borderRadius: 20, margin: "10px" }}
            onClick={() => navigate(`/exercise/${exercise.id}`)} // Navegar a la página de detalles
          >
            <CardActionArea>
              <CardMedia
                style={{ borderRadius: "20px 20px 0 0" }}
                component="img"
                height="140"
                image={imgpruebas}
                alt="Imagen de ejercicio"
              />
              <CardContent
                sx={{
                  background: "#2E3562",
                  borderRadius: "0 0 20px 20px",
                  color: "#fff",
                }}
              >
                <Contenedordetallescard>
                  <div>
                    <Typography gutterBottom variant="h5" component="div">
                      {exercise.nombre}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#ffffff8a" }}>
                      {exercise.descripcion}
                    </Typography>
                  </div>
                  <div className="detalles">
                    <Typography
                      style={{ display: "flex", gap: 10, alignItems: "center" }}
                      gutterBottom
                      variant="h5"
                      component="div"
                    >
                      {exercise.tiempo} <h6>Min</h6>
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#ffffff8a" }}>
                      {exercise.estado}
                    </Typography>
                  </div>
                </Contenedordetallescard>
              </CardContent>
            </CardActionArea>
          </Card>
        ))
      )}
    </Contenedorcard>
  );
};
