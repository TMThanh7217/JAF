module.exports = {
    typeToCode : type => {
        let code = -1;
        switch (type) {
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
        switch (status) {
            case "stocking" : code = 1; break;
            case "OOS" : code = 0; break;
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
    }
}