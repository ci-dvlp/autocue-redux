import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SheetContainerComponent } from './sheet-container.component';

describe('SheetContainerComponent', () => {
  let component: SheetContainerComponent;
  let fixture: ComponentFixture<SheetContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SheetContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SheetContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
