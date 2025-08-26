export function validaDebito(target, propertyKey, descriptor) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (valorDebito) {
        if (typeof valorDebito !== "number" || valorDebito <= 0) {
            throw new Error("O valor a ser debitado deve ser maior que zero!");
        }
        if (valorDebito > this.saldo) {
            throw new Error("Saldo insuficiente!");
        }
        return metodoOriginal.apply(this, [valorDebito]);
    };
    return descriptor;
}
export function validaDeposito(target, propertyKey, descriptor) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (valorDeposito) {
        if (typeof valorDeposito !== "number" || valorDeposito <= 0) {
            throw new Error("O valor a ser depositado deve ser maior que zero!");
        }
        return metodoOriginal.apply(this, [valorDeposito]);
    };
    return descriptor;
}
