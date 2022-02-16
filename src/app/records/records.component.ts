import { Component, OnInit } from '@angular/core';
import { Record} from '../record';
import { RecordService } from '../record.service';


@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent implements OnInit {

  constructor(private recordService:RecordService) { }

  records : Record[] = [];

  ngOnInit(): void {
    this.recordService.getRecords().subscribe((result) =>{
      console.log(result);
      this.records = result;
    });
  }

  deleteRecord(record: Record): void{
    this.recordService.deleteRecord(record).subscribe();
    this.records = this.records.filter(b => b != record)
  }
}