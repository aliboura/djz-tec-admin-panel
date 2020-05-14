import { Component, OnInit, OnDestroy } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit,OnDestroy {
  ngOnDestroy(): void {
    document.body.className = "";
  }

  constructor() { }

  ngOnInit() {
    // window.dispatchEvent(new Event('resize'));
    // document.body.className = "hold-transition skin-blue sidebar-mini";
    // $(document).ready(() => {
    //   const trees: any = $('[data-widget="tree"]');
    //   if (trees) {
    //     trees.tree();
    //   }
    // });
  }
}
