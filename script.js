class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) 
    {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }

    clear() {
        this.currentOperandTextElement.innerText = ''
        this.previousOperandTextElement.innerText = ''
        this.operation = undefined
        this.currentOperand = ''
    }

    delete() {
        this.currentOperandTextElement.innerText = ''
        this.currentOperand = ''
    }

    appendNumber(number) {
        this.currentOperand = number
    }

    chooseOperation(operation) {
        if (operation ==  '÷'){
            operation = '/'
        }
        this.currentOperand = operation
    }

    compute(){
        this.previousOperandTextElement.innerText = this.currentOperandTextElement.innerText
        
        this.currentOperandTextElement.innerText = eval(this.previousOperandTextElement.innerText)
    }

    updateDisplay() {
        this.currentOperandTextElement.innerText += this.currentOperand
        this.currentOperand = ''
    }
}



const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')



const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

deleteButton.addEventListener('click', () => {
    calculator.delete()

})

allClearButton.addEventListener('click', () => {
    calculator.clear()
})

equalsButton.addEventListener('click',() => {
    calculator.compute()
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})