import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
//
import { EmployeeService } from '../../../service/employee/employee.service';
import { CookieService } from 'ngx-cookie-service';
//
import { EvaluationService } from '../../../service/evaluation/evaluation.service';



interface Employee {
  empId: string;
  empName: string;
}

@Component({
  selector: 'app-input-evaluation',
  templateUrl: './input-evaluation.component.html',
  styleUrls: ['./input-evaluation.component.css']
})
export class InputEvaluationComponent implements OnInit {

  //-------
  employees: [];
  //-------
  all_option: any = [];

  access_token = this.cookieService.get('access_token');

  id = this.cookieService.get('id');

  get employeeId() {
    return this.userprofileForm.get('employeeId');

  }

  constructor(private employee: EmployeeService, private cookieService: CookieService, private evaluation: EvaluationService) {
    // console.log("token is", this.access_token);
    // console.log("Employee Id is:",this.id);
  }

  userprofileForm = new FormGroup({
    employee_id: new FormControl(null, Validators.required),
    employee_autonomous: new FormControl(null, Validators.required),
    employee_humble: new FormControl(null, Validators.required),
    employee_passionate: new FormControl(null, Validators.required),
    employee_honest: new FormControl(null, Validators.required),
    employee_relible: new FormControl(null, Validators.required),
    employee_creative: new FormControl(null, Validators.required),
    employee_confident: new FormControl(null, Validators.required),
    employee_eager: new FormControl(null, Validators.required),
    employee_positive: new FormControl(null, Validators.required),

    //About working attitude
    developing_part: new FormControl(null, Validators.required),
    spoke_up: new FormControl(null, Validators.required),
    activity_vocal: new FormControl(null, Validators.required),
    information_shared: new FormControl(null, Validators.required),
    quick_share_issues: new FormControl(null, Validators.required),
    helped_others: new FormControl(null, Validators.required),
    skill_improved: new FormControl(null, Validators.required),
    developing_on_schedule: new FormControl(null, Validators.required),
    leadership_ability: new FormControl(null, Validators.required),
    punctional_employee: new FormControl(null, Validators.required),
    frequently_dose_off: new FormControl(null, Validators.required),
    hearts_someone: new FormControl(null, Validators.required),
    unnecessary_talks: new FormControl(null, Validators.required),
    unnecessary_activities: new FormControl(null, Validators.required),
    keep_equipment_good: new FormControl(null, Validators.required),
  });



  onSubmit() {
    var selectemployeename = this.userprofileForm.controls['employee_id'].value;
    var employeeautonomous = this.userprofileForm.controls['employee_autonomous'].value;
    var employeehumble = this.userprofileForm.controls['employee_humble'].value;
    var employeepassionate = this.userprofileForm.controls['employee_passionate'].value;
    var employeehonest = this.userprofileForm.controls['employee_honest'].value;
    var employeerelible = this.userprofileForm.controls['employee_relible'].value;
    var employeecreative = this.userprofileForm.controls['employee_creative'].value;
    var employeeConfident = this.userprofileForm.controls['employee_confident'].value;
    var employeeeager = this.userprofileForm.controls['employee_eager'].value;
    var employeepositive = this.userprofileForm.controls['employee_positive'].value;
    var developingpart = this.userprofileForm.controls['developing_part'].value;
    var spokeup = this.userprofileForm.controls['spoke_up'].value;
    var activityvocal = this.userprofileForm.controls['activity_vocal'].value;
    var informationshared = this.userprofileForm.controls['information_shared'].value;
    var quickshareissues = this.userprofileForm.controls['quick_share_issues'].value;
    var helpedother = this.userprofileForm.controls['helped_others'].value;
    var skillimproved = this.userprofileForm.controls['skill_improved'].value;
    var developingonschedule = this.userprofileForm.controls['developing_on_schedule'].value;
    var leadershipability = this.userprofileForm.controls['leadership_ability'].value;
    var punctualemployee = this.userprofileForm.controls['punctional_employee'].value;
    var frequentlydoseoff = this.userprofileForm.controls['frequently_dose_off'].value;
    var heartsomeone = this.userprofileForm.controls['hearts_someone'].value;
    var unnecessarytalks = this.userprofileForm.controls['unnecessary_talks'].value;
    var unnecessaryactivities = this.userprofileForm.controls['unnecessary_activities'].value;
    var unnecessaryactivities = this.userprofileForm.controls['keep_equipment_good'].value;
  }


  ngOnInit(): void {
    this.employee.get_all_employee({ "access_token": this.access_token }).subscribe((result) => {
      this.employees = result.body;
      // console.log("all employees are:", this.employees);
    });

    //----------------------------------------//
    this.evaluation.showAllOption({ 'access_token': this.access_token }).subscribe(results => {
      this.all_option = results;
      console.log("All options are:", this.all_option);
    });

  }


  saveForm() {
    console.log('Form data from the UI ', this.userprofileForm.value);
    // this.evaluations = this.userprofileForm.value;
    // console.log("tokken are:", this.access_token);

    // var data = { data: this.userprofileForm.value, token: this.access_token  }

    this.evaluation.createEvaluation({
      "employee_id": this.userprofileForm.value.employee_id,
      //
      "employee_autonomous": this.userprofileForm.value.employee_autonomous,
      //
      "employee_humble": this.userprofileForm.value.employee_humble,
      //
      "employee_passionate": this.userprofileForm.value.employee_passionate,
      //
      "employee_honest": this.userprofileForm.value.employee_honest,
      //
      "employee_relible": this.userprofileForm.value.employee_relible,
      //
      "employee_creative": this.userprofileForm.value.employee_creative,
      //
      "employee_confident": this.userprofileForm.value.employee_confident,
      //
      "employee_eager": this.userprofileForm.value.employee_eager,
      //
      "employee_positive": this.userprofileForm.value.employee_positive,
      //
      "developing_part": this.userprofileForm.value.developing_part,
      //
      "spoke_up": this.userprofileForm.value.spoke_up,
      //
      "activity_vocal": this.userprofileForm.value.activity_vocal,
      //
      "information_shared": this.userprofileForm.value.information_shared,
      //
      "quick_share_issues": this.userprofileForm.value.quick_share_issues,
      //
      "helped_others": this.userprofileForm.value.helped_others,
      //
      "skill_improved": this.userprofileForm.value.skill_improved,
      //
      "developing_on_schedule": this.userprofileForm.value.developing_on_schedule,
      //
      "leadership_ability": this.userprofileForm.value.leadership_ability,
      //
      "punctional_employee": this.userprofileForm.value.punctional_employee,
      //
      "frequently_dose_off": this.userprofileForm.value.frequently_dose_off,
      //
      "hearts_someone": this.userprofileForm.value.hearts_someone,
      //
      "unnecessary_talks": this.userprofileForm.value.unnecessary_talks,
      //
      "unnecessary_activities": this.userprofileForm.value.unnecessary_activities,
      //
      "keep_equipment_good": this.userprofileForm.value.keep_equipment_good,
      //
      "access_token": this.access_token,
      //
    }).subscribe((result) => {

      if (result) {
        console.log("data after posting", result);
        window.location.reload();
      }
      else {
        console.log("Allready hoye gesa");
      }
    })
  }
}
