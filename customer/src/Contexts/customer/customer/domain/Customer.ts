export interface CustomerBody {
  readonly id?: string | undefined;
  email: string;
  password: string;
  created: Date
}

export class Customer {
  private readonly id?: string | undefined;
  private email: string;
  private password: string;
  private created: Date;

  private constructor(data: CustomerBody) {
    this.id = data.id;
    this.email = data.email;
    this.password = data.password;
    this.created = data.created;
  }

  public static create(id: string, email: string, password: string): Customer {
    return new Customer({
      id,
      email,
      password,
      created: new Date()
    })
  }

  static fromPrimitive(data: any): Customer {
    return new Customer({
      id: data._id,
      ...data
    });
  }

  public static toPrimitive(data: Customer): any {
    return {
      id: data.id,
      ...data
    };
  }
}
