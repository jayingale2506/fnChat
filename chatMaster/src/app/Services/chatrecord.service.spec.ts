import { TestBed } from '@angular/core/testing';

import { ChatrecordService } from './chatrecord.service';

describe('ChatrecordService', () => {
  let service: ChatrecordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatrecordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
