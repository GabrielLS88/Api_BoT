function run(bodyBoleto,positionClient) {
    // bodyBoleto = JSON.parse(bodyBoleto)
    positionClient = positionClient - 1 
    for (let i = 0; i < bodyBoleto.result.length; i++) {
    let idUser = bodyBoleto.result[positionClient].id  
    return idUser   
    }
}





bodyBoleto = {
    "status": 1,
    "error_code": "",
    "error_description": "",
    "result": [
        {
            "id": 4325535,
            "account_number": 3,
            "due_date": "2023-08-14",
            "document_number": 2272656,
            "bank_number": 172360,
            "charge_type": "with registry",
            "historic": "Documento a Receber",
            "comments": "",
            "source": "Billing",
            "bank": 104,
            "value_init": 69.9,
            "value_interest": 2,
            "value_fine": 1.39,
            "value_discount": 0,
            "value_up": 73.29,
            "address": {
                "street": "RUA A MULTIRAO",
                "number": 74,
                "complement": "CASA DE TONY CANTOR",
                "neighborhood": "SANTA",
                "city": "Serrinha",
                "state": "BA",
                "district": "",
                "zipcode": "48700000",
                "country": "Brasil"
            }
        },
        {
            "id": 4399216,
            "account_number": 3,
            "due_date": "2023-09-14",
            "document_number": 2307481,
            "bank_number": 63169,
            "charge_type": "with registry",
            "historic": "Documento a Receber",
            "comments": "",
            "source": "Billing",
            "bank": 33,
            "value_init": 60.89,
            "value_interest": 1.38,
            "value_fine": 1.22,
            "value_discount": 0,
            "value_up": 63.49,
            "address": {
                "street": "RUA A MULTIRAO",
                "number": 74,
                "complement": "CASA DE TONY CANTOR",
                "neighborhood": "SANTA",
                "city": "Serrinha",
                "state": "BA",
                "district": "",
                "zipcode": "48700000",
                "country": "Brasil"
            }
        }
    ]
}
    
let positionClient = 1

console.log(run(bodyBoleto, positionClient))