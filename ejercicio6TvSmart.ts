class Televisor{

    protected canalActual:number;
    protected volumenActual:number;
    protected estaPrendido:boolean;

    constructor(paramCanal:number,paramVolumen:number){
        this.canalActual=paramCanal;
        this.volumenActual=paramVolumen;
        this.estaPrendido=false;
    }

    public getCanalActual():number{
        return this.canalActual;
    }
    public setCanal(paramCanal:number):void{
        this.canalActual=paramCanal;
    }
    public getVolumenActual():number{
        return this.volumenActual;
    }
    public setVolumen(paramVolumen:number):void{
        this.volumenActual=paramVolumen;
    }
    protected prenderApagar():void{
        if(this.estaPrendido===true){
            this.estaPrendido=false;
        }else{
            this.estaPrendido=true;
        }
    }
}


class SmartTv extends Televisor{

    private navegarPorInternet:boolean;
    private prenderWiFi:boolean;

    constructor(paramCanal:number,paramVolumen:number){
        super(paramCanal,paramVolumen);
        this.navegarPorInternet = false;
        this.prenderWiFi=false;
    }


    public setNavegar():void{
        this.navegarPorInternet=true;
    } 
    public dejarDeNavegar():void{
       this.navegarPorInternet = false;
       
    }
    public encenderWifi():void{
        this.prenderWiFi = true;
    }
    public apagarWifi():void{
        this.prenderWiFi = false;
    }
  
    public setCanal(paramCanal: number): void {
        this.canalActual = paramCanal;        
    }
    public llamarMetodoPadre():void{
        this.prenderApagar();
    }

}








let TVdeTubo: Televisor = new Televisor(45,25);




let volumenSmart:number = 65;
let canalSmart:number = 98;

let televisorSmart:SmartTv = new SmartTv(canalSmart,volumenSmart);

televisorSmart.getCanalActual();
