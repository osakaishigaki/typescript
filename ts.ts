class address {
  // public zip: string;
  private address:any;

  public constructor(private zip: string){
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

  get zipstr(): string{
    return this.zip;
  }

  public getzip():string {
    return this.zip;
  }
  public getaddress():string{
    let here = this.address[this.zip];
    return `${here.pre} ${here.city}`;
  }
}

let myaddress= new address('888-8888');
console.log(myaddress.zipstrgit );
