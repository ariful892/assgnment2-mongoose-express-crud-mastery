import Joi from 'joi';

const fullNameValidationSchema = Joi.object({
  firstName: Joi.string()
    .required()
    .trim()
    .max(20)
    .pattern(/^[A-Z][a-z]*$/, { name: 'capitalized' })
    .message(
      'First name must start with a capital letter and only contain letters',
    ),
  lastName: Joi.string()
    .required()
    .trim()
    .max(20)
    .pattern(/^[a-zA-Z]+$/)
    .message('Last name must only contain letters'),
});

const addressValidationSchema = Joi.object({
  street: Joi.string().required().trim().max(20),
  city: Joi.string().required().trim().max(20),
  country: Joi.string().required().trim().max(20),
});

const ordersValidationSchema = Joi.object({
  orderId: Joi.number().required(),
  product: Joi.string().required(),
  quantity: Joi.number().required(),
  price: Joi.number().required(),
});

const userValidationSchema = Joi.object({
  userId: Joi.number().required(),
  username: Joi.string().required(),
  password: Joi.string()
    .required()
    .messages({
      'any.required': 'Password is required',
      'string.max': 'Password cannot be more than 20 characters',
    })
    .max(20),
  fullName: fullNameValidationSchema.required(),
  age: Joi.number().required(),
  email: Joi.string()
    .required()
    .email()
    .message('Email must be a valid email address'),
  isActive: Joi.string().valid('active', 'inActive').required(),
  hobbies: Joi.array().items(Joi.string()).required(),
  address: addressValidationSchema.required(),
  orders: Joi.array().items(ordersValidationSchema),
  isDeleted: Joi.boolean(),
});

export default userValidationSchema;
