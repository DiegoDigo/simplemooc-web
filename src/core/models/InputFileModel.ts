export default interface InputFileModel {
    label: string,
    name: string,
    isValid?: boolean,
    type?: string,
    setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void;
}