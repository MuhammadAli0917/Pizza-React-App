import React from 'react';
import pizza from "../pizza.json"

function filterList(arr, method) {
    if (method == null) return pizza
    else {
        return pizza.filter(product => {
            const sizeArray = product.size.split(" ");
            if (arr.length > 0) {
                if (sizeArray.some(r => arr.indexOf(r) >= 0)) {
                    return product
                }
            } else {
                return pizza
            }
        })
    }
}

export default filterList;