import React from "react";
import { useForm } from "react-hook-form";

const UsersForm = () => {
  const { register, handleSubmit } = useForm();

  const submit = (data) => {
    console.log(data);
  };

  return (
    <form onClick={handleSubmit(submit)}>
      <h1>User Form</h1>
      <div className="input-container">
        <label htmlFor="first_name">Nombre: </label>
        <input
          type="text"
          id="first_name"
          placeholder="nombre"
          {...register("first_name")}
        />
      </div>
      <div className="input-container">
        <label htmlFor="last_name">Apellido: </label>
        <input
          type="text"
          id="last_name"
          placeholder="Apellido"
          {...register("last_name")}
        />
      </div>
      <div className="input-container">
        <label htmlFor="email">Email: </label>
        <input
          type="text"
          id="email"
          placeholder="e-mail"
          {...register("email")}
        />
      </div>
      <div className="input-container">
        <label htmlFor="password">Contraseña: </label>
        <input type="password" id="password" {...register("password")} />
      </div>
      <div className="input-container">
        <label htmlFor="birthday">Fecha de Nacimiento: </label>
        <input type="date" id="birthday" {...register("birthday")} />
      </div>
      <button className="submit">Enviar</button>
    </form>
  );
};

export default UsersForm;
