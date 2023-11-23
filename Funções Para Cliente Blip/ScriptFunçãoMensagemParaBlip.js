function run(body) {
    // body = JSON.parse(body)
    let opcao = 0
    let mensagem = ""
    dados = []
    for (let i = 0; i < body.result.length; i++) {
        opcao++
        dados.push({
            historic : body.result[i].historic,
            value_up : body.result[i].value_up,
            due_date : body.result[i].due_date,
            id : body.result[i].id,
            opcaoBoleto : opcao
        })
        mensagem += "Opcão " + opcao + "\n" + "Status Do boleto: " + dados[i].historic + "\n" + "Data Do Boleto: " + dados[i].due_date + "\n" + "Valor: " + dados[i].value_up + "\n"
    }
    return mensagem;
}

body = {
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
    


console.log(run(body))