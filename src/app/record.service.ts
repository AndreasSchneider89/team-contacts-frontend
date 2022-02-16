import { Injectable } from '@angular/core';
import { Record } from './record';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecordService {

  constructor(private httpClient: HttpClient) { }

  recordsUrl : string = "/api/records";

  getRecords() : Observable<Record[]>{
    var response = this.httpClient.get<Record[]>(this.recordsUrl);
    return response;
  }

  deleteRecord(record: Record): Observable<Record>{
    var response = this.httpClient.delete<Record>(this.recordsUrl + "/" + record.id);
    return response;
  }

  getRecordById(id: number) : Observable<Record>{
    var response = this.httpClient.get<Record>(this.recordsUrl + "/" + id);
    return response;
  }

  addRecord(record: Record): Observable<Record> {

    var response = this.httpClient.post<Record>(this.recordsUrl, record);
    return response;
  }
}
