describe('Time picker tile', function() {
    var baseUrl = 'http://192.168.1.64:3042'
    baseUrl = 'http://www.reservethetime.com';
    var ptor;

    beforeEach(function() {
        ptor = protractor.getInstance();
        ptor.ignoreSynchronization = true;
        ptor.get(baseUrl);
    });

    it('should change to hour picker when clicking current selected hour', function() {
        // Click on hour picker toggle
        element((by.binding("UserSelection.selectedDate"))).click()
        element.all(by.binding("hour")).then(function(selectableHours) {
            expect(selectableHours.length).toEqual(12);
        });
    }, 10000);
});
