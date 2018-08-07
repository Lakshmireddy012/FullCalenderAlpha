import { Component, OnInit, ElementRef } from '@angular/core';
declare const FullCalendar: any;
declare const $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  displayEvent: any;
  ngOnInit() {
    this.calendar();
    // var x = document.getElementsByClassName("fc-day-top");
    // console.log("cell value ",x[0]);
    var element =document.getElementsByClassName("fc-day-top");
    let spanEl = <HTMLElement> element[0];
    spanEl.style.color = 'orange';
  }
  calendar() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
      defaultDate: '2018-04-12',
      navLinks: true, // can click day/week names to navigate views
      selectable: true,
      selectHelper: true,
      //fixedWeekCount: false,
      select: function(start, end) {
        var title = prompt('Event Title:');
        var eventData;
        if (title) {
          eventData = {
            title: title,
            start: start,
            end: end
          };
          $('#calendar').fullCalendar('renderEvent', eventData, true); // stick? = true
        }
        $('#calendar').fullCalendar('unselect');
      },
      dayRender: function (date, cell) {
        
      //cell.parentElement.parentElement.parentElement.parentElement.nextElementSibling.childNodes[0].childNodes[0].childNodes[0].childNodes[1].style.backgroundColor="pink";
      // if(cell.dataset.date=="2018-04-01"){
      //   cell.parentElement.parentElement.parentElement.parentElement.nextElementSibling.childNodes[0].childNodes[0].childNodes[0].childNodes[1].style.backgroundColor="pink";
      // }
      // if(cell.dataset.date=="2018-04-02"){
      //   cell.parentElement.parentElement.parentElement.parentElement.nextElementSibling.childNodes[0].childNodes[0].childNodes[0].childNodes[1].style.backgroundColor="green";
      // }
       //cell.style.backgroundColor="yellow";
       // cell.bgColor="red";
      },  
      editable: false,
      weekNumbers: true,
      //weekNumbersWithinDays:true,
      eventLimit: true, // allow "more" link when too many events
      events: [
        {
          title: 'All Day Event',
          start: '2018-04-01'
        },
        {
          title: 'Long Event',
          start: '2018-04-07',
          end: '2018-04-10'
        },
        {
          id: 999,
          title: 'Repeating Event',
          start: '2018-04-09T16:00:00'
        },
        {
          id: 999,
          title: 'Repeating Event',
          start: '2018-04-16T16:00:00'
        },
        {
          title: 'Conference',
          start: '2018-04-11',
          end: '2018-04-13'
        },
        {
          title: 'Meeting',
          start: '2018-04-12T10:30:00',
          end: '2018-04-12T12:30:00'
        },
        {
          title: 'Lunch',
          start: '2018-04-12T12:00:00'
        },
        {
          title: 'Meeting',
          start: '2018-04-12T14:30:00'
        },
        {
          title: 'Happy Hour',
          start: '2018-04-12T17:30:00'
        },
        {
          title: 'Dinner',
          start: '2018-04-12T20:00:00'
        },
        {
          title: 'Birthday Party',
          start: '2018-04-13T07:00:00'
        },
        {
          title: 'Click for Google',
          url: 'http://google.com/',
          start: '2018-04-28'
        }
      ]
    });
    calendar.render();
  }
}
