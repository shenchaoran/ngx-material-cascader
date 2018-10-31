import { ControlValueAccessor } from '@angular/forms'

export class NgModelBase implements ControlValueAccessor {
  public propagateChange = (v: any) => {}
  public _innerValue: any

  set value(v: any) {
    if (v !== this._innerValue) {
      this._innerValue = v
      this.propagateChange(v)
    }
  }

  get value(): any {
    return this._innerValue
  }

  writeValue(v: any) {
    if (v !== this._innerValue) {
      this._innerValue = v
    }
  }

  registerOnChange(fn: any) {
    this.propagateChange = fn
  }

  registerOnTouched(fn: any) {
    this.propagateChange = fn
  }
}
