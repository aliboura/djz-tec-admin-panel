import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-dashboardtest',
  templateUrl: './dashboardtest.component.html',
  styleUrls: ['./dashboardtest.component.css']
})
export class DashboardtestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    $('#sidebarToggle, #sidebarToggleTop').on('click', (e) => {
      $('body').toggleClass('sidebar-toggled');
      $('.sidebar').toggleClass('toggled');
      if ($('.sidebar').hasClass('toggled')) {
        $('.sidebar .collapse').collapse('hide');
      }
    });
    //////

    $(window).resize(() => {
      if ($(window).width() < 768) {
        $('.sidebar .collapse').collapse('hide');
      }
    });

    ///


  }

}
