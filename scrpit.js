let valor_anterior = document.getElementById("valor_anterior");
let vaor_atual = document.getElementById("vaor_atual");
let btns = document.getElementById("btns");

class Calculadora {
    valor_anterior;
    vaor_atual;
    valor_futuante;
    operador;
    constructor(valor_anterior, vaor_atual){
        this.valor_anterior = valor_anterior;
        this.vaor_atual = vaor_atual;
        this.valor_futuante = "";
        this.operador = "";
    }

    add_valor_atual(valor){
            if(this.vaor_atual.textContent.includes('.') && valor == '.'){
                return
            }
            this.valor_futuante = valor;
            this.vaor_atual.textContent += this.valor_futuante;   
    }

    add_valor_anterior_set_operador(operador){
        this.operador = operador;
        this.valor_anterior.textContent = this.vaor_atual.textContent;
        this.vaor_atual.textContent = '';
        console.log(this.operador)
    }

    operacoes(){
        let operacao = this.operador;

        switch(operacao){
            case "+":
                this.soma()
                break
            case "-":
                this.subtracao()
                break
            case "*":
                this.multiplicacao();
                break
            case "/":
                this.divisao()
                break
        }
    }
    soma(){
        this.vaor_atual.textContent = +vaor_atual.textContent + +valor_anterior.textContent
    }
    subtracao(){
        this.vaor_atual.textContent = +valor_anterior.textContent - +vaor_atual.textContent
    }
    multiplicacao(){
        this.vaor_atual.textContent = +valor_anterior.textContent * +vaor_atual.textContent
    }
    divisao(){
        this.vaor_atual.textContent = +valor_anterior.textContent / +vaor_atual.textContent
    }


}

let cal = new Calculadora(valor_anterior, vaor_atual)

btns.addEventListener("click", (e) => {
    let valor = e.target.textContent;

    if(Number(valor) >= 0 || valor == "."){
        cal.add_valor_atual(valor)
    }else{
        if(!cal.valor_anterior.textContent){
            cal.add_valor_anterior_set_operador(valor)
        }else{
            cal.operacoes()
            cal.add_valor_anterior_set_operador(valor)
        }
    }
})