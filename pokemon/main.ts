class player{
    private ataque:number;//esse e a ataque do player
    private defesa:number;//essa e a defesa do player
    private velocidade:number;//essa e a velocidade do player
    private vida:number;//essa e a vida do player
    private pontos:number;//a propriedade pontos e os pontos que serao distribuidos sobre os status de vida,defesa,velocidade e ataque
    public constructor(){
            this.ataque=0;
            this.defesa=0;
            this.velocidade=0;
            this.vida=0;
            this.pontos=10;
    }
    
    public getpontos():number{//essa funcao retorna o atributo pontos
        return this.pontos;
    }
    public setpontos(value:number):void{//essa funcao altera o valor do atributo pontos
        this.pontos+=value;
    }
    
    public getdefesa():number{//essa funcao retorna o atributo defesa
        return this.defesa;
    }
    public setdefesa(value:number):void{//essa funcao altera o valor do atributo defesa
        this.defesa+=value;
    }
    
    public getvelocidade():number{//essa funcao retorna o atributo velocidade
        return this.velocidade;
    }
    public setvelocidade(value:number):void{//essa funcao altera o valor do atributo velocidade
        this.velocidade+=value;
    }

    public getvida():number{//essa funcao retorna o atributo vida
        return this.vida;
    }
    public setvida(value:number):void{//essa funcao altera o valor do atributo vida
        this.vida+=value;
    }

    public getataque():number{//essa funcao retorna o atributo ataque
        return this.ataque;
    }
    public setataque(value:number):void{//essa funcao altera o valor do atributo ataque
        this.ataque+=value;
    }
    
    public minustatus(){//essa funcao executa a operacao -- no valor pontos 
        this.pontos--
    }
    public plustatus(){//essa funcao executa a operacao ++ no valor pontos
        this.pontos++
    }
}

var p1=new player()
var p2=new player()

function setstatusp1(status,valor){//essa funcao serve para alterar os atributos da variavel p1
    if (status==='ataque'){
        p1.setataque(valor);
    }
    else if(status==='defesa'){
        p1.setdefesa(valor);
    }
    else if(status==='velocidade'){
        p1.setvelocidade(valor);
    }
    else if(status==='vida'){
        p1.setvida(valor);
    }
}

function setstatusp2(status,valor){//essa funcao serve para alterar os atributos da variavel p2
    if (status==='ataque'){
        p2.setataque(valor);
    }
    else if(status==='defesa'){
        p2.setdefesa(valor);
    }
    else if(status==='velocidade'){
        p2.setvelocidade(valor);
    }
    else if(status==='vida'){
        p2.setvida(valor);
    }
}

function setstatusp(valor:number,status:string,p:number){//essa funcao serve para generalizar as funcoe setstatusp2 e setstatusp1
    //sendo o atributo p, que aparecera bastante nas proximas funcoes, o player a qual estou se referindo
    //o valor e o valor a qual vou somar ao status desejado
    // e o status se refere a qual status quero alteras
    if(p===1){
        setstatusp1(status,valor)
    }
    else{
        setstatusp2(status,valor)
    }

}
function setpontosp1(){//essa funcao serve para alterar o atributos pontos no objeto p1, e atualizar no html
    if (p1.getpontos() > 1) {
        p1.minustatus()
        document.getElementById('pontos1').innerText = p1.getpontos().toString(); // Atualiza a exibição dos pontos restantes
    }
    else{
        document.getElementById('statusp1').innerHTML = '';
    }
}
function setpontosp2(){//essa funcao serve para alterar o atributos pontos no objeto p2, e atualizar no html
    if (p2.getpontos() > 1) {
        p2.minustatus()
        document.getElementById('pontos2').innerText = p2.getpontos().toString(); // Atualiza a exibição dos pontos restantes
    }
    else{
        document.getElementById('statusp2').innerHTML = '';
    }
}
function setpontos(p:number){
    //essa funcao serve para geralizar as funcoes setpontosp2 e setpontosp1
    //a funcao p assume 1 ou 2 se referindo a qual player quer se referir
    if(p===1){
        setpontosp1()
    }
    else{
        setpontosp2()
    }
}

function setp(valor:number, id:string, status:string,p:number) {
    setstatusp(valor,status,p)
    setpontos(p)
}//essa e a funcao geral de tudo alterando o atributo status, atualizando o html, e atualizando o atributo pontos