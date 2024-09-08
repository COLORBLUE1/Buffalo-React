import React, { useState } from "react";
import styled from "styled-components";

const FormContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
`;

const FormGroup = styled.div`
  margin: 10px 0;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;

export function Payment() {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardHolder, setCardHolder] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías hacer la llamada a una API de pago
    console.log("Pago realizado con los siguientes detalles:");
    console.log(`Número de tarjeta: ${cardNumber}`);
    console.log(`Fecha de vencimiento: ${expiryDate}`);
    console.log(`CVV: ${cvv}`);
    console.log(`Titular de la tarjeta: ${cardHolder}`);

    // Limpia los campos después de enviar el formulario
    setCardNumber("");
    setExpiryDate("");
    setCvv("");
    setCardHolder("");
  };

  return (
    <FormContainer>
      <h2>Pagar la Orden</h2>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="cardNumber">Número de tarjeta:</Label>
          <Input
            id="cardNumber"
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            placeholder="1234 5678 9012 3456"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="expiryDate">Fecha de vencimiento:</Label>
          <Input
            id="expiryDate"
            type="text"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            placeholder="MM/AA"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="cvv">Código de seguridad:</Label>
          <Input
            id="cvv"
            type="text"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            placeholder="123"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="cardHolder">Nombre del titular:</Label>
          <Input
            id="cardHolder"
            type="text"
            value={cardHolder}
            onChange={(e) => setCardHolder(e.target.value)}
            placeholder="Juan Pérez"
            required
          />
        </FormGroup>
        <Button type="submit">Pagar</Button>
      </form>
    </FormContainer>
  );
}
