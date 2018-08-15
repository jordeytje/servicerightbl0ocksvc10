$(document).ready(function () {
    // selectize
    // $('.selectize-control').selectize({
    //     create: true,
    //     sortField: {
    //         field: 'text',
    //         direction: 'asc'
    //     },
    //     dropdownParent: 'body'
    // });

    // $(".test-selectize").selectize({
    //     options: [
    //         {id: 'avenger', make: 'dodge', model: 'Avenger'},
    //         {id: 'caliber', make: 'dodge', model: 'Caliber'},
    //         {id: 'caravan-grand-passenger', make: 'dodge', model: 'Caravan Grand Passenger'},
    //         {id: 'challenger', make: 'dodge', model: 'Challenger'},
    //         {id: 'ram-1500', make: 'dodge', model: 'Ram 1500'},
    //         {id: 'viper', make: 'dodge', model: 'Viper'},
    //         {id: 'a3', make: 'audi', model: 'A3'},
    //         {id: 'a6', make: 'audi', model: 'A6'},
    //         {id: 'r8', make: 'audi', model: 'R8'},
    //         {id: 'rs-4', make: 'audi', model: 'RS 4'},
    //         {id: 's4', make: 'audi', model: 'S4'},
    //         {id: 's8', make: 'audi', model: 'S8'},
    //         {id: 'tt', make: 'audi', model: 'TT'},
    //         {id: 'avalanche', make: 'chevrolet', model: 'Avalanche'},
    //         {id: 'aveo', make: 'chevrolet', model: 'Aveo'},
    //         {id: 'cobalt', make: 'chevrolet', model: 'Cobalt'},
    //         {id: 'silverado', make: 'chevrolet', model: 'Silverado'},
    //         {id: 'suburban', make: 'chevrolet', model: 'Suburban'},
    //         {id: 'tahoe', make: 'chevrolet', model: 'Tahoe'},
    //         {id: 'trail-blazer', make: 'chevrolet', model: 'TrailBlazer'},
    //     ],
    //     optgroups: [
    //         {id: 'dodge', name: 'Dodge'},
    //         {id: 'audi', name: 'Audi'},
    //         {id: 'chevrolet', name: 'Chevrolet'}
    //     ],
    //     labelField: 'model',
    //     valueField: 'id',
    //     optgroupField: 'make',
    //     optgroupLabelField: 'name',
    //     optgroupValueField: 'id',
    //     optgroupOrder: ['chevrolet', 'dodge', 'audi'],
    //     searchField: ['model'],
    //     plugins: ['optgroup_columns']
    // });

    $('.test-selectize').selectize({
        options: [
            {class: 'populair', value: "volkswagen", name: "Volkswagen" },
            {class: 'populair', value: "bmw", name: "BMW" },
            {class: 'populair', value: "mercedes-benz", name: "Mercedes-Benz" },
            {class: 'populair', value: "audi", name: "Audi" },
            {class: 'populair', value: "volvo", name: "Volvo" },
            {class: 'other', value: "ac", name: "AC" },
            {class: 'other', value: "abarth", name: "Abarth" },
            {class: 'other', value: "aixam", name: "Aixam" }
        ],
        optgroups: [
            {value: 'populair', label: 'POPULAIR'},
            {value: 'other', label: 'OVERIGE'}
        ],
        optgroupField: 'class',
        labelField: 'name',
        searchField: ['name'],
        maxItems: 1,
        render: {
            optgroup_header: function(data, escape) {
                return '<div class="optgroup-header">' + escape(data.label) + '</div>';
            }
        }
    });

    $('#no-licenseplate-modal .test-selectize').on('change', function () {
       var brandSelect = $('#no-licenseplate-modal .brand-select'),
           modelSelect = $('#no-licenseplate-modal .model-select'),
           buildyearSelect = $('#no-licenseplate-modal .buildyear-select'),
           fuelSelect = $('#no-licenseplate-modal .fuel-select');

        if(buildyearSelect.find('.test-selectize').val()) {
            fuelSelect.addClass('active');
        } else {
            fuelSelect.removeClass('active');
        }

        if(modelSelect.find('.test-selectize').val()) {
            buildyearSelect.addClass('active');
        } else {
            buildyearSelect.removeClass('active');
            fuelSelect.removeClass('active');
        }

        if(brandSelect.find('.test-selectize').val()) {
            modelSelect.addClass('active');
        } else {
            modelSelect.removeClass('active');
            buildyearSelect.removeClass('active');
            fuelSelect.removeClass('active');
        }

    });

});