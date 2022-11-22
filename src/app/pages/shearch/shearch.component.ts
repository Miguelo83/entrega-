import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { map,debounceTime,distinctUntilChanged,filter,tap } from 'rxjs/operators';
import { SherchService } from 'src/app/services/sherch.service';

@Component({
  selector: 'app-shearch',
  templateUrl: './shearch.component.html',
  styleUrls: ['./shearch.component.scss']
})
export class ShearchComponent implements OnInit {

  @Output() onSerach = new EventEmitter;

  constructor(
    private fb: FormBuilder,
    private sherchSvc: SherchService

  ) { }

  FrmSherch = this.fb.group({
    search: ['']
  });

  ngOnInit(): void {
    this.onChange();
    // this.sherchSvc.getSearch('angular').subscribe(res => {
    //   console.log(res);
    // }
    // );
    
  }
  /*onChange() {
    this.FrmSherch.valueChanges.subscribe(val => {
     this.onSerach.emit(val.search);
    });
  }*/

  onChange() {
    this.FrmSherch.valueChanges.pipe(
      map((val) => val.search?.trim()),
      debounceTime(400),
      distinctUntilChanged(),
      filter((val) => val !== ''),
      tap((search) => this.onSerach.emit(search))
      ).subscribe();
     
  }
  

}
