export const formatMoneyPtBt = (money: Number): string => {
    return money.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
}