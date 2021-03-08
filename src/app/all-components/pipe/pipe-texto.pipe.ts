import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeTexto'
})
export class PipeTextoPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value[0].toUpperCase() + value.substring(1).toLowerCase();
  }

}
