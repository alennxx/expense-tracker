import { BuiltinType } from '@angular/compiler';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { ExpenseDetailsComponent } from './expense-details.component';

describe('ExpenseDetailsComponent', () => {

  let component: ExpenseDetailsComponent;
  let fixture: ComponentFixture<ExpenseDetailsComponent>;
  let element: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule ],
      declarations: [ ExpenseDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseDetailsComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('form structure', () => {

    it('expense form', () => {
      const form = element.querySelector('#expenseForm');
      expect(form).toBeTruthy();
    });

    it('expense name', () => {
      const nameSection = element.querySelector('#expenseName');
      expect(nameSection).toBeTruthy();

      const nameLabel = nameSection?.querySelector('label');
      expect(nameLabel).toBeTruthy();
      expect(nameLabel?.textContent).toEqual('Expense name');
      
      const nameInput = nameSection?.querySelector('input');
      expect(nameInput).toBeTruthy();
      expect(nameInput?.type).toBe('text');
      expect(nameInput?.value).toBeFalsy();
    });

    it('expense amount', () => {
      const amountSection = element.querySelector('#expenseAmount');
      expect(amountSection).toBeTruthy();

      const amountLabel = amountSection?.querySelector('label');
      expect(amountLabel).toBeTruthy();
      expect(amountLabel?.textContent).toEqual('Expense amount');

      const amountInput = amountSection?.querySelector('input');
      expect(amountInput).toBeTruthy();
      expect(amountInput?.type).toBe('number');
      expect(amountInput?.value).toBeFalsy();
    });

    it('expense category', () => {
      const categorySection = element.querySelector('#expenseCategory');
      expect(categorySection).toBeTruthy();

      const categoryLabel = categorySection?.querySelector('label');
      expect(categoryLabel).toBeTruthy();
      expect(categoryLabel?.textContent).toEqual('Expense category');

      const categorySelect = categorySection?.querySelector('select');
      expect(categorySelect).toBeTruthy();
      expect(categorySelect?.value).toBeFalsy();
    });

    it('submit form button', () => {
      const submitButton = element.querySelector('button[type="submit"]');
      expect(submitButton).toBeTruthy();
      expect(submitButton?.textContent).toEqual('Save');
    });

    it('clear form button', () => {
      const clearButton = element.querySelector('button[type="reset"]');
      expect(clearButton).toBeTruthy();
      expect(clearButton?.textContent).toEqual('Clear');
    });

  });

  describe('form validations', () => {
    let form : HTMLFormElement;

    beforeEach(() => {
      form = element.querySelector('#expenseForm') as HTMLFormElement;
    });

    describe('expense name', () => {
      let nameInput : HTMLInputElement;

      beforeEach(() => {
        nameInput = form.querySelector('#name') as HTMLInputElement;
        component.expenseForm.get('amount')?.setValue('10.0');
        component.expenseForm.get('category')?.setValue('cat');
      });

      it('invalid - empty', () => {
        nameInput.value = '';
        nameInput.dispatchEvent(new Event('input'));

        expect(component.expenseForm.valid).toBeFalse();
      });

      it('invalid - only whitespaces', () => {
        nameInput.value = '        ';
        nameInput.dispatchEvent(new Event('input'));

        expect(component.expenseForm.valid).toBeFalse();
      });

      xit('invalid - too long', () => {
        //TODO define max number of characters and add validator
        nameInput.value = 'A'.repeat(300);
        nameInput.dispatchEvent(new Event('input'));

        expect(component.expenseForm.valid).toBeFalse();
      })

      it('valid', () => {
        nameInput.value = 'Catnip';
        nameInput.dispatchEvent(new Event('input'));

        expect(component.expenseForm.get('name')?.value).toEqual(nameInput.value);
        expect(component.expenseForm.valid).toBeTrue();
      });

    });

    describe('expense amount', () => {
      let amountInput : HTMLInputElement;

      beforeEach(() => {
        amountInput = form.querySelector('#amount') as HTMLInputElement;
        component.expenseForm.get('name')?.setValue('Catnip');
        component.expenseForm.get('category')?.setValue('cat');
      });

      it('invalid - empty', () => {
        amountInput.value = '';
        amountInput.dispatchEvent(new Event('input'));

        expect(component.expenseForm.valid).toBeFalse();
      });

      it('invalid - not number', () => {
        amountInput.value = 'text';
        amountInput.dispatchEvent(new Event('input'));

        expect(component.expenseForm.valid).toBeFalse();
      });

      it('invalid - negative', () => {
        amountInput.value = '-45.31';
        amountInput.dispatchEvent(new Event('input'));

        expect(component.expenseForm.valid).toBeFalse();
      });

      xit('invalid - too many decimal places', () => {
        //TODO define max number of decimal places and add validator
        amountInput.value = '1.455';
        amountInput.dispatchEvent(new Event('input'));

        expect(component.expenseForm.valid).toBeFalse();
      });

      it('valid - zero', () => {
        amountInput.value = '0';
        amountInput.dispatchEvent(new Event('input'));

        expect(component.expenseForm.get('amount')?.value?.toString()).toEqual(amountInput.value);
        expect(component.expenseForm.valid).toBeTrue();
      });

      it('valid - positive', () => {
        amountInput.value = '34.56';
        amountInput.dispatchEvent(new Event('input'));

        expect(component.expenseForm.get('amount')?.value?.toString()).toEqual(amountInput.value);
        expect(component.expenseForm.valid).toBeTrue();
      });

    });

    describe('expense category', () => {
      let categorySelect : HTMLSelectElement;

      beforeEach(() => {
        categorySelect = form.querySelector('#category') as HTMLSelectElement;
        component.expenseForm.get('name')?.setValue('Catnip');
        component.expenseForm.get('amount')?.setValue('10.0');
      });

      it('invalid - empty', () => {
        categorySelect.value = '';
        categorySelect.dispatchEvent(new Event('change'));

        expect(component.expenseForm.valid).toBeFalse();
      });

      it('invalid - first empty value', () => {
        categorySelect.value = categorySelect.options[0].value;
        categorySelect.dispatchEvent(new Event('change'));

        expect(component.expenseForm.valid).toBeFalse();
      });

      it('invalid - not from options', () => {
        categorySelect.value = 'some expense category which for sure does not exist'
        categorySelect.dispatchEvent(new Event('change'));
        expect(component.expenseForm.valid).toBeFalse();
      });

      it('valid', () => {
        categorySelect.value = categorySelect.options[1].value;
        categorySelect.dispatchEvent(new Event('change'));

        expect(component.expenseForm.valid).toBeTrue();
      });

    });

  });

  describe('form buttons', () => {
    const validFormValue = {
      name: 'Cat',
      amount: '10.0',
      category: 'cat'
    };
    const invalidFormValue = {
      name: '',
      amount: '-45.3',
      category: '  '
    };
    let form : HTMLFormElement;

    beforeEach(() => {
      form = element.querySelector('#expenseForm') as HTMLFormElement;
    });

    describe('save button', () => {

      it('disabled when form is invalid', () => {
        component.expenseForm.setValue(invalidFormValue);
        fixture.detectChanges();

        const submitButton = form.querySelector('button[type="submit"') as HTMLButtonElement;
        expect(submitButton.disabled).toBeTrue();
      });

      it('enabled when form is valid', () => {
        component.expenseForm.setValue(validFormValue);
        fixture.detectChanges();

        const submitButton = form.querySelector('button[type="submit"') as HTMLButtonElement;
        expect(submitButton.disabled).toBeFalse();
      });

      it('call save expense', fakeAsync(() => {
        component.expenseForm.setValue(validFormValue);
        fixture.detectChanges();
        spyOn(component, 'save');

        const submitButton = form.querySelector('button[type="submit"') as HTMLButtonElement;
        submitButton.click();
        tick();
        expect(component.save).toHaveBeenCalled();
      }));

    });

    describe('clear button', () => {

      it('enabled when form is invalid', () => {
        component.expenseForm.setValue(invalidFormValue);
        fixture.detectChanges();

        const clearButton = form.querySelector('button[type="reset"') as HTMLButtonElement;
        expect(clearButton.disabled).toBeFalse();
      });

      it('enabled when form is valid', () => {
        component.expenseForm.setValue(validFormValue);
        fixture.detectChanges();

        const clearButton = form.querySelector('button[type="reset"') as HTMLButtonElement;
        expect(clearButton.disabled).toBeFalse();
      });

      it('clear form', () => {
        component.expenseForm.setValue(validFormValue);
        fixture.detectChanges();

        const clearButton = form.querySelector('button[type="reset"') as HTMLButtonElement;
        clearButton.click();

        expect(component.expenseForm.valid).toBeFalse();
        expect(component.expenseForm.get('name')?.value).toBeFalsy();
        expect(component.expenseForm.get('amount')?.value).toBeFalsy();
        expect(component.expenseForm.get('category')?.value).toBeFalsy();

        expect((form.querySelector('#name') as HTMLInputElement).value).toBeFalsy();
        expect((form.querySelector('#amount') as HTMLInputElement).value).toBeFalsy();
        expect((form.querySelector('#category') as HTMLSelectElement).value).toBeFalsy();
      });

    });

  });
});
