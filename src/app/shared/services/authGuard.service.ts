import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuardService {
    public user: string | null ; 
    public getStateUser(): boolean {
        this.user = localStorage.getItem('user');
        if(this.user !== null) { 
            return true;
        }
        return false;
    }
}   