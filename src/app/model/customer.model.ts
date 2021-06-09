import { IorgUnit } from "./orgunit.model"
import { Ipostal } from "./postal.model"

export class Icustomer {
      
  customerId?: number
  customerFirstName: string
  customerLastName: string
  orgUnit: IorgUnit
  postal: Ipostal

}