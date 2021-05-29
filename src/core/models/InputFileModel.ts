export default interface InputFileModel {
    label: string,
    name: string,
    isValid?: boolean,
    setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void;
}