var API = {}

API.getRows = (data, cap) => {
    let rows = []; 
    for(let i = 0; i < data.length; i += cap) {
        let row_data = data.slice(i, i + cap);
        rows.push(row_data);
    }
    
    return rows;
}

module.exports = API; 