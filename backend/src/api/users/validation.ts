import Joi from 'joi';

export default {
  createItem: {
    body: {
      email: Joi
        .string()
        .trim()
        .email()
        .min(5)
        .max(100)
        .required(),
      password: Joi
        .string()
        .trim()
        .min(5)
        .max(100)
        .required(),
      name: Joi
        .string(),
    },
  },
  patchItem: {
    body: {
      name: Joi
        .string(),
      settings: Joi
        .object()
        .keys({
          textColor: Joi.string().max(10),
          backgroundColor: Joi.string().max(10),
        }),
    },
  },
};
