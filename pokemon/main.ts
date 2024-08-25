class player{
    private ataque:number;
    private defesa:number;
    private velocidade:number;
    private vida:number;
    private pontos:number;
    public constructor(){
            this.ataque=0;
            this.defesa=0;
            this.velocidade=0;
            this.vida=0;
            this.pontos=10;
    }
    
    public getpontos():number{
        return this.pontos;
    }
    public setpontos(value:number):void{
        this.pontos+=value;
    }
    
    public getdefesa():number{
        return this.defesa;
    }
    public setdefesa(value:number):void{
        this.defesa+=value;
    }
    
    public getvelocidade():number{
        return this.velocidade;
    }
    public setvelocidade(value:number):void{
        this.velocidade+=value;
    }

    public getvida():number{
        return this.vida;
    }
    public setvida(value:number):void{
        this.vida+=value;
    }

    public getataque():number{
        return this.ataque;
    }
    public setataque(value:number):void{
        this.ataque+=value;
    }
    
    public minustatus(){
        this.setpontos(-1);
    }
    public plustatus(){
        this.setpontos(+1);
    }
}

var p1=new player()
var p2=new player()

function setstatusp1(status,valor){
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
        p1.setvelocidade(valor);
    }
}

function setstatusp2(status,valor){
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
        p2.setvelocidade(valor);
    }
}

function setstatusp(valor:number,status:string,p:number){
    if(p===1){
        setstatusp1(status,valor)
    }
    else{
        setstatusp2(status,valor)
    }

}
function setpontosp1(){
    if (p1.getpontos() > 1) {
        p1.minustatus()
        document.getElementById('pontos1').innerText = p1.getpontos().toString(); // Atualiza a exibição dos pontos restantes
    }
    else{
        document.getElementById('statusp1').innerHTML = '';
    }
}
function setpontosp2(){
    if (p2.getpontos() > 1) {
        p2.minustatus()
        document.getElementById('pontos2').innerText = p2.getpontos().toString(); // Atualiza a exibição dos pontos restantes
    }
    else{
        document.getElementById('statusp2').innerHTML = '';
    }
}
function setpontos(p:number){
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
}