export interface IAuto {
  Id: number;
  Modelo: string;
  Marca: string;
  Anio: string;
  precio: number;
}

export function totalAutos(listaAutos: IAuto[]): void {
  console.log(listaAutos.length);
}
