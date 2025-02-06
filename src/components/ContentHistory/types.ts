export interface IData {
    id: string
    url: string
    metrics: Metrics
    strategy: string
  }

export interface Metrics {
    labels: string[]
    datasets: Dataset[]
  }

export interface Dataset {
    data: number[]
  }
