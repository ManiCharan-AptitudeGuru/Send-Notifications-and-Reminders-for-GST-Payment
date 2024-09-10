import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { FaUser } from "react-icons/fa";
import { registerGST } from "../utils/api";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 300px;
  margin: 20px auto;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const GSTRegistration = ({ onRegister }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await registerGST(data);
      onRegister(response.data.recruiter);
    } catch (error) {
      console.error("Error registering GST:", error);
    }
  };

  return (
    <div>
      <h2>
        <FaUser /> Recruiter GST Registration
      </h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input {...register("name")} placeholder="Name" required />
        <Input
          {...register("email")}
          placeholder="Email"
          required
          type="email"
        />
        <Input {...register("gstNumber")} placeholder="GST Number" required />
        <Button type="submit">Register</Button>
      </Form>
    </div>
  );
};

export default GSTRegistration;
