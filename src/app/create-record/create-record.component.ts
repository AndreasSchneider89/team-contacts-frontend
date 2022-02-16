import { Component, OnInit } from '@angular/core';
import { Record } from '../record';
import { Router, ActivatedRoute } from '@angular/router';
import { RecordService } from '../record.service';


@Component({
  selector: 'app-create-record',
  templateUrl: './create-record.component.html',
  styleUrls: ['./create-record.component.css']
})
export class CreateRecordComponent implements OnInit {

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private recordService: RecordService) { }

  record: Record = {
    firstName: "",
    lastName: "",
    email: ""
  }

  ngOnInit(): void {
    if (this.router.url != '/create') {
      var id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
      this.recordService.getRecordById(id).subscribe((result) => {
        this.record = result;
      });
    }
  }

  save(): void {
    this.recordService.addRecord(this.record).subscribe();
    this.router.navigate(['records']);
  }
}
