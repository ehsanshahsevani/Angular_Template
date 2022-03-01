export class ResultValidation {

  public constructor() {

    this.Errors = [];

  }

  public Errors: string[];

  public HasError(): boolean {

    if (this.Errors.length > 0) {

      return true;

    }

    return false;

  }

  public GetErrorText(): string {

    let textError: string = '';

    textError += `خطاها \n`;

    for (var i = 0; i < this.Errors.length; i++) {

      const err = this.Errors[i];
      textError += `${(i + 1)} - ${err}\n`;

    }

    return textError;

  }

}
