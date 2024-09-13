import React, { useEffect, useState } from "react";

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { imgpruebas } from "../const";

import styled from "styled-components";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../../firebase/firebaseConfig";
import { Contenedorcard } from "../../assets/style/stylecomponets/styled";



export const Cards = ({ musculo }) => {
  const [exercises, setExercises] = useState([]);
  const musculos = musculo;
  console.log("Mostrando ejercicios de " + musculos);
  useEffect(() => {
    const fetchExercises = async () => {
      const exercisesCollection = collection(firestore, musculos); // "exercises" es el nombre de la colección en Firestore
      const exerciseSnapshot = await getDocs(exercisesCollection);
      const exerciseList = exerciseSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setExercises(exerciseList);
    };

    fetchExercises();
  }, []);

  return (
    <Contenedorcard>
      {exercises.map((exercise) => (
        <Card
          key={exercise.id}
          style={{ border: "none", borderRadius: 20, margin: "10px" }}
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
              <Typography gutterBottom variant="h5" component="div">
                {exercise.nombre}
              </Typography>
              <Typography variant="body2" sx={{ color: "#ffffff8a" }}>
                {exercise.descripcion}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Contenedorcard>
  );
};
