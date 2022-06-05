$(function () {
  $('#calendar').fullCalendar({
    locale: 'zh-tw',
    themeSystem: 'bootstrap4',
    views: {
      month: {
        titleFormat: 'MMM',
      },
    },
    header: {
      left: 'prev',
      center: 'title',
      right: 'next',
    },
    dayNamesShort: ["日", "一", "二", "三", "四", "五", "六"],
    displayEventTime: true,
    displayEventEnd: true,
    viewRender: function (view, element) {
      // 換月份讀取資料更換 eventSources
      $('#calendar').fullCalendar('addEventSource', {
        editable: true,
        color: 'blue',
        textColor: 'white',
        events: [
          {
            title: '<span>event1</span><span class="ml-1 badge badge-light">7</span>',
            start: '2022-06-02T12:30:00',
            end: '2022-06-02T13:30:00',
          },
          {
            title: 'event2',
            start: '2022-06-06T12:30:00',
            end: '2022-06-06T13:30:00'
          },
          {
            title: 'event3',
            start: '2022-06-12T12:30:00',
            end: '2022-06-12T13:30:00',
          }
        ],
      });
    },
    eventSources: [
      {
        editable: true,
        color: 'black',
        textColor: 'yellow',
        events: [
          {
            title: 'event1',
            start: '2022-06-01T12:30:00',
            end: '2022-06-01T13:30:00',
          },
          {
            title: 'event2',
            start: '2022-06-05T12:30:00',
            end: '2022-06-05T13:30:00'
          },
          {
            title: '<span>event3</span><span class="ml-1 badge badge-light">7</span>',
            start: '2022-06-09T12:30:00',
            end: '2022-06-09T13:30:00',
          }
        ],
      },
    ],
    eventClick: function (calEvent, jsEvent, view) {

      alert('Event: ' + calEvent.title);
      alert('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);
      alert('View: ' + view.name);

      // change the border color just for fun
      $(this).css('border-color', 'red');

    },
    eventRender: function (event, element, view) {
      var title = element.find('.fc-title');
      title.html(title.text());
      console.log('111111');
    },
    eventRenderWait: 300, // debounce
  });

  var calendarPrevBtn = $('#calendar > div.fc-toolbar.fc-header-toolbar > div.fc-left > button');
  var calendarNextBtn = $('#calendar > div.fc-toolbar.fc-header-toolbar > div.fc-right > button');

  calendarPrevBtn.append('&nbsp;上個月');
  calendarNextBtn.prepend('下個月&nbsp;');

  calendarPrevBtn.removeClass('btn-primary').addClass('btn-light');
  calendarNextBtn.removeClass('btn-primary').addClass('btn-light');

  $('#calendar > div.fc-toolbar.fc-header-toolbar > div.fc-clear').remove();
});
