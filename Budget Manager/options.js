$(function(){

    chrome.storage.sync.get('limit', function(budget){
        $('#limit').val(budget.limit);
    });

    $('#saveLimit').click(function(){
        var limit = $('#limit').val();
        if(limit){
            chrome.storage.sync.set({'limit': limit}, function(){
                close();
            });
        }
    });

    $('#resetTotal').click(function(){
        chrome.storage.sync.set({'total':0}, function(){
            var notifOptions = {
                type: 'basic',
                iconUrl: 'icon32.png',
                title: 'Total reset',
                message: 'You have reset the total!'
            };
            chrome.notifications.create('limitNotif', notifOptions);
        });
    });
});