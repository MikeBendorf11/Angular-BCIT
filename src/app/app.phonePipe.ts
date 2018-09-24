import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'phonePipe' })

export class PhonePipe implements PipeTransform {
    transform(pNum: string): string {
        let numArr = pNum.match(/\d+/g).map(Number);
        let numStr = '';
        numArr.forEach(v => numStr += v);
        let result = '(' + numStr.slice(0,3) + 
                     ') ' + numStr.slice(3,6) + 
                     '-' + numStr.slice(7,10)
                    console.log(result);
        return 'fah';
    }
}