import * as Yup from 'yup'

const FILE_SIZE = 99462259;
const VIDEOS_SUPPORTED_FORMATS = [
    "video/m4v",
    "video/avi",
    "video/mpg",
    "video/mp4"
]

const IMAGES_SUPPORTED_FORMATS = [
    "image/gif",
    "image/png",
    "image/jpeg",
    "image/bmp",
    "image/webp"
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
            value => value && VIDEOS_SUPPORTED_FORMATS.includes(value.type?.toLowerCase())
        ),


});

export const CourseSchemaValidator = Yup.object().shape({

    name: Yup.string()
        .required("Nome é obrigatório"),

    image: Yup.mixed()
        .required("Imagem é obrigatório")
        .test(
            "Tamanho do arquivo",
            "Arquivo muito grande",
            value => value && value.size <= FILE_SIZE
        )
        .test(
            "FormatoAqruivo",
            "Arquivo não suportado",
            value => value  && IMAGES_SUPPORTED_FORMATS.includes(value.type?.toLowerCase())
        ),


});



export const CourseUpdateSchemaValidator = Yup.object().shape({

    name: Yup.string()
        .required("Nome é obrigatório"),

});