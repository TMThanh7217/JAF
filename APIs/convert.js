module.exports = {
    typeToCode : type => {
        let code = -1;
        switch (type.toLowerCase()) {
            case "food" : code = 0; break;
            case "drink" : code = 1; break;
        }
        return code;
    },

    codeToType : code => {
        let type = "unknown";
        switch (code) {
            case 0 : type = "food"; break;
            case 1 : type = "drink"; break;
        }
        return type;
    },

    statusToCode : status => {
        let code = -1;
        switch (status.toLowerCase()) {
            case "stocking" : code = 1; break;
            case "oos" : code = 0; break;
        }
        return code;
    },

    codeToStatus : code => {
        let type = "unknown";
        switch (code) {
            case 0 : type = "OOS"; break;
            case 1 : type = "stocking"; break;
        }
        return type;
    },

    paymentToCode : payment => {
        let code = -1;
        switch (payment.toLowerCase()) {
            case "cod" : code = 0; break;
        }
        return code;
    },

    codeToPayment : code => {
        let type = "unknown";
        switch (code) {
            case 0 : type = "cod"; break;
        }
        return type;
    }
}