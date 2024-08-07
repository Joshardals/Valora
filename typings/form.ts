export interface ProductValidationType {
  name: string;
  price: number;
  description?: string;
  image?: string;
}

export interface RegisterValidationType {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface SignInValidationType {
  email: string;
  password: string;
}

export interface WaitListValidationType {
  email: string;
}
