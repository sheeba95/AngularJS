import { Injectable } from '@angular/core';

@Injectable()
export class RemotecallService {

  constructor() { }

  callremote = function() {
      console.log("I am in service")
  }

}
