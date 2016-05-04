import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
    selector: 'home-page',
    templateUrl: 'app/modules/home/home.html'
})

export class HomeComponent {
    ngOnInit(){
        $.material.init();

        $('.select').dropdown({
            autoinit: '.select'
        });

        $('input[name=trip-type]').click(function(){
            if($(this).val()=='oneWay'){
                $('#show-day-return').hide();
                $('#dayReturn').val('');
                $('#show-day-return .form-group').addClass('is-empty');
            }else{
                $('#show-day-return').show();
            }
        })

        $.fn.datepicker.dates['vi'] = {
            days: ["Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy"],
            daysShort: ["CN", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"],
            daysMin: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
            months: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"],
            monthsShort: ["Th1", "Th2", "Th3", "Th4", "Th5", "Th6", "Th7", "Th8", "Th9", "Th10", "Th11", "Th12"],
            today: "Hôm nay",
            clear: "Xóa",
            format: "dd/mm/yyyy"
        };
        var nowDate = new Date();
        $.fn.datepicker.defaults.language = 'vi';
        $.fn.datepicker.defaults.format = 'dd/mm/yyyy';
        $.fn.datepicker.defaults.autoclose = true;
        $.fn.datepicker.defaults.startDate = nowDate;
        $('.datepicker').datepicker();
    }
}