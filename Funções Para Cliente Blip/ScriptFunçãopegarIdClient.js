function run(body){

    // body = JSON.parse(body);   //Quando for testar no VSSTUDIO retirar o parse!
    var idClient = body.result[0].Codigo;
    return idClient;
}


body = {
    "status": 1,
    "erro_code": "",
    "erro_inf": "",
    "erro_desc": "",
    "erro_detail": "",
    "result": [
        {
            "Codigo": "46440",
            "Tipo": "F",
            "CNPJ_CNPF": "03408871507",
            "Nome": "ANTONIO CARLOS PINHEIRO SANTOS",
            "Endereco": "RUA A MULTIRAO",
            "Numero": "74",
            "Complemento": "CASA DE TONY CANTOR",
            "Bairro": "SANTA",
            "Cidade": "Serrinha",
            "Distrito": "",
            "UF": "BA",
            "CEP": "48700000",
            "TelComercial": "75999998789",
            "TelResidencial": "75991733408",
            "TelCelular": "75991736941",
            "BcoCobr": "33",
            "RG_IE": "1014054646",
            "Nascimento": "1985-06-12",
            "CodCobr": "",
            "Cobranca": "R",
            "TipoImpressao": "C",
            "DiaCobr": "14",
            "DiasProtesto": "0",
            "Sigla": "ANTONIO",
            "Cobr_Endereco": "RUA A MULTIRAO",
            "Cobr_Complemento": "CASA DE TONY CANTOR",
            "Cobr_Bairro": "SANTA",
            "Cobr_Cidade": "Serrinha",
            "Cobr_UF": "BA",
            "Cobr_CEP": "48700000",
            "Bloqueavel": "S",
            "Inclusao": "2021-09-15",
            "usuario": "graciane.pereira",
            "Observacoes": "Vencimento dia 14",
            "MapsMarkLat": "0.0000000000000",
            "MapsMarkLng": "0.0000000000000",
            "Grupo": "3",
            "Situacao": "C",
            "Email": "tonnysanctos01@hotmail.com",
            "AvisoPagamento": "S"
        }
    ]
}
    


console.log(run(body))