class Ingreso extends Data{
    static contadorIngresos = 0;

constructor(descripcion, valor){
    super(descripcion, valor);
    this._id = ++Ingreso.contadorIngresos;

}
get id(){
    return this._id;
}
}    