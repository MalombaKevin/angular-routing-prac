import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector:'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {
  default='Striker'

  genders = ['male', 'female']
  // submitF: orm(form: NgForm) {

  //   console.log(form);
  // }
  
  @ViewChild('form')form!: NgForm 
  
  submitForm() {
    console.log(this.form);
    this.form.reset()
  }


  

  prePopulate() {
    // this.form.setValue({
    //   gender:'ma le',
    //   message:'HI there',
    //   personalDetails:{
    //     email:"kmaloba@gmail",
    //     name:"kevin",
    //     phone: "0725"        
    //   },
    //   role:'Winger'      
    // })

    this.form.form.patchValue({
      personalDetails:{
            email:"kmaloba@gmail",
            name:"kevin",
            phone: "0725"        
          }           
      })
  }


 

}
