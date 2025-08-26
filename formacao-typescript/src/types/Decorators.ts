export function validaDebito(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const metodoOriginal = descriptor.value;

    descriptor.value = function(valorDebito: number) {
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

export function validaDeposito(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const metodoOriginal = descriptor.value;

    descriptor.value = function(valorDeposito: number) {
        if (typeof valorDeposito !== "number" || valorDeposito <= 0) {
            throw new Error("O valor a ser depositado deve ser maior que zero!");
        }
        return metodoOriginal.apply(this, [valorDeposito]);
    };

    return descriptor;
}