import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConteudoComponentComponent } from './conteudo-component.component';

describe('ConteudoComponentComponent', () => {
  let component: ConteudoComponentComponent;
  let fixture: ComponentFixture<ConteudoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConteudoComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConteudoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
