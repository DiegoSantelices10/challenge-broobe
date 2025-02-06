export interface IData {
  labels: string[]
  datasets: Dataset[]
}

export interface Dataset {
  data: number[]
}

export interface IBarChartProps {
  viewData: IData
}
