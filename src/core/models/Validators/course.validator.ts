import * as Yup from 'yup'

const FILE_SIZE = 99462259;
const SUPPORTED_FORMATS = [
    "video/m4v",
    "video/avi",
    "video/mpg",
    "video/mp4"
]

export const LessonSchemaValidator = Yup.object().shape({

    name: Yup.string()
        .required("Email e obrigatorio"),

    material: Yup.mixed()
        .required("material e obrigatorio")
        .test(
            "tamanho do arquivo",
            "Arquivo muito grande",
            value => value && value.size <= FILE_SIZE
        )
        .test(
            "FormatoAqruivo",
            "Arquivo não suportado",
            value => value && SUPPORTED_FORMATS.includes(value.type?.toLowerCase())
        ),


});
