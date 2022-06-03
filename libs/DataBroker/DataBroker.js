"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DataBroker {
    processData(res, data) {
        let response = {
            type: "DataResponse",
            message: data.message,
            data: data,
            error: null
        };
        return res.status(data.status).json(response);
    }
    processError(res, data) {
        let response = {
            type: "ErrorResponse",
            message: data.message,
            data: null,
            error: data.data
        };
        return res.status(data.status).json(response);
    }
}
;
const dataBroker = new DataBroker();
exports.default = dataBroker;
