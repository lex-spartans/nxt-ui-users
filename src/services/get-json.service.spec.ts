import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ENV_CONFIG } from '../app/shared/tokens/environments-config';
import { IEnvironments } from '../interfaces/iEnvironments';
import { GetJsonService } from './get-json.service';

describe('GetJsonService', () => {
  let service: GetJsonService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        GetJsonService,
        {
          provide: ENV_CONFIG,
          useValue: { baseUrl: 'http://example.com' } as IEnvironments
        }
      ]
    });
    service = TestBed.inject(GetJsonService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an Observable', () => {
    const dummyData = { title: 'Test Data' };

    service.getdata().subscribe(data => {
      expect(data).toEqual(dummyData);
    });

    const req = httpTestingController.expectOne('http://example.com/posts/1');
    expect(req.request.method).toBe('GET');
    req.flush(dummyData);
  });
});
