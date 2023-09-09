//Aluno: Céu do Nascimento
class Conta{ 

    constructor(saldo){ 

        this.saldo = saldo; 

        this.transacao = []; 

    }     

Sacar(valor){ 

    let currentValue = this.saldo; 

    this.transacao.forEach((element)=>{ 

        currentValue = element.operacao(currentValue); 

    }) 

    if(currentValue >= valor){ 

        let obj = { 

            operacao: (currentValue)=>{ 

                return(currentValue - valor); 

            }, 

            valor: valor, 

        }; 

        this.transacao.push(obj);  

    }    

    else{ 

        alert("Não é possível realizar esse saque, pois a o valor existente não é o suficiente."); 

    } 

} 

Historico(){ 

    let toString = "HISTORICO BANCARIO \n VALOR | SALDO \n" 

    let currentValue = this.saldo; 

    this.transacao.forEach( element =>{ 

         

        if(element.operacao(currentValue) > currentValue){ 

            currentValue = element.operacao(currentValue); 

            toString += `+R$${element.valor} | ${currentValue}\n`; 

        } 

        else{ 

             

            currentValue = element.operacao(currentValue); 

            toString += `-R$${element.valor} | ${currentValue}\n`; 

        } 

    }) 

    if(toString === "HISTORICO BANCARIO \n VALOR | SALDO \n"){ 

        alert("você não possui um histórico bancário") 

    } 

    else{ 

        alert(toString); 

    } 

} 

Deposito(valor){ 

        let obj = { 

            operacao: (currentValue)=>{ 

                return(currentValue + valor); 

            }, 

            valor: valor, 

        }; 

        this.transacao.push(obj);  

} 

SaldoAtual(){ 

    let currentValue = this.saldo; 

    this.transacao.forEach((element)=>{ 

        currentValue = element.operacao(currentValue); 

    }) 

    alert("Valor desse momento: " + currentValue); 

} 

} 



let glnd = true 

const c1 = new Conta(1500); 

while(glnd){ 

let opc = prompt("Bem vindo ao sistema de operações. Por favor, escolha uma opção \n1. Sacar; \n2. Depositar; \n3. Verificar saldo; \n4. Histórico. \n5. Sair.") 

let i = +opc; 

let choices 

switch(i){  

    case 1:  

    choices = prompt("Quanto deseja sacar? ") 

    let values = +choices; 

    c1.Sacar(values); 

    break; 

    case 2:  

    choices = prompt("Quanto deseja depositar? ") 

    let value = +choices; 

    c1.Deposito(value); 

    break; 

    case 3: 

    c1.SaldoAtual(); 

    break; 

    case 4: 

    c1.Historico();     

    break; 

    case 5:  

    glnd = false 

    break; 

} 

}