import * as Yup from 'yup'

export const LoginSchemaValidator = Yup.object().shape({

    email: Yup.string()
        .email("Email invalido")
        .required("Email é obrigatório"),

    password: Yup.string()
        .required("Senha é obrigatório")
        .length(8, "Senha tem que ter 8 caracteres"),
});


export const RegisterSchemaValidator = Yup.object().shape({

    email: Yup.string()
        .email("Email invalido")
        .required("Email é obrigatório"),

    password: Yup.string()
        .required("Senha é obrigatório")
        .length(8, "Senha tem que ter 8 caracteres"),
});