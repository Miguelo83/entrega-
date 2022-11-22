import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CompanyI } from './company';
import { CompanyService } from './company.service';

import Swal from 'sweetalert2';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FormComponent } from './form/form.component';
import { Subscription } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {ViewChild} from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit, OnDestroy, AfterViewInit {

  dataSource: any = [];
  displayedColumns: string[] = ['id', 'company_name', 'company_rut', 'dir', 'action'];
  private subscribe: Subscription = new Subscription();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(
    private companySvc: CompanyService,
    private matDialog: MatDialog


  ) { }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.paginator._intl.itemsPerPageLabel = 'Registros por página';
  }
  ngOnDestroy(): void {
  
  }

  ngOnInit(): void {

    this.getCompanies();
  }

  getCompanies(): void {
    this.companySvc.getAllCompanies().subscribe((companies: CompanyI[]) => {
      this.dataSource = new MatTableDataSource<CompanyI>(companies);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    
    });
  }

  onDelete(id: string): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "¡No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Sí, bórralo!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.companySvc.delete(id).subscribe(res => {
          console.log('Deleted');
          this.getCompanies();
        });
        Swal.fire(
          '¡Eliminado!',
          'El registro ha sido eliminado.',
          'success'
        )
      }
    })
  }
  onUpateCompany(id:string,company: CompanyI): void {
    this.companySvc.updateCompany(id,company).subscribe(res => {
      if (res) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: '¡Registro actualizado!',
          showConfirmButton: false,
          timer: 1500
        });
        this.getCompanies();
      }
    });
  }
  onEdit(id: string): void {
    this.companySvc.getByid(id).subscribe((res:any) => {
      // let  categoriesId:CategoryI[] = res.categories.map((res:CompanyI)=>res.id);
      // console.log(categoriesId);
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.data = {
        name: res.company_name,
        rut: res.company_rut,
        dir: res.dir,
        // categories: categoriesId,
      }
      const dialogRef = this.matDialog.open(FormComponent, dialogConfig);
      dialogRef.afterClosed().subscribe((res: CompanyI) => {
        if (res) {
          console.log(res);
          this.onUpateCompany(id,res);
        }
      });
    })

      

  }




  onNewCompany(company: CompanyI): void {
    this.subscribe?.add(
      this.companySvc.newCompany(company).subscribe(res => {
        console.log(res);
        
        if (res) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: '¡Registro guardado!',
            showConfirmButton: false,
            timer: 1500
          })
          this.getCompanies();
        }

      })
    )

  }

  openDialog(): void {
    const dialoConfig = new MatDialogConfig();
    dialoConfig.disableClose = true;
    dialoConfig.autoFocus = true;
    const dialogRef = this.matDialog.open(FormComponent, dialoConfig);
    dialogRef.afterClosed().subscribe(res => {
      console.log('form',res);
      
      if (res) {
        this.onNewCompany(res);
      }
    });

  }


}


