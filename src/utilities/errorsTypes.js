const errorsType = [
  "valueMissing",
  "typeMismatch",
  "rangeOverflow",
  "toolong",
  "patternMismatch",
];

const errorsMessageES = {
  titulo: {
    valueMissing: "El titulo del video es requerido",
    toolong: "Titulo muy largo maximo 40 caracteres",
    patternMismatch: "Solo se permite ingresar letras y espacios",
  },
  urlImage: {
    valueMissing: "La URL de la imagen del video es requerida",
    typeMismatch: "Ingrese un formato de URL correcto. EJ: http://...",
    toolong: "Enlace muy largo maximo 400 caracteres",
  },
  urlVideo: {
    valueMissing: "La URL del video es requerida",
    typeMismatch: "Ingrese un formato de URL correcto. EJ: http://...",
    toolong: "Enlace muy largo maximo 400 caracteres",
  },
  descripcion: {
    valueMissing: "La descripción del video es requerida",
    toolong: "Descripcion muy larga maximo 200 caracteres",
  },
};

const errorsMessageEN = {
  titulo: {
    valueMissing: "The video title is required",
    toolong: "Characters exceeds the allowed limit (40)",
    patternMismatch: "Only letters and spaces are allowed",
  },
  urlImage: {
    valueMissing: "The video image URL is required",
    typeMismatch: "Enter a correct URL format. E.g.: http://...",
    toolong: "Characters exceeds the allowed limit (400)",
  },
  urlVideo: {
    valueMissing: "The video URL is required",
    typeMismatch: "Enter a correct URL format. E.g.: http://...",
    toolong: "Characters exceeds the allowed limit (400)",
  },
  descripcion: {
    valueMissing: "The video description is required",
    toolong: "Characters exceeds the allowed limit (200)",
  },
};

const messages = {
  "en-US": errorsMessageEN,
  "es-ES": errorsMessageES,
};

const userLanguage = navigator.language || "en-US";

const errorsMessage = messages[userLanguage] || messages["en-US"];

export { errorsType, errorsMessage };
