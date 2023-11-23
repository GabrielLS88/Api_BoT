function run(value) {
    var cleanValue = value.replace(/[^\d]+/g, '');
  
    if (cleanValue.length === 11) {
      // Validação de CPF
      if (/^(\d)\1{10}$/.test(cleanValue)) {
        return 'CPF OU CNPJ INVALIDO';
      }
      
      var sum = 0;
      for (var i = 0; i < 9; i++) {
        sum += parseInt(cleanValue.charAt(i)) * (10 - i);
      }
      
      var remainder = 11 - (sum % 11);
      if (remainder === 10 || remainder === 11) {
        remainder = 0;
      }
      
      if (remainder !== parseInt(cleanValue.charAt(9))) {
        return 'CPF OU CNPJ INVALIDO';
      }
  
      sum = 0;
      for (var k = 0; k < 10; k++) {
        sum += parseInt(cleanValue.charAt(k)) * (11 - k);
      }
      
      remainder = 11 - (sum % 11);
      if (remainder === 10 || remainder === 11) {
        remainder = 0;
      }
  
      if(remainder === parseInt(cleanValue.charAt(10))){
        return "PESSOA FISICA";
      }else{
        return 'CPF OU CNPJ INVALIDO';
      }
  
    } else if (cleanValue.length === 14) {
      if (/^(\d)\1{13}$/.test(cleanValue)) {
        return 'CPF OU CNPJ INVALIDO';
      }
      
      function calculateDigits(sum, length) {
        var remainder = sum % 11;
        return (remainder < 2) ? 0 : 11 - remainder;
      }
  
      var length = 12;
      var numbers = cleanValue.substring(0, length);
      var digits = cleanValue.substring(length);
      var sum = 0;
      var pos = length - 7;
  
      for (var i = length; i >= 1; i--) {
        sum += numbers.charAt(length - i) * pos--;
        if (pos < 2) {
          pos = 9;
        }
      }
  
      var result = calculateDigits(sum, length);
  
      if (result !== parseInt(digits.charAt(0))) {
        return 'CPF OU CNPJ INVALIDO';
      }
  
      length = length + 1;
      numbers = cleanValue.substring(0, length);
      sum = 0;
      pos = length - 7;
  
      for (var j = length; j >= 1; j--) {
        sum += numbers.charAt(length - j) * pos--;
        if (pos < 2) {
          pos = 9;
        }
      }
  
      result = calculateDigits(sum, length);
  
      if(result === parseInt(digits.charAt(1))){
        return "PESSOA JURIDICA";
      }else{
        return 'CPF OU CNPJ INVALIDO';
      }
  
    } else {
      return 'CPF OU CNPJ INVALIDO';
    }
  }