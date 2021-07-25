import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  collapsed = true
  visible = true
  fixed = true
  scrollHeight = {
    value: 0,
    previous: 0
  }

  toggleCollapse = ()=>{
    this.collapsed = !this.collapsed
  }

  setVariables = ()=>{
    this.scrollHeight = {
      previous: this.scrollHeight.value,
      value: window.pageYOffset
    }
    if(this.scrollHeight.value > 100 ){
      this.visible = this.scrollHeight.previous >= this.scrollHeight.value 
      this.fixed = true
    }else{
      this.visible = false
      this.fixed = false
    }
  }

  constructor() { }

  ngOnInit(): void {
    this.setVariables()
    window.addEventListener("scroll",()=>{
      this.setVariables()
    })
  }
}
