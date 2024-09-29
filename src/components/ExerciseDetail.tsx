import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Importa useParams
import {
  Card,
  CardContent,
  Typography,
  CircularProgress,
  Stack,
} from "@mui/material";
import { firestore } from "../firebase/firebaseConfig.js";
import { doc, getDoc } from "firebase/firestore";
import {
  Contenedorcard,
  Contenedordetallescard,
} from "../assets/style/stylecomponets/styled";

const ExerciseDetail = () => {
  const { muscleGroup, id } = useParams(); // Obtén el grupo muscular y el id del parámetro de la ruta
  const [exercise, setExercise] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExercise = async () => {
      setLoading(true);
      try {
        // Usa el grupo muscular para seleccionar la colección correcta
        const exerciseDoc = doc(firestore, muscleGroup, id);
        const exerciseSnapshot = await getDoc(exerciseDoc);
        if (exerciseSnapshot.exists()) {
          setExercise(exerciseSnapshot.data());
        } else {
          console.error("No such document!");
          setExercise(null); // Actualiza el estado si no se encuentra el ejercicio
        }
      } catch (error) {
        console.error("Error fetching exercise:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchExercise();
  }, [muscleGroup, id]);

  if (loading) {
    return (
      <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
        <CircularProgress color="secondary" />
      </Stack>
    );
  }

  if (!exercise) {
    return <Typography>No exercise found.</Typography>;
  }

  return (
    <Contenedorcard>
      <Card>
        <CardContent>
          <Typography variant="h4">{exercise.nombre}</Typography>
          <Typography variant="h6">{exercise.descripcion}</Typography>
          <Typography variant="body1">Tiempo: {exercise.tiempo} Min</Typography>
          <Typography variant="body1">Estado: {exercise.estado}</Typography>
        </CardContent>
      </Card>
    </Contenedorcard>
  );
};

export default ExerciseDetail;
