

export class Page{
    
    protected formatar(data:string):string{
        let date = new Date(data).toLocaleDateString();
        return date;
      }
}