import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit{
 genders = ['male', 'female']
 form!: FormGroup
 usernames = ['Johndoe', 'Janedoe', 'test']


 ngOnInit(): void {
   this.form = new FormGroup({
    PersonalDetails:new FormGroup({
    name:new FormControl(null,[Validators.required, this.unallowedUsernames.bind(this)]),
    email:new FormControl(null,[Validators.required, Validators.email]),
    phone:new FormControl(null,[Validators.required])
  }),
    message:new FormControl(null,[Validators.required]),
    gender:new FormControl(null,[Validators.required]),
    role:new FormControl('Winger'),
    hobbies:new FormArray([
      
    ]),


   })
 }

 submitData(){

console.log(this.form);

 }

 addNewHobby(){
 let control = new FormControl(null, [Validators.required]);
 (this.form.get('hobbies')as FormArray).push(control)

  
}

getControls(){
   return (this.form.get('hobbies')as FormArray).controls
   
 }

 removeControl(i:number){
  (this.form.get('hobbies')as FormArray).removeAt(i)
  
}

unallowedUsernames(control:FormControl):{[s:string]:boolean} | null{

 if(this.usernames.indexOf(control.value)!==-1){

  return {forbbidenName:true }
 }
 return null  
}


}
