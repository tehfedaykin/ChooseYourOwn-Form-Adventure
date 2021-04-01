import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from '../data.service';
import { FormModalComponent } from '../form-modal/form-modal.component';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss']
})
export class TemplateDrivenComponent implements OnInit {

  public myFormModel = {
    myFavorites: {
      musical: '',
      number: ''
    },
    castMembers: [{
      role: '',
      actor: ''
    }]
  }
  public musicalList = this.musicalService.getMusicals();

  constructor(private musicalService: DataService, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  removeCastMember(i: number): void {
    this.myFormModel.castMembers.splice(i,1);
  }


  addCastMember(): void {
    this.myFormModel.castMembers = [
      ... this.myFormModel.castMembers,
      {
        role: '',
        actor: ''
      }
    ]
  }

  submitForm():void {
    this.dialog.open(FormModalComponent, {
      width: '600px',
      data: {formData: this.myFormModel}
    });
  }

}
