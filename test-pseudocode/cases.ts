// Case 1 Pseudocode
interface FinalResults {[key: string]: {lembar: number, sisa: number}}

class Money {
    private _list_fixed: number[];
    constructor(){
        this._list_fixed = [100000, 75000, 50000, 20000, 10000, 5000, 2000, 1000, 500, 100, 50];
    }

    get listFixed() {
        return this._list_fixed;
    }

    public exchange(money: number): void{
        let uangSisa = money;
        const _list_fixed = new Money().listFixed;
        let results: FinalResults = {};

        let i=0;
        while(uangSisa != 0){
            const pecahanUang = _list_fixed[i];
            if(uangSisa >= pecahanUang){
                uangSisa -= pecahanUang;
                if(!results[pecahanUang]){
                    results[pecahanUang] = {
                        lembar: 1,
                        sisa: uangSisa
                    };
                }else{
                    results[pecahanUang].lembar += 1;
                    results[pecahanUang].sisa = uangSisa;
                }
            }else{
                i++;
            }
        }

        this.Display(results);
    }

    public Display(results: FinalResults): void{
        for (const property in results) {
            console.log(`${results[property].lembar} Lembar Rp.${property}, sisa ${results[property].sisa}`)
          }
    }
}

const results = new Money().exchange(88700);

// Case 3
// Select * From Order Where customer_id = 101;

// Select COUNT(ord.customer_id) From Order ord Where customer_id = 101;

// SELECT YEAR(t1.order_date) as 'Year', MONTH(t1.order_date) as 'Month' ,COUNT(*) as 'Number of Transactions'
// FROM orders t1
// GROUP BY YEAR(t1.order_date), MONTH(t1.order_date)
// ORDER BY YEAR(t1.order_date) ASC
