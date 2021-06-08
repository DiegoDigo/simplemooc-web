export default interface ModalModel {
    show: boolean,
    deleteFunction: Function,
    setExcluir: (excluir: boolean) => void
}