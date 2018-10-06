import { getNumberOfCurrencyDigits } from '@angular/common';

export class Man {

    static nextid = 0;

    id:         number;
    firstname:  string;
    surename:   string;
    sex:        string;
    birthdate:  Date;
    workgroup:  string;

    constructor(firstname: string, surename: string, sex?: string, birthdate?: Date) {
        this.id         = this.createID();
        this.firstname  = firstname;
        this.surename   = surename;
        this.sex        = sex || 'M';
        this.birthdate  = birthdate || new Date(this.getRandom(1900, 2000), this.getRandom(1, 12), this.getRandom(1, 28));
    }

    private getRandom(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    private createID(): number {
        Man.nextid++;
        return Man.nextid;
    }

}
