import { Component, OnInit } from '@angular/core';
import { Hotkey, HotkeysService } from 'angular2-hotkeys';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {
  text?: string = "";
  negated: boolean = false;
  constructor() { }
  ngOnInit(): void {
  }
  clear() {
    this.text = "";
    this.negated = false;
  }
  setVal(val: string){
    if(val==='+' || val==='-' || val==='%' || val==='*' || val==='/'){
      this.ans();
    }
    this.text += val;
  }
  ans(){
    if(this.text !== ""){
      this.text = eval(this.text!);
    }
  }
  negate(){
    let lastnum: number;
    let len = this.text?.length;
    let operatorFound: boolean = false;
    let i: number;
    for(i=len!; i>0; i--){
      if(this.text?.charAt(i!)==='+' || this.text?.charAt(i!)==='-' || this.text?.charAt(i!)==='%' || this.text?.charAt(i!)==='*' || this.text?.charAt(i!)==='/'){
        operatorFound = true;
        if(this.text?.charAt(len!-1)===')'){
          lastnum = Number(this.text?.substring(i!+1,len!-1));
        }
        else{
          lastnum = Number(this.text?.substring(i!+1,len));
        }
        break;
      }
    }
    if(!operatorFound){
      this.text = (0-Number(this.text)).toString();
    }
    else if(this.negated){
      this.text = this.text!.substring(0,i!-1) + lastnum!;
      this.negated = false;
    }
    else{
      this.text = this.text!.substring(0,i!+1) + '(' + (0-lastnum!) + ')';
      this.negated = true;
    }
  }
  back(){
    let len = this.text?.length;
    this.text = this.text!.substring(0,len!-1);
  }
}
