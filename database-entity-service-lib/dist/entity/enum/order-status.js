export var OrderStatus;
(function (OrderStatus) {
    OrderStatus["New"] = "New";
    OrderStatus["Shipped"] = "Shipped";
    OrderStatus["Sent"] = "Sent";
    OrderStatus["Completed"] = "Completed";
    OrderStatus["Canceled"] = "Canceled";
})(OrderStatus || (OrderStatus = {}));
export const ORDER_STATUS_ENUM_NAME = 'order_status';
