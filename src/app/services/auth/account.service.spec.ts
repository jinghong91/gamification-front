import { TestBed } from '@angular/core/testing';
import { AccountService } from './account.service';
import { SessionStorageService } from 'ngx-webstorage';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AccountService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [SessionStorageService]
  }));

  it('should be created', () => {
    const service: AccountService = TestBed.get(AccountService);
    expect(service).toBeTruthy();
  });
});
