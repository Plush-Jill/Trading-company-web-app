export var PaymentMethod;
(function (PaymentMethod) {
    PaymentMethod["CASH"] = "\u043D\u0430\u043B\u0438\u0447\u043D\u044B\u0435";
    PaymentMethod["CARD"] = "\u043A\u0430\u0440\u0442\u0430";
    PaymentMethod["SBP"] = "\u0441\u0431\u043F";
    PaymentMethod["CRYPTO"] = "\u043A\u0440\u0438\u043F\u0442\u0430";
    PaymentMethod["OTHER"] = "\u0434\u0440\u0443\u0433\u043E\u0435";
})(PaymentMethod || (PaymentMethod = {}));
export const PAYMENT_METHOD_ENUM_NAME = 'payment_method';
