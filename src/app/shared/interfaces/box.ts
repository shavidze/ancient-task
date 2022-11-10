export interface IBox {
  currency: string;
  description: string;
  free: boolean;
  iconUrl: string;
  id: string;
  name: string;
  price: number;
}

export interface IBoxContainer {
  node: IBox;
}

export interface IBoxEdge {
  edges: IBoxContainer[];
}

export interface IBoxDTO {
  boxes: IBoxEdge;
}
