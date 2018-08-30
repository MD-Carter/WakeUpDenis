var Calculator = {

    input: '',
    operator: '',

  Args:function (operator, arg1, arg2) {
        // Арифметическая функция
      arg1 = Number(arg1);
      arg2 = Number(arg2);
      if (operator === '+'){
         a = arg1 + arg2;
      }else if (operator === '-'){
          a = arg1 - arg2;
      }else if (operator === '*'){
          a = arg1 * arg2;
      }else if (operator === '/'){
          a = arg1 / arg2;
      }
      a = String(a);
      return a
  },

    Reconciliation:function (str) {
        // Функция проверки количества знаков в строке
      var recon = 0;
      for (var i of str) {
          if (i == '+' || i == '-' || i == '*' || i == '/') {
              recon += 1;
          }
      }
      if (recon > 0) {
          return false
      }else return true
    },

    clickAll:function(n) {
        // Функция события после клика кнопки
        if (n === '+' || n ==='-' || n === '*' || n === '/') {
            var rec = this.Reconciliation(this.input);
            if (rec == true) {
                console.log(rec);
                this.input += n;
                this.operator = n;
                inp.value = this.input;
            } else {
                var arg1 = this.input.split(this.operator)[0];
                var arg2 = this.input.split(this.operator)[1];
                var add = this.Args(this.operator, arg1, arg2);
                this.operator = n;
                this.input = add + this.operator;
                inp.value = this.input;
            }
        }else if (n === '=') {
            var arg1 = this.input.split(this.operator)[0];
            var arg2 = this.input.split(this.operator)[1];
            var add = this.Args(this.operator, arg1, arg2);
            this.input = add;
            inp.value = this.input;
        }else if (n === 'c'){
            this.input = '';
            this.operator = '';
            inp.value = this.input;
        }else {
            this.input += n;
            inp.value = this.input;
        }
}
};

