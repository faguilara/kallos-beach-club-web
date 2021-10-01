import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'secureDom'
})
export class SecureDomPipe implements PipeTransform {

  constructor(private _domSanitizer:DomSanitizer){}

  transform(value: string, ...args: unknown[]): unknown {
    return this._domSanitizer.bypassSecurityTrustResourceUrl(value);
  }

}
