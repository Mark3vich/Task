import { Injectable } from '@angular/core';

@Injectable()
export class HeaderActiveService {
    public isActiveHeader: boolean = false;

    public changeTheStateOfTheHeader():void {
        this.isActiveHeader = !this.isActiveHeader;
    }

    public getStateHeader():boolean {
        return this.isActiveHeader;
    }
}   