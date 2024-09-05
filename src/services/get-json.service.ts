import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEnvironments } from '../interfaces/iEnvironments';
import { ENV_CONFIG } from '../shared/tokens/environments-config';

@Injectable({
  providedIn: 'root',
})
export class GetJsonService {
  private baseUrl!: string;
  constructor(
    @Inject(ENV_CONFIG) private environment: IEnvironments,
    private httClient: HttpClient,
  ) {
    this.baseUrl = this.environment.baseUrl;
  }

  public getdata(): Observable<unknown> {
    return this.httClient.get(`${this.baseUrl}/posts/1`);
  }
}
