// use 'strict;'

var calculatorState = {
  currentValue: '',
  previousValue: '',
  pendingOperation: ''
};

window.calculatorApp = {
  clickDigit: function(digit) {
    if ((digit !== 0) || calculatorState.currentValue){
      calculatorState.currentValue += digit;
    }
    display.value=calculatorState.currentValue;
  },  
    clickNumber: function(digit) {
    },
    clickDecimal: function() {
    },
    clickOperator: function(op) {
    },
    clickEquals: function() {
    },
  }