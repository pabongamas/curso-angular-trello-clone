import { Component,EventEmitter,Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators,FormControl } from '@angular/forms';
import { Colors } from '@models/color.model';

import {BoardsService} from '@services/boards.service';

@Component({
  selector: 'app-board-form',
  templateUrl: './board-form.component.html'
})
export class BoardFormComponent {
  form=this.formBuilder.nonNullable.group({
    title:['',[Validators.required]],
    backgroundColor:new FormControl<Colors>('sky',{
      nonNullable:true,
      validators:[Validators.required]
    })
  });
  @Output() closeOverlay=new EventEmitter<boolean>();
  constructor(
    private formBuilder:FormBuilder,
    private boardsService:BoardsService,
    private router:Router
  ){}

  doSave(){
    if(this.form.valid){
      const {title,backgroundColor} =this.form.getRawValue();
      this.boardsService.createBoard(title,backgroundColor)
      .subscribe(board=>{
        console.log(board);
        this.closeOverlay.next(false);
        this.router.navigate(['/app/boards',board.id]);
      })
    }else{
      this.form.markAllAsTouched();
    }
  }
}
