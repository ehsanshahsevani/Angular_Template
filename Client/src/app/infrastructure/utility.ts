import { ResultValidation } from "../models/ResultValidation";

export class utility {

  constructor() { }

  public static ErrorHandling(error: any, resultValidation: ResultValidation)
    : ResultValidation {

    let result = new ResultValidation();

    if (error.status == 400) {

      for (let index = 0; index < error.error.errors.length; index++) {

        const err = error.error.errors[index];
        result.Errors.push(err.message);
        console.log(err.message);

      }

    }

    if (error.status === 422) {

      result.Errors.push("تمام اطلاعات خود را در فرم چک کنید");

    }

    return result;

  }
  
}
