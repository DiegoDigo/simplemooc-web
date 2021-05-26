import * as Yup from 'yup'

export const LoginSchemaValidator = Yup.object().shape({

    email: Yup.string()
        .email("Email invalido")
        .required("Email e obrigatorio"),

    password: Yup.string()
        .required("Senha e obrigatorio")
        .length(8, "Senha tem que ter 8 caracteres"),
});


export const RegisterSchemaValidator = Yup.object().shape({

    email: Yup.string()
        .email("Email invalido")
        .required("Email e obrigatorio"),

    password: Yup.string()
        .required("Senha e obrigatorio")
        .length(8, "Senha tem que ter 8 caracteres"),
});