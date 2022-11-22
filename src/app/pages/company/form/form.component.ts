import { Component, Inject, inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategoryI, CompanyI } from '../company';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  category:CategoryI[] = [];


  constructor(
  private fb:FormBuilder,
  private companySvc:CompanyService,
  public dialogRef: MatDialogRef<FormComponent>,
  @Inject(MAT_DIALOG_DATA) public data: CompanyI
  ) { }


  form = this.fb.group({
    company_name: ['', [Validators.required]],
    company_rut: ['', [Validators.required]],
      
    dir:['']
  });


  ngOnInit(): void {
    this.initForm(this.data);
    
   
  }


  
    // onSave(){
  //   const valueForm={
  //     company_name:this.form.value.company_name,
  //     company_rut:this.form.value.company_rut,
  //     dir:this.form.value.dir
  //   }

  //   console.log(this.form.value);
  //   this.companySvc.newCompany(valueForm).subscribe(
  //     res=>console.log(res)
  //   )
  // }
  close(){
    this.dialogRef.close();
  }

  initForm(data:CompanyI):void{
    if(data){
     this.form.patchValue({
      company_name: data.company_name,
      company_rut: data.company_rut,
      dir: data.dir

    });
    }
  }

  isValidField(field: string):string{
    const validatedField = this.form.get(field);
    return (!validatedField?.valid && validatedField?.touched) ? 'is-invalid' : validatedField?.touched ? 'is-valid' : '';
   }

}
