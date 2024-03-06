import Joi from "joi";

export const UserSpec = {
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
};

export const UserCredentialsSpec = {
  email: Joi.string().email().required(),
  password: Joi.string().required(),
};

export const MonumentSpec = {
  title: Joi.string().required(),
  latitude: Joi.number().optional(),
  longitude: Joi.number().optional(),
  category: Joi.string().required(),
};

export const LocationSpec = {
  title: Joi.string().required(),
};
