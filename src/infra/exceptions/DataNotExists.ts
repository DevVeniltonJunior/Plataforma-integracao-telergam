export class DataNotExists extends Error {
  constructor(param: string) {
    super(param)
    this.name = `Data not exists in database: ${param}`
  }
}