export class Doctor 
{
  constructor(name, experience, hasLicense)
  {
    this.name = name;
    this.experience = experience;
    this.hasLicense = hasLicense;
  }

  get name() 
  {
    return this._name;
  }

  set name(value) 
  {
    if (value.length < 2) 
    {
      alert("Имя должно быть строкой не менее 2 символов");
      return;
    }
    this._name = value;
  }

  get experience() 
  {
    return this._experience;
  }

  set experience(value) 
  {
    if (value < 0) 
    {
      alert("Опыт должен быть числом не меньше 0");
      return;
    }
    this._experience = value;
  }

  get hasLicense() 
  {
    return this._hasLicense;
  }

  set hasLicense(value) 
  {
    if (typeof value !== 'boolean') 
    {
      alert("Лицензия должна быть true или false");
      return;
    }
    this._hasLicense = value;
  }

  show() 
  {
    console.log(`Врач: ${this.name}, Опыт: ${this.experience} лет, Лицензия: ${this.hasLicense}`);
  }

  delete() 
  {
    this._name = null;
    this._experience = null;
    this._hasLicense = null;
    console.log("Экземпляр врача удалён");
  }

  copy() 
  {
    return this;
  }


  #performSurgery() 
  {
    return `${this.name} проводит лекцию`;
  }

  doWork() 
  {
    console.log(this.#performSurgery());
  }

  static clone(doctor) 
  {
    return new Doctor(doctor.name, doctor.experience, doctor.hasLicense);
  }
}