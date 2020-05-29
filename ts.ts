interface addressformat {
  zip: string;
  prefecture: string;
  city: string; 
}

class address implements addressformat {
  // public zip: string;
  readonly address:any;
  public:zip;
  

  public constructor(private _zip: string){
    this.address=
    {
      '999-9999':{
        'pre':'aaa',
        'city':'aaaa'
      },
      
      '888-8888':{
        'pre':'bbb',
        'city':'bbbb'
      },
      

    };
    // this.zip= zip;
  }

  get zip(): string{
    return this._zip;
  }
  set zip(value.string){
    this._zip = value;
  }

  public getaddress():string{
    let here = this.address[this.zip];
    return `${here.pre} ${here.city}`;
  }
}

let myaddress= new address('888-8888');
// myaddress.zip = '777-7777';

console.log(myaddress.zip);

console.log(myaddress.getaddress());
console.log(myaddress.addresses);
myaddress.address ='error';
