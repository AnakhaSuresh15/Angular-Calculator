import { Component, OnInit } from '@angular/core';
import { Hotkey, HotkeysService } from 'angular2-hotkeys';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {
  text?: string = "";
  constructor() { }
  ngOnInit(): void {
  }
  clear() {
    this.text = "";
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
    let len = this.text?.length;
    for(let i=len; i!>0; i!--){
      if(this.text?.charAt(i!)==='+' || this.text?.charAt(i!)==='-' || this.text?.charAt(i!)==='%' || this.text?.charAt(i!)==='*' || this.text?.charAt(i!)==='/'){
        this.text = this.text!.substring(0,i!+1) + (0-Number(this.text?.substring(i!+1,len)));
        break;
      }
    }
  }
  back(){
    let len = this.text?.length;
    this.text = this.text!.substring(0,len!-1);
  }
}
